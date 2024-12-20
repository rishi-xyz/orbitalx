import React from "react";
import Navbar from "./navbar";

export default function TransferLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-none w-full sticky top-0 z-20">
                <Navbar />
            </div>
            <div className="flex-1 flex flex-col p-10 ">
                {children}
            </div>
        </div>
    )
}