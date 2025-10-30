"use client";

import FloatingNav from "@/components/FloatingNav";
import { Sparkles, Gem, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAEBD7] via-[#FFF5E6] to-[#F8EBDD] text-[#4A2C1D]">
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          About <span className="text-[#C47A3A]">Spotlight</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Spotlight is Nigeria’s premier destination for elegant, handcrafted jewelry — 
          designed to celebrate individuality, confidence, and timeless beauty.  
          Our mission is to make luxury accessible, while highlighting the unique artistry 
          of African craftsmanship with a modern global edge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <div className="flex flex-col items-center text-center">
            <Gem className="w-10 h-10 text-[#E87400] mb-3" />
            <h3 className="font-semibold text-xl mb-2">Authentic Craft</h3>
            <p>Every piece is ethically sourced and handcrafted by local artisans in Nigeria.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Heart className="w-10 h-10 text-[#E87400] mb-3" />
            <h3 className="font-semibold text-xl mb-2">Meaningful Design</h3>
            <p>We believe jewelry should tell a story — your story — with elegance and warmth.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Sparkles className="w-10 h-10 text-[#E87400] mb-3" />
            <h3 className="font-semibold text-xl mb-2">African Luxury</h3>
            <p>Spotlight redefines luxury by combining cultural depth with modern sophistication.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
