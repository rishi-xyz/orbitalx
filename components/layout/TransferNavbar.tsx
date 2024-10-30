"use client";
import WalletModal from "@/src/modals/wallet";

const TransferNavbar = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:border border-white/15 md:p-4 rounded-xl max-w-4xl mx-auto bg-black/50 backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
            OrbitalX
          </h2>
          {/* Wallet Button */}
          <button
            onClick={()=>{<WalletModal/>}}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default TransferNavbar;
