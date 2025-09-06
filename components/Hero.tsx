"use client";

import { motion } from "framer-motion";
import AnimatedButton from "./ui/AnimatedButton";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight"
        >
          The Future of{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI‑Powered
          </span>{" "}
          Business Tools
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-cyan-100 mt-6 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Revolutionize your workflow with a comprehensive suite of AI tools.
          Built for startups, enterprises, and innovators worldwide.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <AnimatedButton href="/signin" className="btn-primary" arrow>
            Sign In
          </AnimatedButton>
          <AnimatedButton href="/trial" className="btn-ghost">
            Start Free Trial <Sparkles className="w-4 h-4" />
          </AnimatedButton>
          <AnimatedButton
            href="/features"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Explore All Features <ArrowRight className="w-4 h-4" />
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
