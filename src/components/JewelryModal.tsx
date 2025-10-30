"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/context/CartContext";

export default function JewelryModal({ item, onClose }: any) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: item.title.length, // unique-ish ID based on title
      name: item.title,
      price: convertToNaira(item.price),
      image: item.image,
    });
    onClose();
  };

  const convertToNaira = (priceString: string) => {
    const usd = parseFloat(priceString.replace(/[^0-9.]/g, ""));
    const rate = 1600; // ✅ Example conversion rate
    return usd * rate;
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-[#FAEBD7]/90 rounded-3xl shadow-xl max-w-lg w-full overflow-hidden text-[#3B1C00]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#A84B1F] hover:text-[#3B1C00] transition"
          >
            <X size={26} />
          </button>

          <img
            src={item.image}
            alt={item.title}
            className="w-full h-80 object-cover rounded-t-3xl"
          />

          <div className="p-6 text-center">
            <h2 className="text-3xl font-serif mb-3">{item.title}</h2>
            <p className="text-[#4B2E05] mb-4">{item.description}</p>
            <p className="text-2xl font-semibold text-[#A84B1F]">
              ₦{convertToNaira(item.price).toLocaleString()}
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 px-6 py-2 bg-[#A84B1F] text-white rounded-full hover:bg-[#C94C1A] transition"
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 border border-[#A84B1F] rounded-full hover:bg-[#A84B1F]/10 transition"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
