"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignInPage() {
  // Particle positions for random movement
  const particles = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 bg-[length:200%_200%]"
      />

      {/* Floating neon particles */}
      {particles.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            x: Math.random() * 800 - 400,
            y: Math.random() * 600 - 300,
          }}
          animate={{
            x: [Math.random() * 800 - 400, Math.random() * 800 - 400],
            y: [Math.random() * 600 - 300, Math.random() * 600 - 300],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 8 + Math.random() * 8,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-cyan-400/70 rounded-full blur-md -z-0"
        />
      ))}

      <div className="max-w-6xl w-full flex items-center justify-center gap-12 relative z-10">
        {/* Sign In Card with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl relative z-10"
        >
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Welcome Back
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-cyan-100"
            >
              Sign in to your AI Tools Hub
            </motion.p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-cyan-100 mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                }}
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-cyan-100 mb-2">
                Password
              </label>
              <motion.input
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                }}
                type="password"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                placeholder="••••••••"
              />
            </div>
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 20px rgba(0,255,255,0.4)",
              }}
              className="w-full btn btn-primary py-3"
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-cyan-100">
              Don't have an account?{" "}
              <Link
                href="/trial"
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Start Free Trial
              </Link>
            </p>
          </div>
          <Link
            href="/"
            className="mt-6 text-cyan-400 hover:text-cyan-300 flex items-center justify-center w-full"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
