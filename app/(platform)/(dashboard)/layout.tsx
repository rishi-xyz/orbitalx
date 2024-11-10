"use client"
import { motion } from "framer-motion";
import startsBg from "@/assets/stars.png";
import Providers from "../(root)/provider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      style={{
        backgroundImage: `url(${startsBg.src})`,
        width: '100vw',
        height: '100vh',
      }}
      animate={{
        backgroundPositionX: startsBg.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 70,
        ease: "linear",
      }}
      className="h-max"
    >
      <Providers>
        {children}
      </Providers>
    </motion.section>
  );
};

export default DashboardLayout;
