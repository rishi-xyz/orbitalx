"use client";
import Swap from "@/src/swap";
import TokenSelectorModal from "@/src/modals/token-selector";

const TransferPage = () => {
  return (
    <section className="m flex items-center justify-center overflow-hidden relative p-4 ">

      {/* Swap container - updated styling */}
      <div className="relative z-10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-[95%] sm:max-w-md shadow-lg border border-purple-300/20 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,0.2)_15%,rgba(14,0,36,0.4)_78%,transparent)]">
        <Swap />
        <TokenSelectorModal />
      </div>
    </section>
  );
};

export default TransferPage;