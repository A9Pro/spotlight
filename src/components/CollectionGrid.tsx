"use client";

import Image from "next/image";

interface JewelryItem {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
}

interface CollectionGridProps {
  active: string;
}

const jewelryItems: JewelryItem[] = [
  { id: 1, name: "Emerald Ring", category: "Rings", image: "/images/ring1.jpg", price: 25000 },
  { id: 2, name: "Diamond Necklace", category: "Necklaces", image: "/images/necklace1.jpg", price: 42000 },
  { id: 3, name: "Pearl Earrings", category: "Earrings", image: "/images/earring1.jpg", price: 15000 },
  { id: 4, name: "Gold Bracelet", category: "Bracelets", image: "/images/bracelet1.jpg", price: 18000 },
  { id: 5, name: "Bridal Set", category: "Sets", image: "/images/set1.jpg", price: 60000 },
];

export default function CollectionGrid({ active }: CollectionGridProps) {
  // 🧠 Safety check — never map undefined
  const filtered =
    active === "All"
      ? jewelryItems
      : jewelryItems.filter((item) => item.category === active);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      {filtered.length > 0 ? (
        filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white/80 shadow-md rounded-2xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-full h-48 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{item.name}</h3>
            <p className="text-[#D35400] font-medium">
              ₦{item.price.toLocaleString()}
            </p>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500 text-lg">
          No items found in this category.
        </p>
      )}
    </div>
  );
}
