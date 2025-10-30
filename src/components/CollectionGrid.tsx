"use client";

import { useState } from "react";
import CategoryCard from "./CategoryCard";
import JewelryModal from "./JewelryModal";

const allJewelry = [
  {
    title: "Diamond Ring",
    image: "/images/ring1.jpg",
    category: "Rings",
    description: "A stunning diamond ring crafted in 18k white gold, perfect for eternal elegance.",
    price: "$2,450",
  },
  {
    title: "Emerald Necklace",
    image: "/images/necklace1.jpg",
    category: "Necklaces",
    description: "Handcrafted emerald necklace with intricate gold detailing.",
    price: "$3,200",
  },
  {
    title: "Gold Hoop Earrings",
    image: "/images/earrings1.jpg",
    category: "Earrings",
    description: "Classic gold hoops designed for daily wear with a luxurious touch.",
    price: "$980",
  },
  {
    title: "Silver Bracelet",
    image: "/images/bracelet1.jpg",
    category: "Bracelets",
    description: "Elegant sterling silver bracelet featuring a minimalist chain design.",
    price: "$750",
  },
  {
    title: "Pearl Set",
    image: "/images/set1.jpg",
    category: "Sets",
    description: "A timeless pearl set — necklace and earrings, crafted for sophistication.",
    price: "$1,600",
  },
  {
    title: "Rose Gold Band",
    image: "/images/ring2.jpg",
    category: "Rings",
    description: "Soft rose gold band that blends classic design with modern warmth.",
    price: "$1,150",
  },
  {
    title: "Layered Necklace",
    image: "/images/necklace2.jpg",
    category: "Necklaces",
    description: "Layered chains with delicate pendants, embodying effortless luxury.",
    price: "$1,950",
  },
];

export default function CollectionGrid({ active }: { active: string }) {
  const [selected, setSelected] = useState<any>(null);

  const filtered =
    active === "All" ? allJewelry : allJewelry.filter((item) => item.category === active);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((item) => (
          <CategoryCard key={item.title} {...item} onClick={() => setSelected(item)} />
        ))}
      </div>

      {selected && <JewelryModal item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
