"use client";

import { motion } from "framer-motion";

interface CategoryItem {
  title: string;
  image: string;
  price: string;
}

export default function CollectionGrid({
  items = [],
  onItemClick,
  onAddToCart, // 🛍️ new prop
}: {
  items?: CategoryItem[];
  onItemClick: (item: CategoryItem) => void;
  onAddToCart?: (item: CategoryItem) => void; // optional
}) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No collections available.
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 py-8">
      {items.map((item, index) => (
        <CategoryCard
          key={index}
          title={item.title}
          image={item.image}
          price={item.price}
          onClick={() => onItemClick(item)}
          onAddToCart={() => onAddToCart && onAddToCart(item)} // 🛍️ pass item
        />
      ))}
    </div>
  );
}

function CategoryCard({
  title,
  image,
  price,
  onClick,
  onAddToCart,
}: {
  title: string;
  image: string;
  price: string;
  onClick: () => void;
  onAddToCart?: () => void;
}) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-lg group bg-white/5 backdrop-blur-sm border border-[#D7BFAE]/30"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Jewelry Image */}
      <div className="relative overflow-hidden cursor-pointer" onClick={onClick}>
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <button className="px-6 py-2 rounded-full bg-[#E87400] text-white font-semibold shadow-md hover:bg-[#C76300] transition">
            Quick View
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-semibold text-[#3B1C00]">{title}</h2>
        <p className="mt-2 text-lg font-medium text-[#D35400]">{price}</p>

        {/* Add to Cart Button */}
        {onAddToCart && (
          <button
            onClick={onAddToCart}
            className="mt-4 px-4 py-2 rounded-full bg-[#E87400] text-white font-semibold hover:bg-[#C76300] transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </motion.div>
  );
}