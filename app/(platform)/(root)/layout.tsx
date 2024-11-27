import Providers from "@/app/(platform)/(root)/provider";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Providers>
        <SidebarProvider>
          <AppSidebar />
          <main>{children}</main>
          <Toaster></Toaster>
        </SidebarProvider>
      </Providers>
    </ClerkProvider>
  );
};

export default RootLayout;
