"use client";

import { motion, AnimatePresence } from "framer-motion";

interface JewelryItem {
  title: string;
  image: string;
  price: string;
  description?: string;
}

export default function JewelryModal({
  item,
  onClose,
  onAddToCart, // 🛍️ new prop
}: {
  item: JewelryItem | null;
  onClose: () => void;
  onAddToCart: (item: JewelryItem) => void; // 🛍️ new prop type
}) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal Container */}
        <motion.div
          className="relative bg-[#FAEBD7] text-[#3B1C00] rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-[#3B1C00] hover:text-[#D35400] text-2xl font-bold"
          >
            ×
          </button>

          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-72 object-cover"
          />

          {/* Content */}
          <div className="p-6 text-center">
            <h2 className="text-3xl font-semibold mb-3">{item.title}</h2>
            <p className="text-[#D35400] text-2xl font-bold mb-4">{item.price}</p>
            <p className="text-[#4A2C1D]/80 mb-6 leading-relaxed">
              {item.description ??
                "A timeless piece crafted with precision and elegance, perfect for your most radiant moments."}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAddToCart(item)} // 🛍️ trigger add to cart
              className="px-8 py-3 rounded-full bg-[#E87400] text-white font-semibold text-lg shadow-md hover:bg-[#C76300] transition"
            >
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}