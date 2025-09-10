// src/components/navigation-bar/page.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingCart } from "lucide-react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/catalogue", text: "Catalogue" },
    { href: "/upgrades", text: "Upgrades" },
    { href: "/gadgets", text: "Gadgets" },
    { href: "/ergo-chairs", text: "Ergo Chairs" },
    {
      href: "/photography-video-equipments",
      text: "Photography/Video Equipments",
    },
    { href: "/monitors", text: "Monitors" },
    { href: "/gaming", text: "Gaming" },
    { href: "/contact", text: "Contact" },
  ];

  const menuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { x: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <header>
      <nav className="bg-[#f5f5f5] h-16 shadow-md flex items-center">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 max-w-[1300px]">
          {/* Mobile View Container */}
          <div className="w-full flex justify-between items-center lg:hidden">
            {/* Left: Mobile Menu Button */}
            <div className="w-1/3 flex justify-start">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-700 hover:text-black"
              >
                <LuMenu size={28} />
              </button>
            </div>
            {/* Center: Logo */}
            <div className="w-1/3 flex justify-center">
              <Link
                href="/"
                className="flex items-center text-black text-2xl font-bold"
              >
                StoreMax+
              </Link>
            </div>
            {/* Right: Mobile Icons */}
            <div className="w-1/3 flex justify-end">
              <button className="relative text-gray-700 hover:text-black">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-black text-[#f5f5f5] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Desktop View Container */}
          <div className="w-full hidden lg:flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center text-black text-[1.75rem] font-bold"
            >
              StoreMax+
            </Link>
            {/* Desktop Navigation & Icons */}
            <div className="flex items-center">
              <div className="flex items-center space-x-6 font-medium">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.text}
                  </NavLink>
                ))}
              </div>
              <div className="flex items-center space-x-6 pl-6 ml-6 border-l border-gray-300">
                <button className="text-gray-700 hover:text-black">
                  <Search size={20} />
                </button>
                <button className="text-gray-700 hover:text-black">
                  <User size={20} />
                </button>
                <button className="relative text-gray-700 hover:text-black">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-black text-[#f5f5f5] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (No changes needed here) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white lg:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* ... rest of the mobile menu overlay code remains the same */}
            <div className="flex justify-between items-center p-4 border-b">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-black"
              >
                <IoClose size={28} />
              </button>
              <Link href="/" className="text-black text-2xl font-bold">
                StoreMax+
              </Link>
              <div className="flex items-center space-x-4">
                <button className="text-gray-700 hover:text-black">
                  <Search size={20} />
                </button>
                <button className="relative text-gray-700 hover:text-black">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-black text-[#f5f5f5] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </MobileNavLink>
              ))}
            </div>
            <div className="absolute bottom-8 left-4 flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-black">
                <FaFacebook size={22} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <FaInstagram size={22} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-black">
                <TbTruckDelivery size={22} />
              </Link>
              <span className="block font-medium text-[0.9375rem]">
                +255 788 608 851
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Helper components (NavLink, MobileNavLink) remain the same
// ...
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <span
        className={`relative group inline-block text-[0.9375rem] py-2 transition-all duration-300 ${
          isActive ? "text-[#E4C100]" : "text-black hover:text-[#E4C100]"
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}
const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  href,
  children,
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-lg font-medium text-gray-800 py-3 border-b"
    >
      {children}
    </Link>
  );
};
