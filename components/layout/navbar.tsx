"use client"

import React from "react";
import { Button } from "../ui/button";
import { useWalletModalStore } from "@/src/modals/wallet/state";
import { useWalletStore } from "@/src/zustand/wallet";
import ChainHorizontal from "../ChainHorizontal";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    const { onModalStateChange } = useWalletModalStore()
    const { isConnected, chain } = useWalletStore()
    return (
        <header className="py-4 border-b border-white/15 md:border-none sticky top-0 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:border border-white/15 md:p-4 rounded-xl max-w-4xl mx-auto bg-black/50 backdrop-blur-sm">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">OrbitalX</h3>
                    {/* Wallet Button */}
                    <div className="flex-1 flex flex-row items-center justify-end">
                        <Button onClick={() => onModalStateChange(true)} >
                            {(isConnected && chain?.chain_uid) ?
                                <div className="flex flex-row items-center gap-x-2">
                                    <ChainHorizontal chain_uid={chain?.chain_uid} />
                                    <ChevronDown className="h-4 w-4" />
                                </div> : "Connect Wallet"}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
