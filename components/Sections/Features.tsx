"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">AI Features</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to supercharge your business with artificial intelligence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-indigo-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg p-4 mb-4 border border-indigo-100 text-indigo-700 font-medium">
                {feature.demo}
              </div>
              <Link href="/#demo" className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-700">Try now →</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
