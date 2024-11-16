import React, { useState } from 'react'
import { DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button';
import { useTokenSelectorModalStore } from '@/src/modals/token-selector/state';
import { useCodegenGeneratedRouterAllTokensQuery } from '@euclidprotocol/graphql-codegen/dist/src/react';
import Token from './token';
import { Input } from './ui/input';
import PromiseButton from './PromiseButton';
import { useWalletModalStore } from '@/src/modals/wallet/state';
import { useWalletStore } from '@/src/zustand/wallet';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const PayContactsDialog = ({ UserName, UserId }: { UserName: string; UserId: string }) => {
    const { data: tokens, loading } = useCodegenGeneratedRouterAllTokensQuery();
    const { onOpenModal } = useTokenSelectorModalStore();
    const [selectToken, setSelectToken] = useState<string>("");
    const [tokenAmount, setTokenAmount] = useState<string>("");
    const [route] = useState<string[]>([]);
    const { onModalStateChange } = useWalletModalStore();
    const { chain } = useWalletStore();
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <DialogHeader>
                <DialogTitle className='text-2xl font-semibold mb-3 m-1 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text'>
                    {UserId}Pay {UserName}
                </DialogTitle>
                <DialogDescription>
                    <div className="flex flex-col items-center mt-6 gap-8 w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8 border border-gray-700 rounded-lg p-6 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
                        <div className="flex justify-between items-center gap-4 w-full">
                            <Button
                                onClick={() =>
                                    onOpenModal({
                                        tokens: tokens?.router.all_tokens.tokens ?? [],
                                        title: "Select Token",
                                        description: "Select token which you want to transfer",
                                        onTokenSelect: (token) => setSelectToken(token),
                                    })
                                }
                                disabled={loading}
                                className="bg-gray-700 text-white hover:bg-gray-600 w-full"
                            >
                                {selectToken ? <Token token={selectToken} /> : "Select Token"}
                            </Button>
                        </div>
                        {/* Amount Input */}
                        <Input
                            value={tokenAmount}
                            onChange={(e) => setTokenAmount(e.target.value)}
                            placeholder="Enter the amount"
                            className="text-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 w-full"
                        />
                        {/* Action Button */}
                        <div className="w-full">
                            {chain ? (
                                <AlertDialog>
                                    <AlertDialogTrigger className='w-full'>
                                        <PromiseButton
                                            disabled={!selectToken || !tokenAmount || !route}
                                            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                                        >
                                            Pay
                                        </PromiseButton>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle className="text-lg font-semibold mb-4 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
                                                Feature Coming soon
                                            </AlertDialogTitle>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter  className='flex items-center justify-center'>
                                            <AlertDialogAction>Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            ) : (
                                <Button
                                    onClick={() => onModalStateChange(true)}
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                                >
                                    Connect Chain
                                </Button>
                            )}
                        </div>
                    </div>
                </DialogDescription>
            </DialogHeader>
        </div>
    )
}

export default PayContactsDialog;