"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Diamond,
  Heart,
  Star,
  Check,
  Wand2,
  ShoppingBag,
} from "lucide-react";
import { products } from "@/data/products";
import type { Product } from "@/data/products";

export default function AIConsultation() {
  const [step, setStep] = useState(1);
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [selections, setSelections] = useState({
    occasion: "",
    style: "",
    metal: "",
    gemstone: "",
    budget: "",
    category: "",
  });

  const totalSteps = 7;

  const handleNext = () => {
    if (step < totalSteps) setStep((prev) => prev + 1);
  };
  
  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  
  const handleSelection = (category: string, value: string) => {
    setSelections({ ...selections, [category]: value });
  };

  const generateRecommendations = () => {
    // AI-powered filtering logic
    let filtered = products.filter(p => {
      let score = 0;
      
      // Filter by category
      if (selections.category && p.category === selections.category) score += 3;
      
      // Filter by occasion
      if (selections.occasion && p.occasion?.includes(selections.occasion)) score += 2;
      
      // Filter by style
      if (selections.style && p.style?.includes(selections.style)) score += 2;
      
      // Filter by metal
      if (selections.metal && p.metal === selections.metal) score += 2;
      
      // Filter by gemstone
      if (selections.gemstone === "None" && !p.gemstone) score += 1;
      if (selections.gemstone !== "None" && p.gemstone === selections.gemstone) score += 2;
      
      // Filter by budget
      const budgetRanges = {
        "₦500,000 - ₦1,000,000": [500000, 1000000],
        "₦1,000,000 - ₦2,000,000": [1000000, 2000000],
        "₦2,000,000 - ₦5,000,000": [2000000, 5000000],
        "₦5,000,000+": [5000000, Infinity],
      };
      
      if (selections.budget) {
        const [min, max] = budgetRanges[selections.budget as keyof typeof budgetRanges];
        if (p.price >= min && p.price <= max) score += 3;
      }
      
      return score > 0;
    });

    // Sort by relevance
    filtered.sort((a, b) => {
      let scoreA = 0, scoreB = 0;
      
      if (a.featured) scoreA += 1;
      if (b.featured) scoreB += 1;
      
      scoreA += a.rating;
      scoreB += b.rating;
      
      return scoreB - scoreA;
    });

    setRecommendations(filtered.slice(0, 6));
    handleNext();
  };

  const occasions = [
    { name: "Engagement", icon: Heart, desc: "Forever love" },
    { name: "Anniversary", icon: Star, desc: "Celebrate milestones" },
    { name: "Self-Love", icon: Sparkles, desc: "Treat yourself" },
    { name: "Gift", icon: Diamond, desc: "Special someone" },
  ];

  const categories = [
    { name: "rings", label: "Rings", emoji: "💍" },
    { name: "necklaces", label: "Necklaces", emoji: "📿" },
    { name: "earrings", label: "Earrings", emoji: "💎" },
    { name: "bracelets", label: "Bracelets", emoji: "⌚" },
    { name: "sets", label: "Sets", emoji: "✨" },
  ];

  const styles = [
    { name: "Classic", desc: "Timeless elegance" },
    { name: "Modern", desc: "Contemporary edge" },
    { name: "Vintage", desc: "Romantic nostalgia" },
    { name: "Minimalist", desc: "Refined simplicity" },
  ];

  const metals = [
    { name: "Rose Gold", color: "#B76E79" },
    { name: "Yellow Gold", color: "#FFD700" },
    { name: "White Gold", color: "#E5E4E2" },
    { name: "Platinum", color: "#C0C0C0" },
    { name: "Silver", color: "#C0C0C0" },
  ];

  const gemstones = [
    { name: "Diamond", color: "#B9F2FF" },
    { name: "Sapphire", color: "#0F52BA" },
    { name: "Emerald", color: "#50C878" },
    { name: "Ruby", color: "#E0115F" },
    { name: "None", color: "#E5E4E2" },
  ];

  const budgets = [
    "₦500,000 - ₦1,000,000",
    "₦1,000,000 - ₦2,000,000",
    "₦2,000,000 - ₦5,000,000",
    "₦5,000,000+",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAEBD7] via-[#FFF5E6] to-[#F8EBDD] text-[#4A2C1D] flex flex-col relative">
      {/* Header */}
      <header className="py-6 text-center bg-[#E87400]/10 border-b border-[#E87400]/20">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Wand2 className="w-10 h-10 mx-auto mb-2 text-[#E87400]" />
          <h1 className="text-3xl font-bold tracking-wide">
            AI Jewelry Consultation 💎
          </h1>
          <p className="text-[#6B4B3A] mt-1">
            Let's create your perfect jewelry match
          </p>
        </motion.div>
      </header>

      {/* Progress */}
      <div className="max-w-3xl mx-auto w-full px-6 mt-6">
        <div className="flex justify-between text-sm font-medium text-[#6B4B3A]">
          <span>
            Step {step} of {totalSteps}
          </span>
          <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="h-2 bg-[#C47A3A]/20 rounded-full mt-2">
          <motion.div
            className="h-full bg-gradient-to-r from-[#C47A3A] to-[#E87400] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Navigation Buttons (Left & Right Side) */}
      <button
        onClick={handleBack}
        disabled={step === 1}
        className={`absolute left-4 top-1/2 -translate-y-1/2 bg-[#E87400]/10 border border-[#E87400]/40 p-3 rounded-full hover:bg-[#E87400]/20 transition z-10 ${
          step === 1 ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        <ArrowLeft className="w-5 h-5 text-[#E87400]" />
      </button>

      <button
        onClick={step === 6 ? generateRecommendations : handleNext}
        disabled={step === totalSteps}
        className={`absolute right-4 top-1/2 -translate-y-1/2 bg-[#E87400]/10 border border-[#E87400]/40 p-3 rounded-full hover:bg-[#E87400]/20 transition z-10 ${
          step === totalSteps ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        <ArrowRight className="w-5 h-5 text-[#E87400]" />
      </button>

      {/* Step Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl w-full text-center"
          >
            {/* STEP 1: Occasion */}
            {step === 1 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  What's the occasion for your jewelry?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {occasions.map((o) => {
                    const Icon = o.icon;
                    const selected = selections.occasion === o.name;
                    return (
                      <motion.button
                        key={o.name}
                        onClick={() => handleSelection("occasion", o.name)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-6 rounded-2xl border transition-all ${
                          selected
                            ? "border-[#E87400] bg-[#E87400]/10 shadow-lg"
                            : "border-[#C47A3A]/20 bg-white/80 hover:border-[#E87400]/50"
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 mx-auto mb-3 ${
                            selected ? "text-[#E87400]" : "text-[#C47A3A]"
                          }`}
                        />
                        <h3 className="font-semibold">{o.name}</h3>
                        <p className="text-sm text-[#6B4B3A]">{o.desc}</p>
                        {selected && <Check className="w-6 h-6 mx-auto mt-3 text-[#E87400]" />}
                      </motion.button>
                    );
                  })}
                </div>
              </>
            )}

            {/* STEP 2: Category */}
            {step === 2 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  What type of jewelry are you looking for?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {categories.map((c) => {
                    const selected = selections.category === c.name;
                    return (
                      <motion.button
                        key={c.name}
                        onClick={() => handleSelection("category", c.name)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-6 rounded-xl border transition ${
                          selected
                            ? "border-[#E87400] bg-[#E87400]/10 shadow-lg"
                            : "border-[#C47A3A]/20 bg-white/80 hover:border-[#E87400]/50"
                        }`}
                      >
                        <div className="text-4xl mb-2">{c.emoji}</div>
                        <h3 className="font-semibold capitalize">{c.label}</h3>
                        {selected && <Check className="w-5 h-5 mx-auto mt-2 text-[#E87400]" />}
                      </motion.button>
                    );
                  })}
                </div>
              </>
            )}

            {/* STEP 3: Style */}
            {step === 3 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  What's your preferred jewelry style?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {styles.map((s) => {
                    const selected = selections.style === s.name;
                    return (
                      <motion.button
                        key={s.name}
                        onClick={() => handleSelection("style", s.name)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-5 rounded-xl border ${
                          selected
                            ? "border-[#E87400] bg-[#E87400]/10 shadow-lg"
                            : "border-[#C47A3A]/20 bg-white/80 hover:border-[#E87400]/50"
                        }`}
                      >
                        <h3 className="font-semibold">{s.name}</h3>
                        <p className="text-sm text-[#6B4B3A]">{s.desc}</p>
                        {selected && <Check className="w-5 h-5 mx-auto mt-2 text-[#E87400]" />}
                      </motion.button>
                    );
                  })}
                </div>
              </>
            )}

            {/* STEP 4: Metal */}
            {step === 4 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  Choose your metal type
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {metals.map((m) => {
                    const selected = selections.metal === m.name;
                    return (
                      <motion.button
                        key={m.name}
                        onClick={() => handleSelection("metal", m.name)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-5 rounded-xl border transition ${
                          selected
                            ? "border-[#E87400] bg-[#E87400]/10 shadow-lg"
                            : "border-[#C47A3A]/20 bg-white/80 hover:border-[#E87400]/50"
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-full mx-auto mb-2 border-2 border-[#C47A3A]/20"
                          style={{ backgroundColor: m.color }}
                        />
                        <h3 className="font-semibold text-sm">{m.name}</h3>
                        {selected && <Check className="w-5 h-5 mx-auto mt-2 text-[#E87400]" />}
                      </motion.button>
                    );
                  })}
                </div>
              </>
            )}

            {/* STEP 5: Gemstone */}
            {step === 5 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  Pick your favorite gemstone
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {gemstones.map((g) => {
                    const selected = selections.gemstone === g.name;
                    return (
                      <motion.button
                        key={g.name}
                        onClick={() => handleSelection("gemstone", g.name)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-5 rounded-xl border ${
                          selected
                            ? "border-[#E87400] bg-[#E87400]/10 shadow-lg"
                            : "border-[#C47A3A]/20 bg-white/80 hover:border-[#E87400]/50"
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-full mx-auto mb-2 border-2 border-[#C47A3A]/20"
                          style={{ backgroundColor: g.color }}
                        />
                        <h3 className="font-semibold text-sm">{g.name}</h3>
                        {selected && <Check className="w-5 h-5 mx-auto mt-2 text-[#E87400]" />}
                      </motion.button>
                    );
                  })}
                </div>
              </>
            )}

            {/* STEP 6: Budget */}
            {step === 6 && (
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  What's your budget range?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {budgets.map((b) => {
                    const selected = selections.budget === b;
                    return (
                      <motion.button
                        key={b}
                        onClick={() => handleSelection("budget", b)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-xl border ${
                          selected
                            ? "border-[#E87400] bg-[#E87400]/10 shadow-lg"
                            : "border-[#C47A3A]/20 bg-white/80 hover:border-[#E87400]/50"
                        }`}
                      >
                        <p className="font-semibold">{b}</p>
                        {selected && <Check className="w-5 h-5 mx-auto mt-2 text-[#E87400]" />}
                      </motion.button>
                    );
                  })}
                </div>
                <motion.button
                  onClick={generateRecommendations}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-4 bg-[#E87400] text-white rounded-full font-semibold text-lg hover:bg-[#C76200] transition flex items-center gap-2 mx-auto shadow-lg"
                >
                  <Sparkles className="w-5 h-5" />
                  Get My AI Recommendations
                </motion.button>
              </>
            )}

            {/* STEP 7: Recommendations */}
            {step === 7 && (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <Sparkles className="w-16 h-16 mx-auto mb-4 text-[#E87400]" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-4">
                  Your Personalized Recommendations ✨
                </h2>
                <p className="text-[#6B4B3A] mb-8">
                  Based on your preferences, we found {recommendations.length} perfect matches for you
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {recommendations.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={`/product/${product.id}`}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C47A3A]/10 shadow-lg hover:shadow-2xl transition group">
                          <div className="relative h-64 bg-gradient-to-br from-[#FAEBD7] to-[#FFF5E6]">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 bg-[#E87400] text-white px-3 py-1 rounded-full text-xs font-bold">
                              {Math.round((index + 1) / recommendations.length * 100)}% Match
                            </div>
                          </div>
                          <div className="p-5">
                            <p className="text-xs text-[#E87400] font-semibold uppercase mb-1">
                              {product.category}
                            </p>
                            <h3 className="font-bold text-[#4A2C1D] mb-2 line-clamp-1">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-xs ${
                                    i < Math.floor(product.rating)
                                      ? "text-[#E87400]"
                                      : "text-gray-300"
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <p className="text-xl font-bold text-[#4A2C1D]">
                              ₦{product.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/collection">
                    <button className="px-8 py-4 bg-[#E87400] text-white rounded-full font-semibold hover:bg-[#C76200] transition flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5" />
                      View All Collection
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      setStep(1);
                      setSelections({
                        occasion: "",
                        style: "",
                        metal: "",
                        gemstone: "",
                        budget: "",
                        category: "",
                      });
                      setRecommendations([]);
                    }}
                    className="px-8 py-4 border-2 border-[#C47A3A]/30 text-[#4A2C1D] rounded-full font-semibold hover:border-[#E87400] transition"
                  >
                    Start Over
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}