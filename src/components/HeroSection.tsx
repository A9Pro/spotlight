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
      {/* ✨ Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7E7CE]/80 via-[#FAD9A1]/70 to-[#E87400]/80"></div>

      {/* 🌟 Main content card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 backdrop-blur-2xl bg-white/10 border border-white/30 rounded-[2rem] px-8 py-14 shadow-2xl max-w-3xl w-full"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-[#4A2C1D] drop-shadow-lg">
          Spot<span className="text-[#D35400]">Light</span> ✦
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#5B3926] leading-relaxed max-w-2xl mx-auto">
          ✦ Own Your Light ✦
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-5 justify-center">
          {/* AI Consultation Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/ai-consultation")}
            className="relative px-10 py-4 rounded-full bg-[#4A2C1D] text-[#F7E7CE] font-semibold text-lg tracking-wide shadow-lg overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#E87400] to-[#D35400] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          {/* Collection Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/collection")}
            className="px-10 py-4 rounded-full border-2 border-[#4A2C1D] text-[#4A2C1D] font-semibold text-lg tracking-wide hover:bg-[#4A2C1D] hover:text-[#F7E7CE] transition-all duration-300"
          >
            Explore Collection
          </motion.button>
        </div>
      </motion.div>

      {/* Subtle reflection at bottom */}
      <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-[#4A2C1D]/40 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
