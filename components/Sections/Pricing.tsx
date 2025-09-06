"use client";

import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    features: [
      "5 AI Tools",
      "1,000 API calls",
      "Email Support",
      "Basic Analytics",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    features: [
      "All AI Tools",
      "10,000 API calls",
      "Priority Support",
      "Advanced Analytics",
      "Team Collaboration",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Everything",
      "Custom AI Models",
      "Dedicated Support",
      "White-label Options",
      "SLA Guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-to-br ${
                plan.popular
                  ? "from-indigo-50 to-cyan-50 border-2 border-indigo-200"
                  : "from-white to-gray-50 border border-gray-200"
              } rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" /> {f}
                  </li>
                ))}
              </ul>
              {plan.cta === "Start Free Trial" ? (
                <Link
                  href="/trial"
                  className="block w-full text-center py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:from-indigo-700 hover:to-cyan-600 shadow-lg"
                >
                  Start Free Trial
                </Link>
              ) : (
                <a
                  href="mailto:info@hub.com?subject=AI%20Tools%20Hub%20Enterprise%20Inquiry"
                  className="block w-full text-center py-3 rounded-lg font-semibold bg-gray-900 text-white hover:bg-gray-800"
                >
                  Contact Sales
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
