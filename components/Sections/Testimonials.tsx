"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setIdx((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Innovators</span></h2>
          <p className="text-xl text-gray-600">See what our clients say about AI Tools Hub</p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setIdx(idx === 0 ? testimonials.length - 1 : idx - 1)} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full transition-all ${i === idx ? 'bg-indigo-500' : 'bg-gray-300'}`} />
              ))}
            </div>
            <button onClick={() => setIdx((idx + 1) % testimonials.length)} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              {Array.from({ length: testimonials[idx].rating }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 italic">"{testimonials[idx].content}"</blockquote>
            <div className="flex items-center justify-center">
              <Image src={testimonials[idx].avatar} alt={testimonials[idx].name} width={48} height={48} className="rounded-full mr-4" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">{testimonials[idx].name}</p>
                <p className="text-gray-600">{testimonials[idx].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
