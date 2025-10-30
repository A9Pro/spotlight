"use client";

export default function FilterTabs({ categories, active, setActive }: any) {
  return (
    <div className="flex justify-center gap-4 mb-10 flex-wrap">
      {categories.map((cat: string) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-5 py-2 rounded-full border transition ${
            active === cat
              ? "bg-[#A84B1F] text-white border-[#A84B1F]"
              : "bg-transparent border-[#A84B1F] text-[#3B1C00] hover:bg-[#A84B1F]/10"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
