"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FloatingNav from "@/components/FloatingNav";
import { useCart } from "@/components/context/CartContext";

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

export default function CheckoutPage() {
  const { cart, total } = useCart();
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (replace with real Stripe/ backend integration)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // On success: clear cart, show confirmation
    // useCart().clearCart(); // Uncomment when ready
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <main className="relative min-h-screen bg-[#FAEBD7] text-[#3B2C26] pb-32 flex items-center justify-center">
        <FloatingNav />
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-extrabold mb-4">Order Confirmed!</h2>
          <p className="text-lg text-[#6B4B3A] mb-6">
            Thank you for your purchase. Your jewelry legacy begins now.
          </p>
          <Link
            href="/"
            className="px-8 py-3 rounded-full text-lg font-semibold transition-all hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #C47A3A 0%, #E87400 100%)",
              color: "#fff",
            }}
          >
            Back to Home
          </Link>
        </motion.section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#FAEBD7] text-[#3B2C26] pb-32">
      <FloatingNav />

      <section className="py-16 text-center bg-gradient-to-r from-[#C47A3A]/10 to-[#E87400]/10">
        <h1 className="text-5xl font-extrabold mb-4">Checkout</h1>
        <p className="text-lg text-[#6B4B3A]">Secure your pieces with confidence</p>
      </section>

      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
        {/* Shipping Info */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 bg-white/70 backdrop-blur-md rounded-2xl p-6 md:col-span-1"
        >
          <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="p-3 border border-[#C47A3A]/30 rounded-xl focus:border-[#E87400] focus:outline-none"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="p-3 border border-[#C47A3A]/30 rounded-xl focus:border-[#E87400] focus:outline-none"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-[#C47A3A]/30 rounded-xl focus:border-[#E87400] focus:outline-none"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-3 border border-[#C47A3A]/30 rounded-xl focus:border-[#E87400] focus:outline-none"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="p-3 border border-[#C47A3A]/30 rounded-xl focus:border-[#E87400] focus:outline-none"
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="p-3 border border-[#C47A3A]/30 rounded-xl focus:border-[#E87400] focus:outline-none"
              required
            />
          </div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full p-3 border border-[#C47A3A]/30 rounded-xl focus:border-[#E87400] focus:outline-none"
            required
          />
        </motion.section>

        {/* Payment Info */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 bg-white/70 backdrop-blur-md rounded-2xl p-6 md:col-span-1"
        >
          <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleInputChange}
            maxLength={19}
            className="w-full p-3 border border-[#C47A3A]/30 rounded-xl focus:border-[#E87400] focus:outline-none"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleInputChange}
              maxLength={5}
              className="p-3 border border-[#C47A3A]/30 rounded-xl focus:border-[#E87400] focus:outline-none"
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleInputChange}
              maxLength={4}
              className="p-3 border border-[#C47A3A]/30 rounded-xl focus:border-[#E87400] focus:outline-none"
              required
            />
          </div>
        </motion.section>

        {/* Order Summary */}
        <AnimatePresence mode="wait">
          {cart.length > 0 && (
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 bg-white/70 backdrop-blur-md rounded-2xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
              <ul className="space-y-3 mb-6">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[#E87400]/30">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <span className="text-sm">{item.name} (x{item.quantity})</span>
                    </div>
                    <span className="font-medium">₦{(item.price * item.quantity).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#C47A3A]/20 pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-[#E87400]">₦{total.toLocaleString()}</span>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="md:col-span-2 px-10 py-4 rounded-full text-lg font-semibold transition-all"
          style={{
            background: "linear-gradient(90deg, #C47A3A 0%, #E87400 100%)",
            color: "#fff",
            boxShadow: "0 0 25px rgba(232,116,0,0.3)",
          }}
        >
          {isSubmitting ? "Processing..." : `Place Order - ₦${total.toLocaleString()}`}
        </motion.button>
      </form>

      <Link
        href="/cart"
        className="fixed top-4 left-4 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
        style={{
          background: "rgba(255,255,255,0.8)",
          color: "#3B2C26",
          backdropFilter: "blur(10px)",
        }}
      >
        ← Back to Cart
      </Link>
    </main>
  );
}