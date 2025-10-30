// components/Header.tsx (create this file)
"use client";

import Link from "next/link";
import { useCart } from "@/components/context/CartContext"; // Adjust path if needed
import { ShoppingBagIcon } from "@heroicons/react/24/outline"; // Install @heroicons/react if not: npm i @heroicons/react

export default function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-earth-bg/95 backdrop-blur-md border-b border-earth-text/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-earth-text tracking-tight hover:text-burnt-orange transition-colors">
          SPOTLIGHT ✦
        </Link>

        {/* Cart Icon with Badge */}
        {totalItems > 0 && (
          <div className="relative">
            <Link href="/cart" className="p-2 text-earth-text hover:text-burnt-orange transition-colors">
              <ShoppingBagIcon className="h-6 w-6" />
            </Link>
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-blood-orange text-white text-xs font-bold rounded-full">
              {totalItems}
            </span>
          </div>
        )}
        {totalItems === 0 && (
          <Link href="/cart" className="p-2 text-earth-text hover:text-burnt-orange transition-colors">
            <ShoppingBagIcon className="h-6 w-6" />
          </Link>
        )}
      </div>
    </header>
  );
}