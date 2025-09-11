// src/components/footer/footer.tsx
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import {
  MdOutlineLocationOn,
  MdOutlineCall,
  MdOutlineWhatsapp,
} from "react-icons/md";

export default function Footer() {
  const quickLinks = [
    { name: "Monitors", href: "/monitors" },
    { name: "Keyboards", href: "/keyboards" },
    { name: "Audio Equipments", href: "/audio" },
    { name: "Gadgets", href: "/gadgets" },
    { name: "Ergonomics", href: "/ergo-chairs" },
    { name: "Ergonomic Chairs", href: "/ergo-chairs" },
  ];

  return (
    <footer className="bg-[#2c2d2e] text-[#dadce0] text-[15px] leading-[24px] tracking-[-0.17px] py-[65px]">
      <div className="container mx-auto max-w-[1300px] px-4">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-8">
          {/* Logo */}
          <div className="mb-6 lg:mb-0">
            <Link href="/" className="text-3xl font-bold text-white">
              StoreMax+
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold text-white mb-4">Socials</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MdOutlineWhatsapp size={20} className="mr-3 flex-shrink-0" />
                <Link href="#" className="hover:text-white transition-colors">
                  WhatsApp
                </Link>
              </li>
              <li className="flex items-center">
                <FaInstagram size={20} className="mr-3 flex-shrink-0" />
                <Link href="#" className="hover:text-white transition-colors">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MdOutlineLocationOn
                  size={20}
                  className="mr-3 mt-1 flex-shrink-0"
                />
                <span>Musoma Mjini, Tanzania</span>
              </li>
              <li className="flex items-center">
                <MdOutlineCall size={20} className="mr-3 flex-shrink-0" />
                <span>+255 788 608 851</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-[#dadce081] pt-8 mt-8 text-left text-[#DADCE0]">
          <p>
            &copy; {new Date().getFullYear()} StoreMax+. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
