"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat p-6"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* ✨ Soft gradient overlay for clarity & depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7E7CE]/70 via-[#FAEBD7]/60 to-[#E87400]/40 backdrop-blur-[2px]" />

      {/* 🌟 Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 px-8 py-16 max-w-3xl w-full rounded-[2rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl"
      >
        {/* Logo/Brand Name */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-[#3B1C00] drop-shadow-sm">
          Spot<span className="text-[#D35400]">Light</span> ✦
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-lg md:text-xl text-[#4A2C1D] leading-relaxed max-w-2xl mx-auto">
          ✦Own Your Light✦
        </p>

        <p className="mt-6 text-lg md:text-xl text-[#4A2C1D] leading-relaxed max-w-2xl mx-auto">
          Jewelry that doesn’t just adorn, it <span className="text-[#D35400] font-semibold">illuminates</span>.
        </p>


        {/* ✨ Call-to-Action Buttons */}
        <div className="mt-10 flex flex-wrap gap-5 justify-center">
          {/* AI Consultation */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/ai-consultation")}
            className="relative px-10 py-4 rounded-full bg-gradient-to-r from-[#E87400] to-[#C47A3A] text-white font-semibold text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Start AI Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </motion.button>

          {/* Explore Collection */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/collection")}
            className="px-10 py-4 rounded-full border-2 border-[#4A2C1D] text-[#4A2C1D] font-semibold text-lg tracking-wide hover:bg-[#4A2C1D] hover:text-[#F7E7CE] transition-all duration-300"
          >
            Explore Collection
          </motion.button>
        </div>
      </motion.div>

      {/* ✨ Bottom reflection gradient for depth */}
      <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-[#3B1C00]/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
