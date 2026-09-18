import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import Navbar from "@/app/components/layout/Navbar";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LASMAYA | Lagos State Man of the Year Award",
    template: "%s | LASMAYA",
  },

  description:
    "The official digital platform of the Lagos State Man of the Year Award — celebrating leadership, impact, service and legacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${manrope.variable} bg-[#090b0a]`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}