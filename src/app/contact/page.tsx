"use client";

import FloatingNav from "@/components/FloatingNav";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center text-[#4A2C1D]"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[#FAEBD7]/20 backdrop-blur-[2px]" />

      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          Get in <span className="text-[#C47A3A]">Touch</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Have a question or a custom jewelry request?  
          We’d love to hear from you — our team is always ready to assist.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-[#E87400] mb-3" />
            <h3 className="font-semibold text-lg mb-1">Call Us</h3>
            <p>+234 809 123 4567</p>
          </div>

          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-[#E87400] mb-3" />
            <h3 className="font-semibold text-lg mb-1">Email</h3>
            <p>hello@spotlightjewelry.ng</p>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-[#E87400] mb-3" />
            <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <form className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-md max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-[#C47A3A]/30 focus:outline-none focus:ring-2 focus:ring-[#E87400]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-[#C47A3A]/30 focus:outline-none focus:ring-2 focus:ring-[#E87400]"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full mb-4 px-4 py-3 rounded-lg border border-[#C47A3A]/30 focus:outline-none focus:ring-2 focus:ring-[#E87400]"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#E87400] to-[#C47A3A] text-white font-semibold hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
