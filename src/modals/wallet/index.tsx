"use client";
import React from "react";
import {
    connectClient,
    useWalletStore,
} from "@/src/zustand/wallet";
import { useCodegenGeneratedChainsAllChainsQuery } from "@euclidprotocol/graphql-codegen/dist/src/react";
import { useWalletModalStore } from "@/src/modals/wallet/state";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ChainItem from "@/components/chain";

function WalletModal() {
    const { isModalOpen, onModalStateChange } = useWalletModalStore();
    const { chain: connectedChain } = useWalletStore()

    const { data: chains } = useCodegenGeneratedChainsAllChainsQuery({
        variables: {},
    });


    const handleConnect = async (chain_uid: string) => {
        try {
            await connectClient(chain_uid);
            onModalStateChange(false);
        } catch (error) {
            console.error("Connection failed:", error);
        }
    };

    const filteredChains = chains?.chains?.all_chains.filter(
        (chain) => !chain.chain_uid.toLowerCase().includes("vsl")
    );

    return (
        <Dialog open={isModalOpen} onOpenChange={onModalStateChange}>
            <DialogContent className="bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.3)_15%,rgb(14,0,36,.3)_78%,transparent)]">
                <DialogHeader>
                    <DialogTitle className="text-xl md:text-6xl font-bold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
                        Select Chain
                    </DialogTitle>
                    <DialogDescription>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 overflow-auto ">
                            {filteredChains?.map((chain) => (
                                <>
                                    {chain.factory_address != "" && (
                                        <ChainItem
                                            key={chain.chain_uid}
                                            chain={chain}
                                            selected={chain.chain_uid === connectedChain?.chain_uid}
                                            onClick={() => handleConnect(chain.chain_uid)}
                                        />
                                    )}
                                </>
                            ))}
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default WalletModal;
