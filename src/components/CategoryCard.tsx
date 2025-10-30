"use client";

import { motion } from "framer-motion";

export default function CategoryCard({ title, image, onClick }: any) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer group"
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-72 group-hover:brightness-75 transition"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
        <h2 className="text-white text-2xl font-semibold">{title}</h2>
      </div>
    </motion.div>
  );
}
