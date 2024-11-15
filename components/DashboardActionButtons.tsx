import { FC, memo } from "react";
import { Landmark, ReceiptText, ArrowRightLeft, Send, ScanQrCode } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Swap from "@/src/swap";
import TokenSelectorModal from "@/src/modals/token-selector";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

const ActionButton: FC<ActionButtonProps> = memo(({ icon: Icon, label }) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-24 h-24 sm:h-24 mx-auto max-w-xs bg-gradient-to-r from-[#362c40] to-[#1c3044] hover:bg-purple-900/50 border border-purple-500/10 backdrop-blur-md rounded-2xl p-6 sm:p-4 mr-5 sm:mr-4 transition-transform duration-200 hover:scale-125">
      <div className="w-auto items-center justify-center flex flex-col">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 text-white" />
        <p className="text-xs sm:text-sm text-center">{label}</p>
      </div>
    </div>
  );
});

ActionButton.displayName = "ActionButton";

const DashboardActionButtons = () => {
  return (
    <div className="mx-auto flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 w-full max-w-lg mt-4 z-50">
      {/** Scan QR */}
      <Drawer>
        <DrawerTrigger>
          <ActionButton icon={ScanQrCode} label="ScanQR" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
              ScanConnect
            </DrawerTitle>
            <DrawerDescription>
              <ScanConnect />
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>

      {/** Pay Address */}
      <Dialog>
        <DialogTrigger>
          <ActionButton icon={Send} label="Pay Address" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
              PayAddress
            </DialogTitle>
            <DialogDescription>
              <PayAddress />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/** Transfer */}
      <Dialog>
        <DialogTrigger>
          <ActionButton icon={Landmark} label="Transfer" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
              Transfer
            </DialogTitle>
            <DialogDescription>
              <Transfer />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/** Pay bills */}
      <Dialog>
        <DialogTrigger>
          <ActionButton icon={ReceiptText} label="GroupPay" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
              GroupPay
            </DialogTitle>
            <DialogDescription>
              <Paybills />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/** Swap */}
      <Drawer>
        <DrawerTrigger>
          <ActionButton icon={ArrowRightLeft} label="Swap" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
              Swap
            </DrawerTitle>
            <DrawerDescription>
              <Swap />
              <TokenSelectorModal />
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DashboardActionButtons;
