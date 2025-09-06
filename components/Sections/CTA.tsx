"use client";

import AnimatedButton from "../ui/AnimatedButton";
import { Sparkles, ArrowRight, Award, TrendingUp, Users } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Business with AI?</span>
        </h2>
        <p className="text-xl text-cyan-100 mb-12 max-w-2xl mx-auto">
          Join thousands of companies already using AI Tools Hub to accelerate growth and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <AnimatedButton href="/trial" className="btn-primary text-lg px-10 py-5">Start Free Trial <Sparkles className="w-5 h-5"/></AnimatedButton>
          <AnimatedButton href="mailto:hello@example.com?subject=Schedule%20a%20Demo" className="btn-ghost text-lg px-10 py-5">Schedule Demo <ArrowRight className="w-5 h-5"/></AnimatedButton>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="text-2xl font-bold text-white">10,000+</p>
            <p className="text-cyan-100">Active Users</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="text-2xl font-bold text-white">300%</p>
            <p className="text-cyan-100">Avg. Productivity Boost</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
            <Award className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="text-2xl font-bold text-white">99.9%</p>
            <p className="text-cyan-100">Uptime Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
