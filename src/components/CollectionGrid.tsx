"use client";

import { useState } from "react";
import CategoryCard from "./CategoryCard";
import JewelryModal from "./JewelryModal";

// Utility: Convert USD-like prices to Naira (using an approximate rate)
const convertToNaira = (usd: number) => {
  const rate = 1600; // Adjust this to current NGN/USD rate if needed
  return Math.round(usd * rate);
};

// Jewelry Collection Data
const allJewelry = [
  {
    title: "Diamond Ring",
    image: "/images/ring1.jpg",
    category: "Rings",
    description: "A stunning diamond ring crafted in 18k white gold, perfect for eternal elegance.",
    priceUSD: 2450,
  },
  {
    title: "Emerald Necklace",
    image: "/images/necklace1.jpg",
    category: "Necklaces",
    description: "Handcrafted emerald necklace with intricate gold detailing.",
    priceUSD: 3200,
  },
  {
    title: "Gold Hoop Earrings",
    image: "/images/earrings1.jpg",
    category: "Earrings",
    description: "Classic gold hoops designed for daily wear with a luxurious touch.",
    priceUSD: 980,
  },
  {
    title: "Silver Bracelet",
    image: "/images/bracelet1.jpg",
    category: "Bracelets",
    description: "Elegant sterling silver bracelet featuring a minimalist chain design.",
    priceUSD: 750,
  },
  {
    title: "Pearl Set",
    image: "/images/set1.jpg",
    category: "Sets",
    description: "A timeless pearl set — necklace and earrings, crafted for sophistication.",
    priceUSD: 1600,
  },
  {
    title: "Rose Gold Band",
    image: "/images/ring2.jpg",
    category: "Rings",
    description: "Soft rose gold band that blends classic design with modern warmth.",
    priceUSD: 1150,
  },
  {
    title: "Layered Necklace",
    image: "/images/necklace2.jpg",
    category: "Necklaces",
    description: "Layered chains with delicate pendants, embodying effortless luxury.",
    priceUSD: 1950,
  },
];

export default function CollectionGrid({ active }: { active: string }) {
  const [selected, setSelected] = useState<any>(null);

  // Filter by category
  const filtered =
    active === "All"
      ? allJewelry
      : allJewelry.filter((item) => item.category === active);

  // Format Naira with commas and ₦ sign
  const formatNaira = (amount: number) =>
    `₦${amount.toLocaleString("en-NG")}`;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((item) => (
          <CategoryCard
            key={item.title}
            {...item}
            price={formatNaira(convertToNaira(item.priceUSD))}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      {selected && (
        <JewelryModal
          item={{
            ...selected,
            price: formatNaira(convertToNaira(selected.priceUSD)),
          }}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
