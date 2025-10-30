"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Lock, Truck } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState("");

  // Promo codes with discounts
  const promoCodes = {
    "FIRST10": 0.10, // 10% off
    "SAVE20": 0.20,  // 20% off
    "VIP30": 0.30,   // 30% off
  };

  const shipping = total > 1000000 ? 0 : 15000; // Free shipping over ₦1M
  const discount = appliedPromo ? total * promoCodes[appliedPromo as keyof typeof promoCodes] : 0;
  const finalTotal = total - discount + shipping;

  const handleApplyPromo = () => {
    const code = promoCode.toUpperCase();
    if (promoCodes[code as keyof typeof promoCodes]) {
      setAppliedPromo(code);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code");
      setAppliedPromo(null);
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoCode("");
    setPromoError("");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAEBD7] via-[#FFF5E6] to-[#F8EBDD] flex items-center justify-center px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="w-24 h-24 text-[#C47A3A] mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl font-bold text-[#4A2C1D] mb-4">Your Cart is Empty</h2>
          <p className="text-[#6B4B3A] mb-8">Discover beautiful jewelry pieces to add to your collection</p>
          <Link href="/collection">
            <button className="px-8 py-4 bg-[#E87400] text-white rounded-full font-semibold hover:bg-[#C76200] transition flex items-center gap-2 mx-auto">
              Explore Collection
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAEBD7] via-[#FFF5E6] to-[#F8EBDD] pt-24 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A2C1D] mb-2">Shopping Cart</h1>
          <p className="text-[#6B4B3A]">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#C47A3A]/10 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-[#FAEBD7] to-[#FFF5E6] flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-[#4A2C1D] mb-1">{item.name}</h3>
                          <p className="text-lg font-semibold text-[#E87400]">
                            ₦{item.price.toLocaleString()}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 bg-[#FAEBD7]/50 rounded-full px-4 py-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-[#4A2C1D] hover:text-[#E87400] transition"
                            disabled={item.quantity === 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold text-[#4A2C1D] w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-[#4A2C1D] hover:text-[#E87400] transition"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[#6B4B3A]">
                          Subtotal: <span className="font-bold text-[#4A2C1D]">
                            ₦{(item.price * item.quantity).toLocaleString()}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#C47A3A]/10 shadow-lg sticky top-24"
            >
              <h2 className="text-2xl font-bold text-[#4A2C1D] mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-sm font-semibold text-[#4A2C1D] mb-2">
                  <Tag className="w-4 h-4" />
                  Promo Code
                </label>
                {!appliedPromo ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      className="flex-1 px-4 py-2 rounded-lg border-2 border-[#C47A3A]/30 focus:border-[#E87400] focus:outline-none"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-6 py-2 bg-[#E87400] text-white rounded-lg font-semibold hover:bg-[#C76200] transition"
                    >
                      Apply
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                    <span className="text-green-700 font-semibold">{appliedPromo} Applied!</span>
                    <button
                      onClick={handleRemovePromo}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {promoError && <p className="text-red-500 text-sm mt-2">{promoError}</p>}
                <p className="text-xs text-[#6B4B3A] mt-2">
                  Try: FIRST10, SAVE20, VIP30
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-[#C47A3A]/20">
                <div className="flex justify-between text-[#6B4B3A]">
                  <span>Subtotal</span>
                  <span className="font-semibold">₦{total.toLocaleString()}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({promoCodes[appliedPromo as keyof typeof promoCodes] * 100}%)</span>
                    <span className="font-semibold">-₦{discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#6B4B3A]">
                  <span className="flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    Shipping
                  </span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `₦${shipping.toLocaleString()}`
                    )}
                  </span>
                </div>
                {total < 1000000 && (
                  <p className="text-xs text-[#6B4B3A] bg-[#FAEBD7]/50 p-2 rounded">
                    Add ₦{(1000000 - total).toLocaleString()} more for free shipping
                  </p>
                )}
              </div>

              {/* Total */}
              <div className="flex justify-between text-xl font-bold text-[#4A2C1D] mb-6">
                <span>Total</span>
                <span>₦{finalTotal.toLocaleString()}</span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout">
                <button className="w-full py-4 bg-[#E87400] text-white rounded-full font-semibold text-lg hover:bg-[#C76200] transition flex items-center justify-center gap-2 shadow-lg">
                  <Lock className="w-5 h-5" />
                  Proceed to Checkout
                </button>
              </Link>

              {/* Security Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#6B4B3A]">
                <Lock className="w-4 h-4" />
                <span>Secure checkout</span>
              </div>

              {/* Continue Shopping */}
              <Link href="/collection">
                <button className="w-full mt-4 py-3 border-2 border-[#C47A3A]/30 text-[#4A2C1D] rounded-full font-semibold hover:border-[#E87400] transition">
                  Continue Shopping
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}