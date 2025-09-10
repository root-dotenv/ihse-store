// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation-bar/page";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ihse-storemax",
  description: "A webstore app for Storemax by ihse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F5F5F5]`}
      >
        {/* - - - Navigation bar - common to all pages & routes */}

        <div>
          {/* Top Bar - Welcome Message */}
          <div className="bg-gradient-to-l from-[rgb(247,177,168)] to-[rgb(63,114,229)] to-99% py-2 text-center text-[#FFF] font-medium text-sm">
            Our warehouse to your housewares. Buy from StoreMax!
          </div>

          {/* - - - Social and Location Bar */}
          <div className="border-b-[1.25px] border-[#DBDCE0] shadow-xs">
            <div className="container flex justify-end items-center px-4 md:px-6 lg:px-8 mx-auto max-w-[1300px]">
              <div className="items-center space-x-4 mr-6 hidden md:flex py-4">
                <Link href="#" className="text-gray-600 hover:text-black">
                  <FaWhatsapp size={18} />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  <FaInstagram size={18} />
                </Link>
                <span className="block font-medium text-[0.9375rem]">
                  +255 788 608 851
                </span>
              </div>
              <div className="hidden md:flex items-center text-gray-700 text-sm cursor-pointer hover:text-black">
                <span className="mr-1">Tanzania (TZS)</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>
        </div>

        {/*  - - - Main Navigation Bar  */}
        <div className="w-full sticky top-0 z-50 ">
          <NavigationBar />
        </div>

        <main>{children}</main>
        {/* - - - Footer Section - common to all pages & routes */}
        <footer></footer>
      </body>
    </html>
  );
}
