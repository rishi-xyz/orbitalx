import { FC, memo } from "react";
import { Landmark, ReceiptText, ArrowRightLeft, Send, ScanQrCode } from "lucide-react"
import Link from 'next/link';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Swap from "@/src/swap";
import TokenSelectorModal from "@/src/modals/token-selector";
import AvtarList from "./AvtarList";


interface ActionButtonProps {
  icon: FC<{ className?: string }>;
  label: string;
  link?: string;
}

const ActionButton: FC<ActionButtonProps> = memo(({ icon: Icon, label, link }) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <div className="flex flex-col items-center w-full sm:w-24 h-24 sm:h-24 mx-auto max-w-xs bg-gray-800/70 backdrop-blur-md rounded-2xl p-2 sm:p-4 transition-all duration-300 hover:bg-purple-700/70 border border-purple-600/20">
            <div className="w-auto items-center justify-center flex flex-col">
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 text-white" />
              <p className="text-xs sm:text-sm text-center">{label}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex flex-col items-center w-full sm:w-24 h-24 sm:h-24 mx-auto max-w-xs bg-gray-800/70 backdrop-blur-md rounded-2xl p-2 sm:p-4 transition-all duration-300 hover:bg-purple-700/70 border border-purple-600/20">
          <div className="w-auto items-center justify-center flex flex-col">
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 text-white" />
            <p className="text-xs sm:text-sm text-center">{label}</p>
          </div>
        </div>
      )}
    </>
  );
});

ActionButton.displayName = "ActionButton";

const DashboardActionButtons = () => {
  return (
    <div className="mx-auto flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 w-full max-w-lg mt-4">
      <ActionButton icon={ScanQrCode} label="Scan" link="/scanqrcode" />
      <ActionButton icon={Send} label="Pay anyone" link="/payanyone" />
      <ActionButton icon={Landmark} label="Transfer" link="/transfer" />
      <ActionButton icon={ReceiptText} label="Pay bills" link="/pay-bills" />
      <Drawer>
        <DrawerTrigger>
          <ActionButton icon={ArrowRightLeft} label="Swap" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">Swap</DrawerTitle>
            <DrawerDescription>
              <Swap/>
              <TokenSelectorModal/>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
      
      
    </div>
  )
}

export default DashboardActionButtons