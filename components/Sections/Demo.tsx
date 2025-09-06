"use client";

import { useState } from "react";
import { Zap } from "lucide-react";

export default function DemoSection() {
  const [demoInput, setDemoInput] = useState("");
  const [demoOutput, setDemoOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const simulate = () => {
    if (!demoInput.trim()) return;
    setLoading(true);
    setDemoOutput("");

    setTimeout(() => {
      const responses = [
        `✨ Generated premium content for "${demoInput}" with 95% relevance score`,
        `🎯 Created 3 marketing variations for "${demoInput}" - conversion optimized`,
        `🚀 AI analysis complete: "${demoInput}" has high growth potential (8.7/10)`,
        `💡 Innovative ideas for "${demoInput}" - 12 actionable insights`,
        `📊 Market analysis for "${demoInput}": 89% positive sentiment, trending upward`
      ];
      setDemoOutput(responses[Math.floor(Math.random() * responses.length)]);
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="demo" className="py-20 px-4 bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Experience AI in <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Action</span></h2>
        <p className="text-xl text-cyan-100 mb-12">Try our AI tools instantly. Type anything and see the magic happen.</p>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="text"
              value={demoInput}
              onChange={(e) => setDemoInput(e.target.value)}
              placeholder="Try: 'Create a marketing campaign for eco-friendly products'"
              className="flex-1 px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
              onKeyDown={(e) => e.key === 'Enter' && simulate()}
            />
            <button
              onClick={simulate}
              disabled={loading}
              className="btn btn-primary px-8 py-4 disabled:opacity-50 inline-flex items-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              ) : (
                <Zap className="w-5 h-5 mr-2" />
              )}
              Generate
            </button>
          </div>

          {(demoOutput || loading) && (
            <div className="bg-white/20 rounded-xl p-6 border border-white/30">
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="w-8 h-8 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
                  <span className="ml-3 text-cyan-100">AI is thinking...</span>
                </div>
              ) : (
                <p className="text-cyan-100 text-lg">{demoOutput}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
