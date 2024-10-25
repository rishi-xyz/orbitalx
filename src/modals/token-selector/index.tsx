"use client";
import React, { useState } from "react";
import { useTokenSelectorModalStore } from "@/src/modals/token-selector/state";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Token from "@/components/token";
import { Input } from "@/components/ui/input";

function TokenSelectorModal() {
    const { isModalOpen, onCloseModal, tokens, title, description, onTokenSelect } = useTokenSelectorModalStore();
    const [search, setSearch] = useState("");

    const handleTokenSelect = (token: string) => {
        onTokenSelect(token);
        onCloseModal();
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={onCloseModal}>
            <DialogContent className="w-full max-w-lg bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.2)_15%,rgb(14,0,36,.2)_78%,transparent)]">
                <DialogHeader>
                    <DialogTitle className="text-xl md:text-4xl font-bold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">{title}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <Input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={description}
                        className="w-full p-2 border rounded-md bg-background text-foreground"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 max-h-[60vh] overflow-y-auto">
                        {tokens.filter(t => search ? t.toLowerCase().includes(search.toLowerCase()) : true)?.map((token) => (
                            <div 
                                key={token} 
                                onClick={() => handleTokenSelect(token)} 
                                className="bg-secondary/50 rounded-md p-2 cursor-pointer hover:bg-secondary/70 transition-colors duration-200"
                            >
                                <Token
                                    key={token}
                                    token={token}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default TokenSelectorModal;
