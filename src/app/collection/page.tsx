"use client";

import { useState } from "react";
import CollectionGrid from "../../components/CollectionGrid";
import FilterTabs from "../../components/FilterTabs";

const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets", "Sets"];

export default function Collections() {
  const [active, setActive] = useState("All");

  return (
    <main className="min-h-screen bg-[#FAEBD7] text-[#3B1C00] px-6 md:px-12 py-16 transition-all duration-500">
      {/* 🪞 Title Section */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl md:text-6xl font-extrabold font-serif tracking-tight text-[#3B1C00]">
          Our <span className="text-[#D35400]">Jewelry</span> Collections
        </h1>
        <p className="text-lg md:text-xl text-[#4A2C1D]/80 max-w-2xl mx-auto leading-relaxed">
          Discover timeless pieces — designed to illuminate your style.
        </p>
      </div>

      {/* 💎 Filter Tabs */}
      <div className="flex justify-center mb-10">
        <FilterTabs categories={categories} active={active} setActive={setActive} />
      </div>

      {/* 🪄 Collection Grid */}
      <div className="max-w-7xl mx-auto">
        <CollectionGrid active={active} />
      </div>
    </main>
  );
}
