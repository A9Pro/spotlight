"use client";

interface FilterTabsProps {
  categories: string[];
  active: string;
  setActive: (category: string) => void;
}

export default function FilterTabs({ categories, active, setActive }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300
            ${
              active === cat
                ? "bg-[#D35400] text-white border-[#D35400]"
                : "border-[#D35400]/40 text-[#3B1C00] hover:bg-[#D35400]/10"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
