"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/context/CartContext";

const links = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/collection" },
  { name: "AI Design", href: "/ai-consultation" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 md:gap-6 px-6 md:px-8 py-3 md:py-4 bg-[#FAEBD7]/20 border border-[#C47A3A]/20 backdrop-blur-md rounded-full shadow-lg text-[#4A2C1D] font-medium z-50 transition-all duration-500 hover:shadow-xl hover:bg-[#FAEBD7]/30"
      style={{ backdropFilter: "blur(15px)" }}
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative text-lg tracking-wide transition-all duration-300 hover:text-[#E87400]"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-6 bg-[#C47A3A]/30 mx-2"></div>

      {/* Cart Icon */}
      <Link
        href="/cart"
        className="relative p-2 transition-all duration-300 hover:text-[#E87400] group"
        aria-label="Shopping Cart"
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E87400] text-white text-xs rounded-full flex items-center justify-center font-bold">
            {totalItems}
          </span>
        )}
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden ml-3 p-2 rounded-full hover:bg-[#FAEBD7]/30 transition"
        aria-label="Menu"
      >
        <Menu className="w-6 h-6 text-[#4A2C1D]" />
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 px-6 py-4 bg-[#FAEBD7]/90 border border-[#C47A3A]/20 rounded-2xl shadow-xl backdrop-blur-md md:hidden"
          style={{ backdropFilter: "blur(12px)" }}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-[#4A2C1D] hover:text-[#E87400] transition"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}