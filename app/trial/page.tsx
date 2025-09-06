import Link from "next/link";
import { Check } from "lucide-react";

export default function TrialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Free Trial
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the full power of AI Tools Hub for 14 days. No credit
            card required.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Create Your Account
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500   text-gray-900 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500  text-gray-900 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500  text-gray-900  focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500  text-gray-900 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900">
                  <option>Team Size</option>
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>200+ employees</option>
                </select>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Start Free Trial
                </button>
              </form>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                What's Included:
              </h4>
              <ul className="space-y-3">
                {[
                  "Full access to all AI tools",
                  "Unlimited projects and exports",
                  "Priority customer support",
                  "Advanced analytics dashboard",
                  "Team collaboration features",
                  "API access and integrations",
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-500 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
