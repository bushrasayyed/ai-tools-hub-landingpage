import { Brain, Globe, Users, Star } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </span>
              <span className="text-xl font-bold">AI Tools Hub</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">Empowering businesses worldwide with cutting-edge AI technology. Built for the future, available today.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"><Users className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"><Star className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/features" className="hover:text-cyan-400 transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link href="/#demo" className="hover:text-cyan-400 transition-colors">Demo</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 sm:mb-0">© {new Date().getFullYear()} AI Tools Hub. All rights reserved.</p>
          <p className="text-cyan-400 font-semibold">Developer — Bushra Sayyed</p>
        </div>
      </div>
    </footer>
  );
}
