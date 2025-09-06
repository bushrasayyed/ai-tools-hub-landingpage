"use client";

import Link from "next/link";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./ui/AnimatedButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
            <Brain className="w-6 h-6 text-white" />
          </span>
          <span className="text-white font-bold text-lg">AI Tools Hub</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/features"
            className="text-white hover:text-cyan-400 transition-colors font-medium"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="text-white hover:text-cyan-400 transition-colors font-medium"
          >
            Pricing
          </Link>
          <Link
            href="/#demo"
            className="text-white hover:text-cyan-400 transition-colors font-medium"
          >
            Demo
          </Link>
          <AnimatedButton href="/signin" className="btn-ghost">
            Sign In
          </AnimatedButton>
          <AnimatedButton href="/trial" className="btn-primary">
            Start Free Trial
          </AnimatedButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 flex justify-end"
          >
            {/* Slide-out Card */}
            <div
              className="w-80 h-full bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-bold text-white">Menu</span>
                <button onClick={() => setOpen(false)} className="text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4 flex-1">
                <Link
                  href="/features"
                  onClick={() => setOpen(false)}
                  className="block text-white hover:text-cyan-400 font-medium text-lg py-2"
                >
                  Features
                </Link>
                <Link
                  href="/#pricing"
                  onClick={() => setOpen(false)}
                  className="block text-white hover:text-cyan-400 font-medium text-lg py-2"
                >
                  Pricing
                </Link>
                <Link
                  href="/#demo"
                  onClick={() => setOpen(false)}
                  className="block text-white hover:text-cyan-400 font-medium text-lg py-2"
                >
                  Demo
                </Link>
                <AnimatedButton
                  href="/signin"
                  className="w-full btn-ghost mt-4"
                >
                  Sign In
                </AnimatedButton>
                <AnimatedButton
                  href="/trial"
                  className="w-full btn-primary mt-2"
                >
                  Start Free Trial
                </AnimatedButton>
              </nav>
            </div>

            {/* Overlay for clicking outside to close */}
            <div
              className="flex-1 bg-black/30"
              onClick={() => setOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
