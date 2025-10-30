"use client";

import { useState } from "react";
import CollectionGrid from "../../components/CollectionGrid";
import FilterTabs from "../../components/FilterTabs";

const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets", "Sets"];

export default function Collections() {
  const [active, setActive] = useState("All");

  return (
    <main className="min-h-screen bg-[#FAEBD7] text-[#3B1C00] px-8 py-16">
      <h1 className="text-5xl font-serif text-center mb-12">Our Jewelry Collections</h1>
      <FilterTabs categories={categories} active={active} setActive={setActive} />
      <CollectionGrid active={active} />
    </main>
  );
}
