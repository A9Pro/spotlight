"use client";

import { useState } from "react";
import CollectionGrid from "../../components/CollectionGrid";
import FilterTabs from "../../components/FilterTabs";
import JewelryModal from "../../components/JewelryModal";

const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets", "Sets"];

const allJewelry = [
  {
    title: "Diamond Ring",
    image: "/images/ring1.jpg",
    category: "Rings",
    price: "₦3,920,000",
    description:
      "A stunning diamond ring crafted in 18k white gold, perfect for eternal elegance.",
  },
  {
    title: "Emerald Necklace",
    image: "/images/necklace1.jpg",
    category: "Necklaces",
    price: "₦5,120,000",
    description: "Handcrafted emerald necklace with intricate gold detailing.",
  },
  {
    title: "Gold Hoop Earrings",
    image: "/images/earrings1.jpg",
    category: "Earrings",
    price: "₦1,570,000",
    description:
      "Classic gold hoops designed for daily wear with a luxurious touch.",
  },
  {
    title: "Silver Bracelet",
    image: "/images/bracelet1.jpg",
    category: "Bracelets",
    price: "₦1,200,000",
    description:
      "Elegant sterling silver bracelet featuring a minimalist chain design.",
  },
  {
    title: "Pearl Set",
    image: "/images/set1.jpg",
    category: "Sets",
    price: "₦2,560,000",
    description:
      "A timeless pearl set — necklace and earrings, crafted for sophistication.",
  },
  {
    title: "Rose Gold Band",
    image: "/images/ring2.jpg",
    category: "Rings",
    price: "₦1,840,000",
    description:
      "Soft rose gold band that blends classic design with modern warmth.",
  },
  {
    title: "Layered Necklace",
    image: "/images/necklace2.jpg",
    category: "Necklaces",
    price: "₦2,900,000",
    description:
      "Layered chains with delicate pendants, embodying effortless luxury.",
  },
];

export default function Collections() {
  const [active, setActive] = useState("All");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]); // 🛍️ cart state

  // 🪞 Filter by category
  const filtered =
    active === "All"
      ? allJewelry
      : allJewelry.filter((item) => item.category === active);

  // 🛍️ Handle Add to Cart
  const handleAddToCart = (item: any) => {
    setCart((prev) => {
      if (prev.find((p) => p.title === item.title)) return prev;
      return [...prev, item];
    });
    alert(`${item.title} added to cart!`);
  };

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
        <CollectionGrid
          items={filtered}
          onItemClick={(item) => setSelectedItem(item)}
          onAddToCart={handleAddToCart} // ✅ fixed
        />
      </div>

      {/* 💍 Jewelry Modal */}
      {selectedItem && (
        <JewelryModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart} // ✅ fixed
        />
      )}
    </main>
  );
}