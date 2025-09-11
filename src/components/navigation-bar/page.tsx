// src/components/navigation-bar/page.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import navLinksData from "@/data/navigation-items.json";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Split navigation links for desktop view (now 7 items)
  const mainNavLinks = navLinksData.slice(0, 7);
  const moreNavLinks = navLinksData.slice(7);

  // Close "More" menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setIsMoreMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moreMenuRef]);

  const menuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { x: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const moreMenuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <header>
      <nav className="bg-[#f5f5f5] h-16 shadow-md flex items-center">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 max-w-[1380px]">
          {/* Mobile View Container */}
          <div className="w-full flex justify-between items-center lg:hidden">
            <div className="w-1/3 flex justify-start">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-700 hover:text-black"
              >
                <LuMenu size={28} />
              </button>
            </div>
            <div className="w-1/3 flex justify-center">
              <Link
                href="/"
                className="flex items-center text-black text-2xl font-bold"
              >
                StoreMax+
              </Link>
            </div>
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
            <Link
              href="/"
              className="flex items-center text-black text-[1.75rem] font-bold"
            >
              StoreMax+
            </Link>
            <div className="flex items-center">
              <div className="flex items-center gap-x-4 font-medium">
                {mainNavLinks.map((link) => (
                  <NavLink key={link.name} href={link.path}>
                    {link.name}
                  </NavLink>
                ))}
                <div className="relative" ref={moreMenuRef}>
                  <button
                    onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                    className="flex items-center font-semibold text-[0.9375rem] text-[#1a1c1d] hover:text-[#E4C100] transition-colors"
                  >
                    More
                    <ChevronDown
                      size={18}
                      className={`ml-1 transition-transform ${
                        isMoreMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMoreMenuOpen && (
                      <motion.div
                        variants={moreMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full right-0 mt-4 w-56 bg-[#FFF] rounded-2xl shadow-lg z-30"
                      >
                        <div className="p-3">
                          {moreNavLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.path}
                              onClick={() => setIsMoreMenuOpen(false)}
                              className="block text-left text-gray-700 px-4 py-2 text-sm rounded-md hover:bg-gray-100"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white lg:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
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
              {navLinksData.map((link) => (
                <MobileNavLink
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
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

// Helper component for Desktop navigation links
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

// Helper component for Mobile navigation links
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
