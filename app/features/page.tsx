import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { features } from "@/lib/data";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 text-gray-900">
      <Navbar />
      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">AI Features</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our comprehensive suite of AI-powered tools designed to accelerate your business growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-indigo-700 font-medium">{feature.demo}</p>
                </div>
                <Link href="/#demo" className="inline-block font-semibold text-indigo-600 hover:text-indigo-700">Try Now →</Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/" className="text-indigo-600 hover:text-indigo-500 font-semibold">← Back to Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
