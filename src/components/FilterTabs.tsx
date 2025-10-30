"use client";

import { motion } from "framer-motion";

interface FilterTabsProps {
  categories: string[];
  active: string;
  setActive: (category: string) => void;
}

export default function FilterTabs({ categories, active, setActive }: FilterTabsProps) {
  return (
    <div className="flex justify-center flex-wrap gap-3 md:gap-5">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setActive(cat)}
          className={`relative px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base font-medium rounded-full border transition-all duration-300 ${
            active === cat
              ? "bg-gradient-to-r from-[#E87400] to-[#C47A3A] text-white border-transparent shadow-md"
              : "bg-transparent border-[#A84B1F]/50 text-[#3B1C00] hover:bg-[#A84B1F]/10 hover:border-[#A84B1F]/70"
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
