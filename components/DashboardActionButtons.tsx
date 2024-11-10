import { FC, memo } from "react";
import { Landmark, ReceiptText, ArrowRightLeft , Send ,ScanQrCode } from "lucide-react"
import DashboardBanner from "@/components/DashboardBanner";
import Link from 'next/link';

interface ActionButtonProps {
  icon: FC<{ className?: string }>;
  label: string;
  link: string;
}

const ActionButton: FC<ActionButtonProps> = memo(({ icon: Icon, label, link }) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-24 h-24 sm:h-24 mx-auto max-w-xs bg-gray-800/70 backdrop-blur-md rounded-2xl p-2 sm:p-4 transition-all duration-300 hover:bg-purple-700/70 border border-purple-600/20">
      <Link href={link}>
        <div className="w-auto items-center justify-center flex flex-col">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 text-white"/>
          <p className="text-xs sm:text-sm text-center">{label}</p>
        </div>
      </Link>
    </div>
  );
});

const DashboardActionButtons = () => {
  return (
    <div className="mx-auto flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 w-full max-w-lg mt-4">
      <ActionButton icon={ScanQrCode} label="Scan" link="/scanqrcode" />
      <ActionButton icon={Send} label="Pay anyone" link="/payanyone" />
      <ActionButton icon={Landmark} label="Transfer" link="/transfer" />
      <ActionButton icon={ArrowRightLeft} label="Swap" link="/swap" />
      <ActionButton icon={ReceiptText} label="Pay bills" link="/pay-bills" />
    </div>
  )
}

export default DashboardActionButtons