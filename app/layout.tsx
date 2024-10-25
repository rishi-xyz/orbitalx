import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge"
import Providers from "./provider";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "OrbitalX",
  description: "Different Currency Same Process",
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
