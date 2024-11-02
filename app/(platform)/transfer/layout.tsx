"use client";
import { motion } from "framer-motion";
import startsBg from "@/assets/stars.png";
import Layout from "@/components/layout";
import WalletModal from "@/src/modals/wallet";

const TransferLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      style={{
        backgroundImage: `url(${startsBg.src})`,
      }}
      animate={{
        backgroundPositionX: startsBg.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 70,
        ease: "linear",
      }}
      className="min-h-screen flex flex-col"
    >
      <Layout >
        {children}
      </Layout>
      <WalletModal />
    </motion.section>
  );
}

export default TransferLayout;