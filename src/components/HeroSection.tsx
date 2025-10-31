"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShoppingBag,
  Star,
  Sparkles,
  Shield,
  Truck,
  Award,
  CheckCircle,
  X,
} from "lucide-react";

const HeroSection = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState([]);
  const [previewProduct, setPreviewProduct] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Celestial Diamond Ring",
      price: 3670300.0,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80",
      category: "Rings",
      rating: 5,
    },
    {
      id: 2,
      name: "Aurora Pearl Necklace",
      price: 2350000.0,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80",
      category: "Necklaces",
      rating: 5,
    },
    {
      id: 3,
      name: "Moonstone Earrings",
      price: 1100500.0,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80",
      category: "Earrings",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Golden Infinity Bracelet",
      price: 5732500.0,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80",
      category: "Bracelets",
      rating: 4.9,
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const newFavs = new Set(prev);
      newFavs.has(id) ? newFavs.delete(id) : newFavs.add(id);
      return newFavs;
    });
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <>
      {/* === HERO SECTION === */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat p-6"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7E7CE]/70 via-[#FAEBD7]/60 to-[#E87400]/40 backdrop-blur-[2px]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 px-8 py-16 max-w-3xl w-full rounded-[2rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-[#3B1C00]">
            Spot<span className="text-[#D35400]">Light</span> ✦
          </h1>
          <p className="mt-6 text-lg text-[#4A2C1D]">✦Own Your Light✦</p>
          <div className="mt-10 flex flex-wrap gap-5 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push("/ai-consultation")}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#E87400] to-[#C47A3A] text-white font-semibold"
            >
              Start AI Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push("/collection")}
              className="px-10 py-4 rounded-full border-2 border-[#4A2C1D] text-[#4A2C1D] font-semibold hover:bg-[#4A2C1D] hover:text-[#F7E7CE]"
            >
              Explore Collection
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* === FEATURED PRODUCTS === */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#FAEBD7] to-[#F7E7CE]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-[#3B1C00] text-center mb-12">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden border-2 border-[#E87400]/20 hover:border-[#E87400] transition-all"
              >
                <div
                  className="relative overflow-hidden aspect-square cursor-pointer"
                  onClick={() => setPreviewProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-[#FAEBD7]/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#D35400] uppercase font-semibold">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-[#E87400] text-[#E87400]" />
                      <span className="text-sm text-[#4A2C1D] font-medium">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <h3
                    className="text-xl font-semibold text-[#3B1C00] mb-2 cursor-pointer hover:text-[#D35400]"
                    onClick={() => setPreviewProduct(product)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-[#E87400] mb-4">
                    ₦{product.price.toLocaleString()}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => addToCart(product)}
                    className="w-full py-3 bg-gradient-to-r from-[#E87400] to-[#C47A3A] text-white font-semibold rounded-full flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === PRODUCT PREVIEW MODAL === */}
      <AnimatePresence>
        {previewProduct && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setPreviewProduct(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow"
              >
                <X className="w-5 h-5 text-[#3B1C00]" />
              </button>
              <img
                src={previewProduct.image}
                alt={previewProduct.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#3B1C00] mb-2">
                  {previewProduct.name}
                </h3>
                <p className="text-[#4A2C1D] mb-3">
                  {previewProduct.category} Collection
                </p>
                <p className="text-3xl font-bold text-[#E87400] mb-6">
                  ₦{previewProduct.price.toLocaleString()}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    addToCart(previewProduct);
                    setPreviewProduct(null);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-[#E87400] to-[#C47A3A] text-white font-semibold rounded-full flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === SUCCESS POPUP === */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed bottom-8 right-8 bg-[#3B1C00] text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <CheckCircle className="w-5 h-5 text-[#E87400]" />
            <span>Added to Cart Successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
