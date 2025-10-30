"use client";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Diamond,
  Heart,
  Star,
  Check,
} from "lucide-react";

export default function AIConsultation() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    occasion: "",
    style: "",
    metal: "",
    gemstone: "",
    budget: "",
    inspiration: "",
  });

  const totalSteps = 6;

  const handleNext = () => {
    if (step < totalSteps) setStep((prev) => prev + 1);
  };
  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  const handleSelection = (category: string, value: string) => {
    setSelections({ ...selections, [category]: value });
  };

  const occasions = [
    { name: "Engagement", icon: Heart, desc: "Forever love" },
    { name: "Anniversary", icon: Star, desc: "Celebrate milestones" },
    { name: "Self-Love", icon: Sparkles, desc: "Treat yourself" },
    { name: "Gift", icon: Diamond, desc: "Special someone" },
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
  ];

  const gemstones = [
    { name: "Diamond", color: "#B9F2FF" },
    { name: "Sapphire", color: "#0F52BA" },
    { name: "Emerald", color: "#50C878" },
    { name: "Ruby", color: "#E0115F" },
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
        <h1 className="text-3xl font-bold tracking-wide">
          AI Jewelry Consultation 💎
        </h1>
        <p className="text-[#6B4B3A] mt-1">
          Let’s create your perfect jewelry match
        </p>
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
          <div
            className="h-full bg-gradient-to-r from-[#C47A3A] to-[#E87400] rounded-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Navigation Buttons (Left & Right Side) */}
      <button
        onClick={handleBack}
        disabled={step === 1}
        className={`absolute left-4 top-1/2 -translate-y-1/2 bg-[#E87400]/10 border border-[#E87400]/40 p-3 rounded-full hover:bg-[#E87400]/20 transition ${
          step === 1 ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        <ArrowLeft className="w-5 h-5 text-[#E87400]" />
      </button>

      <button
        onClick={handleNext}
        disabled={step === totalSteps}
        className={`absolute right-4 top-1/2 -translate-y-1/2 bg-[#E87400]/10 border border-[#E87400]/40 p-3 rounded-full hover:bg-[#E87400]/20 transition ${
          step === totalSteps ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        <ArrowRight className="w-5 h-5 text-[#E87400]" />
      </button>

      {/* Step Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full text-center animate-fade-in">
          {/* STEP 1: Occasion */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">
                What’s the occasion for your jewelry?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {occasions.map((o) => {
                  const Icon = o.icon;
                  const selected = selections.occasion === o.name;
                  return (
                    <button
                      key={o.name}
                      onClick={() => handleSelection("occasion", o.name)}
                      className={`p-6 rounded-2xl border transition-all ${
                        selected
                          ? "border-[#E87400] bg-[#E87400]/10"
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
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* STEP 2: Style */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">
                What’s your preferred jewelry style?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {styles.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => handleSelection("style", s.name)}
                    className={`p-5 rounded-xl border ${
                      selections.style === s.name
                        ? "border-[#E87400] bg-[#E87400]/10"
                        : "border-[#C47A3A]/20 bg-white/80 hover:border-[#E87400]/50"
                    }`}
                  >
                    <h3 className="font-semibold">{s.name}</h3>
                    <p className="text-sm text-[#6B4B3A]">{s.desc}</p>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 3: Metal */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">
                Choose your metal type
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {metals.map((m) => (
                  <button
                    key={m.name}
                    onClick={() => handleSelection("metal", m.name)}
                    className={`p-5 rounded-xl border transition ${
                      selections.metal === m.name
                        ? "border-[#E87400] bg-[#E87400]/10"
                        : "border-[#C47A3A]/20 bg-white/80 hover:border-[#E87400]/50"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-full mx-auto mb-2"
                      style={{ backgroundColor: m.color }}
                    />
                    <h3 className="font-semibold">{m.name}</h3>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 4: Gemstone */}
          {step === 4 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">
                Pick your favorite gemstone
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {gemstones.map((g) => (
                  <button
                    key={g.name}
                    onClick={() => handleSelection("gemstone", g.name)}
                    className={`p-5 rounded-xl border ${
                      selections.gemstone === g.name
                        ? "border-[#E87400] bg-[#E87400]/10"
                        : "border-[#C47A3A]/20 bg-white/80 hover:border-[#E87400]/50"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-full mx-auto mb-2"
                      style={{ backgroundColor: g.color }}
                    />
                    <h3 className="font-semibold">{g.name}</h3>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 5: Budget */}
          {step === 5 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">
                What’s your budget range?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {budgets.map((b) => (
                  <button
                    key={b}
                    onClick={() => handleSelection("budget", b)}
                    className={`p-4 rounded-xl border ${
                      selections.budget === b
                        ? "border-[#E87400] bg-[#E87400]/10"
                        : "border-[#C47A3A]/20 bg-white/80 hover:border-[#E87400]/50"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 6: Summary */}
          {step === 6 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">
                Your Personalized Jewelry Profile ✨
              </h2>
              <div className="bg-white/80 p-6 rounded-2xl border border-[#C47A3A]/20 text-left space-y-3">
                {Object.entries(selections).map(([key, value]) => (
                  <p key={key}>
                    <strong className="capitalize">{key}:</strong>{" "}
                    {value || "Not selected"}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <button className="px-6 py-3 bg-[#E87400] text-white rounded-xl hover:bg-[#C76200] transition">
                  Get My AI Recommendation
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
