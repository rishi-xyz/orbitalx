import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge"
import { siteConfig } from "@/config/site";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title:{
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons:[{
    url:"/orbitalx-high-resolution-logo-transparent.png",
    href:"/orbitalx-high-resolution-logo-transparent.png",
  }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ twMerge(inter.className,"bg-black text-white antialiased")}
      >
        <ClerkProvider dynamic
        afterMultiSessionSingleSignOutUrl={"/"}
        afterSignOutUrl={"/"}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
