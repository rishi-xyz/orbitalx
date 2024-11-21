"use client";
import { FC, memo } from "react";
import {
  Landmark,
  ReceiptText,
  ArrowRightLeft,
  Send,
  ScanQrCode,
} from "lucide-react";

import Swap from "@/src/swap";
import TokenSelectorModal from "@/src/modals/token-selector";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Paybills from "@/src/grouppay";
import Transfer from "@/src/transfer";
import ScanConnect from "@/src/ScanConnect";
import PayAddress from "@/src/PayAddress";

interface ActionButtonProps {
  icon: FC<{ className?: string }>;
  label: string;
}

const ActionButton: FC<ActionButtonProps> = memo(({ icon: Icon, label }) => (
  <div className="flex flex-col items-center w-24 h-24 mx-auto bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 hover:from-indigo-900 hover:via-purple-800 hover:to-purple-500 border border-purple-500/10 backdrop-blur-md rounded-2xl p-4 transition-transform duration-200 hover:scale-110">
    <Icon className="w-10 h-10 mb-2 text-white" />
    <p className="text-sm text-gray-300 text-center">{label}</p>
  </div>
));

ActionButton.displayName = "ActionButton";

const DashboardActionButtons = () => {
  return (
    <div className="mx-auto grid grid-cols-4 gap-4 w-full max-w-lg mt-4 z-50">
      {/* Scan QR */}
      <Dialog>
        <DialogTrigger>
          <ActionButton icon={ScanQrCode} label="Scan QR" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
              Scan Connect
            </DialogTitle>
            <ScanConnect />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Pay Address */}
      <Dialog>
        <DialogTrigger>
          <ActionButton icon={Send} label="Pay Address" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
              Pay Address
            </DialogTitle>
            <PayAddress />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Transfer */}
      <Dialog>
        <DialogTrigger>
          <ActionButton icon={Landmark} label="Transfer" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
              Transfer
            </DialogTitle>
            <Transfer />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* GroupPay */}
      <Dialog>
        <DialogTrigger>
          <ActionButton icon={ReceiptText} label="GroupPay" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
              GroupPay
            </DialogTitle>
            <Paybills />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Swap */}
      <Dialog>
        <DialogTrigger>
          <ActionButton icon={ArrowRightLeft} label="Swap" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
              Swap
            </DialogTitle>
            <Swap />
            <TokenSelectorModal />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardActionButtons;