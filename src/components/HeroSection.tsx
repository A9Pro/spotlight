"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Heart, ShoppingBag, Star, Sparkles, Shield, Truck, Award, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState(new Set());

  const featuredProducts = [
    {
      id: 1,
      name: "Celestial Diamond Ring",
      price: 3670300.00,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80",
      category: "Rings",
      rating: 5
    },
    {
      id: 2,
      name: "Aurora Pearl Necklace",
      price: 2350000.00,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80",
      category: "Necklaces",
      rating: 5
    },
    {
      id: 3,
      name: "Moonstone Earrings",
      price: 1100500.00,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80",
      category: "Earrings",
      rating: 4.8
    },
    {
      id: 4,
      name: "Golden Infinity Bracelet",
      price: 5732500.00,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80",
      category: "Bracelets",
      rating: 4.9
    }
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const newFavs = new Set(prev);
      if (newFavs.has(id)) {
        newFavs.delete(id);
      } else {
        newFavs.add(id);
      }
      return newFavs;
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat p-6"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        {/* ✨ Soft gradient overlay for clarity & depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7E7CE]/70 via-[#FAEBD7]/60 to-[#E87400]/40 backdrop-blur-[2px]" />

        {/* 🌟 Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 px-8 py-16 max-w-3xl w-full rounded-[2rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl"
        >
          {/* Logo/Brand Name */}
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-[#3B1C00] drop-shadow-sm">
            Spot<span className="text-[#D35400]">Light</span> ✦
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-lg md:text-xl text-[#4A2C1D] leading-relaxed max-w-2xl mx-auto">
            ✦Own Your Light✦
          </p>

          <p className="mt-6 text-lg md:text-xl text-[#4A2C1D] leading-relaxed max-w-2xl mx-auto">
            Jewelry that doesn't just adorn, it{" "}
            <span className="text-[#D35400] font-semibold">illuminates</span>.
          </p>

          {/* ✨ Call-to-Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-5 justify-center">
            {/* AI Consultation */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/ai-consultation")}
              className="relative px-10 py-4 rounded-full bg-gradient-to-r from-[#E87400] to-[#C47A3A] text-white font-semibold text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Start AI Consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </motion.button>

            {/* Explore Collection */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/collection")}
              className="px-10 py-4 rounded-full border-2 border-[#4A2C1D] text-[#4A2C1D] font-semibold text-lg tracking-wide hover:bg-[#4A2C1D] hover:text-[#F7E7CE] transition-all duration-300"
            >
              Explore Collection
            </motion.button>
          </div>
        </motion.div>

        {/* ✨ Bottom reflection gradient for depth */}
        <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-[#3B1C00]/50 to-transparent" />
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#FAEBD7] to-[#F7E7CE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-[#3B1C00] mb-4">
              Featured Collection
            </h2>
            <p className="text-[#4A2C1D] text-lg">
              Handpicked pieces that define elegance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden border-2 border-[#E87400]/20 hover:border-[#E87400] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B1C00]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.has(product.id)
                          ? "fill-[#E87400] text-[#E87400]"
                          : "text-[#4A2C1D]"
                      }`}
                    />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button className="w-full py-3 bg-gradient-to-r from-[#E87400] to-[#C47A3A] text-white font-semibold rounded-full hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                      <ShoppingBag className="w-5 h-5" />
                      <span>Quick Add</span>
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-[#FAEBD7]/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#D35400] tracking-wider uppercase font-semibold">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-[#E87400] text-[#E87400]" />
                      <span className="text-sm text-[#4A2C1D] font-medium">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#3B1C00] mb-2 group-hover:text-[#D35400] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-[#E87400]">
                    ₦{product.price.toLocaleString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/collection")}
              className="px-10 py-4 border-2 border-[#4A2C1D] text-[#4A2C1D] font-semibold text-lg rounded-full hover:bg-[#4A2C1D] hover:text-[#F7E7CE] transition-all duration-300"
            >
              View All Collections
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* AI Consultation Teaser */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#E87400]/10 via-[#FAEBD7] to-[#C47A3A]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="text-[#E87400] text-sm tracking-widest uppercase font-semibold">
                  AI-Powered Design
                </span>
              </div>
              <h2 className="text-5xl font-extrabold text-[#3B1C00] mb-6">
                Design Your Dream Jewelry
              </h2>
              <p className="text-[#4A2C1D] text-lg mb-8 leading-relaxed">
                Our AI jewelry designer understands your style, preferences, and
                story. Answer a few questions and watch as we create personalized
                recommendations just for you.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Personalized style quiz",
                  "Virtual try-on experience",
                  "Custom design suggestions",
                  "Expert craftsmanship guarantee",
                ].map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#E87400]/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-[#E87400]" />
                    </div>
                    <span className="text-[#4A2C1D] font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/ai-consultation")}
                className="px-10 py-4 bg-gradient-to-r from-[#E87400] to-[#C47A3A] text-white font-semibold text-lg rounded-full hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Start AI Consultation</span>
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E87400]/20 to-[#C47A3A]/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white rounded-3xl p-8 border-2 border-[#E87400]/30 shadow-xl">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#FAEBD7] to-[#E87400]/20 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-32 h-32 text-[#E87400]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges & Social Proof */}
      <section className="py-16 px-4 bg-white border-t-2 border-b-2 border-[#C47A3A]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-[#3B1C00] mb-2">
              Why Choose SpotLight?
            </h3>
            <p className="text-[#4A2C1D]">
              Excellence in every detail, trust in every piece
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                text: "Lifetime Warranty",
                sub: "On all pieces",
                color: "#E87400",
              },
              {
                icon: Star,
                text: "5-Star Reviews",
                sub: "10,000+ happy customers",
                color: "#E87400",
              },
              {
                icon: Truck,
                text: "Free Shipping",
                sub: "On orders over ₦20,000",
                color: "#E87400",
              },
              {
                icon: Award,
                text: "Ethically Sourced",
                sub: "Conflict-free diamonds",
                color: "#E87400",
              },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block"
                >
                  <badge.icon
                    className="w-12 h-12 text-[#E87400] mx-auto mb-3 group-hover:text-[#D35400] transition-colors"
                  />
                </motion.div>
                <h4 className="font-bold text-[#3B1C00] mb-1 text-lg">
                  {badge.text}
                </h4>
                <p className="text-sm text-[#4A2C1D]">{badge.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Customer Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                quote:
                  "The most beautiful ring I've ever owned. The craftsmanship is impeccable!",
                author: "Bola. Ibadan.",
                rating: 5,
              },
              {
                quote:
                  "AI consultation helped me find the perfect necklace. Highly recommend!",
                author: "Jennifer. Abuja.",
                rating: 5,
              },
              {
                quote:
                  "Exceptional quality and stunning designs. Worth every penny!",
                author: "Michael. Lagos.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FAEBD7]/50 p-6 rounded-2xl border-2 border-[#E87400]/20 hover:border-[#E87400] transition-all"
              >
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-[#E87400] text-[#E87400]"
                    />
                  ))}
                </div>
                <p className="text-[#4A2C1D] mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-[#3B1C00] font-semibold">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#FAEBD7] to-[#F7E7CE]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-6">
            <Sparkles className="w-12 h-12 text-[#E87400] mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B1C00] mb-4">
              Join Our Inner Circle
            </h2>
            <p className="text-[#4A2C1D] text-lg mb-2">
              Be the first to discover new collections and exclusive offers
            </p>
            <p className="text-[#4A2C1D] text-sm">
              Plus, get 15% off your first purchase! ✦
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white border-2 border-[#C47A3A]/30 rounded-full focus:outline-none focus:border-[#E87400] transition-colors text-[#3B1C00] placeholder-[#4A2C1D]/50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-[#E87400] to-[#C47A3A] text-white font-semibold rounded-full hover:shadow-lg transition-all"
            >
              Subscribe
            </motion.button>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm text-[#4A2C1D]">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#E87400]" />
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#E87400]" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;