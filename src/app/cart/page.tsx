"use client";

import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

  return (
    <main className="min-h-screen bg-[#FAEBD7] text-[#3B1C00] px-6 md:px-12 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">
        Your <span className="text-[#D35400]">Cart</span>
      </h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Your cart is empty. Start shopping now!
          </p>
          <Link
            href="/collection"
            className="bg-[#D35400] text-white px-6 py-3 rounded-full hover:bg-[#b34700] transition-all"
          >
            Browse Collections
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item: any) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white/80 p-4 rounded-2xl shadow"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-[#D35400] font-medium">
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* 🧾 Total + Actions */}
          <div className="flex justify-between items-center pt-6 border-t border-[#3B1C00]/20">
            <p className="text-xl font-semibold">
              Total: ₦{total.toLocaleString()}
            </p>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="px-6 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition"
              >
                Clear Cart
              </button>
              <button className="px-6 py-2 bg-[#D35400] text-white rounded-full hover:bg-[#b34700] transition">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
