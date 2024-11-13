"use client"
import { motion } from "framer-motion";
import startsBg from "@/assets/stars.png";
import Providers from "../(root)/provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

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
        <SidebarProvider>
          <AppSidebar />
          <main>
              {children}
          </main>
        </SidebarProvider>
      </Providers>
    </motion.section>
  );
};

export default DashboardLayout;
