"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FloatingNav from "@/components/FloatingNav";
import { useCart } from "@/components/context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, total } = useCart();

  return (
    <main className="relative min-h-screen bg-[#FAEBD7] text-[#3B2C26] pb-32">
      <FloatingNav />

      <section className="py-16 text-center bg-gradient-to-r from-[#C47A3A]/10 to-[#E87400]/10">
        <h1 className="text-5xl font-extrabold mb-4">Your Cart</h1>
        <p className="text-lg text-[#6B4B3A]">Review your jewelry before checkout</p>
      </section>

      <section className="max-w-5xl mx-auto p-6">
        <AnimatePresence>
          {cart.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  className="flex flex-col md:flex-row items-center justify-between bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-4 md:p-6"
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border border-[#E87400]/30">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-[#C47A3A] font-medium">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1 text-xl border border-[#C47A3A]/40 rounded-full hover:bg-[#C47A3A]/10 transition"
                    >
                      −
                    </button>
                    <span className="text-lg font-medium w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 text-xl border border-[#C47A3A]/40 rounded-full hover:bg-[#C47A3A]/10 transition"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <p className="font-semibold text-[#3B2C26]">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-[#E87400] mt-1 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-lg mt-16"
            >
              Your cart is empty.
            </motion.p>
          )}
        </AnimatePresence>
      </section>

      {cart.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto mt-10 p-8 rounded-3xl bg-[#E87400]/10 backdrop-blur-md border border-[#C47A3A]/20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
          <p className="text-xl mb-6">
            <span className="font-bold">Total:</span>{" "}
            <span className="text-[#E87400] font-bold">
              ₦{total.toLocaleString()}
            </span>
          </p>
          <Link
            href="/checkout"
            className="px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #C47A3A 0%, #E87400 100%)",
              color: "#fff",
              boxShadow: "0 0 25px rgba(232,116,0,0.3)",
            }}
          >
            Proceed to Checkout
          </Link>
        </motion.section>
      )}
    </main>
  );
}
