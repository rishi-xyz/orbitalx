"use client";

import {
    CodegenGeneratedRouterSimulateSwapDocument,
    useCodegenGeneratedRouterAllTokensQuery,
    useCodegenGeneratedRouterSimulateSwapQuery,
    useCodegenGeneratedTokenTokenMetadataByIdQuery,
} from "@euclidprotocol/graphql-codegen/dist/src/react";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import Token from "@/components/token";
import { useTokenSelectorModalStore } from "@/src/modals/token-selector/state";
import { Input } from "@/components/ui/input";
import { convertMacroToMicro, convertMicroToMacro } from "@andromedaprotocol/andromeda.js";
import { useGetRoutes } from "@/src/hooks/rest/useGetRoutes";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import PromiseButton from "@/components/PromiseButton";
import { DenomSelector } from "@/components/DenomSelector";
import { BalanceValue } from "@/components/DenomBalance";
import { ITokenType } from "@euclidprotocol/graphql-codegen";
import { useWalletStore } from "@/src/zustand/wallet";
import { useWalletModalStore } from "@/src/modals/wallet/state";
import { useExecuteSwap } from "@/src/hooks/rest/useExecuteSwap";
import { toast } from "sonner";
import { gqlClient } from "@/lib/gql/client";
import reactQueryClient from "@/lib/react-query/client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRightLeft } from "lucide-react";

export default function Swap() {
    const { chain } = useWalletStore();
    const { onModalStateChange } = useWalletModalStore();
    const [fromToken, setFromToken] = useState<string>("");
    const [fromTokenAmount, setFromTokenAmount] = useState<string>("");
    const [toToken, setToToken] = useState<string>("");
    const [selectedFromDenom, setSelectedFromDenom] = useState<ITokenType>({ voucher: {} });

    useEffect(() => {
        setSelectedFromDenom({ voucher: {} });
    }, [fromToken])

    const [route, setRoute] = useState<string[]>([]);


    const { onOpenModal } = useTokenSelectorModalStore();

    const { data: tokens, loading } = useCodegenGeneratedRouterAllTokensQuery();

    const { data: fromTokenMetadata } =
        useCodegenGeneratedTokenTokenMetadataByIdQuery({
            variables: {
                token_token_metadata_by_id_token_id: fromToken || "",
            },
            skip: !fromToken,
        });

    const { data: toTokenMetadata } =
        useCodegenGeneratedTokenTokenMetadataByIdQuery({
            variables: {
                token_token_metadata_by_id_token_id: toToken || "",
            },
            skip: !toToken,
        });

    const microFromValue = useMemo(() => {
        return convertMacroToMicro(fromTokenAmount, fromTokenMetadata?.token.token_metadata_by_id.coinDecimal ?? 6).split(".")[0]
    }, [fromTokenAmount, fromTokenMetadata])

    const { data: routes, isLoading: routesLoading } = useGetRoutes({
        tokenIn: fromToken,
        tokenOut: toToken,
        amountIn: microFromValue
    })


    useEffect(() => {
        if (routes && routes.paths && routes.paths.length > 0) {
            setRoute(routes.paths[0]?.route || [])
        } else {
            setRoute([])
        }
    }, [routes])

    const { data: simulateSwapResult } = useCodegenGeneratedRouterSimulateSwapQuery({
        variables: {
            router_simulate_swap_amount_in: microFromValue,
            router_simulate_swap_asset_in: fromToken || "",
            router_simulate_swap_asset_out: toToken || "",
            router_simulate_swap_min_amount_out: "1",
            router_simulate_swap_swaps: route ?? [],
        },
        skip: !fromToken || !toToken || microFromValue === "0" || !route,
    });

    const macroAmountOut = useMemo(() => {
        return convertMicroToMacro(simulateSwapResult?.router.simulate_swap.amount_out ?? "0", toTokenMetadata?.token.token_metadata_by_id.coinDecimal ?? 6)
    }, [simulateSwapResult, toTokenMetadata])

    const { mutateAsync: executeSwap, isPending } = useExecuteSwap();

    const handleSwap = async () => {
        try {
            const tx = await executeSwap({
                amountIn: microFromValue,
                assetIn: {
                    token: fromToken!,
                    token_type: selectedFromDenom!,
                },
                assetOut: toToken || "",
                // TODO: Implement UI to generate cross chain addresses and update this
                crossChainAddresses: [],
                // TODO: Implement UI for splippage and calculate this using the slippage percentage
                minAmountOut: "1",
                swaps: route || [],
                timeout: 600,
            });
            // Invalidate the simulate swap query
            await gqlClient.refetchQueries({
                'include': [CodegenGeneratedRouterSimulateSwapDocument]
            });

            // Invalidate the routes query
            await reactQueryClient.invalidateQueries({
                queryKey: ["rest", "routes"]
            })
            console.log("Swap successful:", tx.transactionHash);

        } catch (error) {
            // @ts-expect-error Error is not typed
            toast.error(`Swap failed: ${error.message}`);
            console.error("Swap failed:", error);
        }
    }


    return (
        <div className="flex flex-col items-center mt-4 gap-6 w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8 border border-gray-700 rounded-lg p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col w-full mr-2">
                    
                    <Button
                        onClick={() => onOpenModal({
                            tokens: tokens?.router.all_tokens.tokens ?? [],
                            title: "Select From Token",
                            description: "Select the token you want to swap",
                            onTokenSelect: (token) => { setFromToken(token); },
                        })}
                        disabled={loading}
                        size='lg'
                        className="w-full bg-gray-700 items-center justify-center hover:bg-gray-600 text-white transition-colors duration-200 "
                    >
                        {fromToken ? (
                            <div className="flex flex-row items-center justify-center gap-x-2">
                                <Token token={fromToken} />
                            </div>
                        ) : (
                            "From Token"
                        )}
                    </Button>

                    <Input
                        value={fromTokenAmount}
                        onChange={(e) => setFromTokenAmount(e.target.value)}
                        placeholder="0.00"
                        className="text-lg h-12 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 mt-8"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <ArrowRightLeft className="text-white" />
                </div>

                <div className="flex flex-col w-full ml-2">
                    <Button
                        onClick={() => onOpenModal({
                            tokens: tokens?.router.all_tokens.tokens ?? [],
                            title: "Select To Token",
                            description: "Select the token you want to receive",
                            onTokenSelect: (token) => { setToToken(token); },
                        })}
                        disabled={loading}
                        size='lg'
                        className="w-full bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-200"
                    >
                        {toToken ? (
                            <div className="flex flex-row items-center gap-x-2">
                                <Token token={toToken} />
                            </div>
                        ) : (
                            "To Token"
                        )}
                    </Button>
                    <Input
                        value={macroAmountOut}
                        placeholder="0.00"
                        className="text-lg h-12 bg-gray-800 border-gray-700 text-white mt-8"
                        readOnly
                        disabled
                    />
                </div>
            </div>

            <div className="w-full">
                {chain ? (
                    <PromiseButton
                        disabled={isPending || !fromToken || !toToken || microFromValue === "0" || !route}
                        onClick={() => {
                            if (isPending || !fromToken || !toToken || microFromValue === "0" || !route) return;
                            return handleSwap();
                        }}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200"
                    >
                        Swap
                    </PromiseButton>
                ) : (
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200" onClick={() => onModalStateChange(true)}>Connect Chain</Button>
                )}
            </div>

            <div className="h-[1px] bg-gray-700 w-full  gap-4" />

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Advance Options</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Advance Settings</DialogTitle>
                        <DialogDescription>
                            Make some advance chnages according to your need.
                        </DialogDescription>
                    </DialogHeader>
                    {/**Denom selector and balance */}
                    {(fromToken && chain) && (
                        <div className="flex flex-row items-start gap-2 justify-start">
                            <BalanceValue
                                tokenId={fromToken}
                                selectedDenom={selectedFromDenom}
                            />
                            <DenomSelector
                                selectedDenom={selectedFromDenom}
                                chainUId={chain?.chain_uid ?? ""}
                                tokenId={fromToken}
                                setSelectedDenom={(d) => setSelectedFromDenom(d ?? { voucher: {} })}
                            />
                        </div>
                    )}
                    {/*Select Routes */}
                    <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center w-full">
                        <p className="text-gray-400 whitespace-nowrap">Select Route</p>
                        {routesLoading ? "Loading Routes" : routes?.paths?.length === 0 ? "No Routes Found" : (
                            <Select value={route.join("/")} onValueChange={(r) => setRoute(r.split('/'))}>
                                <SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700 text-white">
                                    {route.length > 0 ? (
                                        <div className="flex flex-row items-center gap-x-2">
                                            {route.join(" → ")}
                                        </div>
                                    ) : "Select Route"
                                    }
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                                    {routes?.paths?.map((path) => (
                                        <SelectItem key={path.route.join("/")} value={path.route.join("/")} className="hover:bg-gray-700">
                                            <div className="flex flex-row items-center gap-x-2">
                                                {path.route.join(" → ")}
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    </div>
                    {/*Slippage */}
                    <div>Slippage</div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
