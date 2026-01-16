// frontend/src/app/development/page.js

import Link from "next/link";
import { Code, ArrowLeft, Gamepad2, Server, Smartphone } from "lucide-react";

export default function DevPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24">
      <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-5 h-5" />
        <span>Return to Base</span>
      </Link>

      <div className="border-l-4 border-green-500 pl-6 mb-16">
        <h1 className="text-5xl font-bold mb-4 text-green-500">SaaS & Development</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Building full-stack products that solve real problems. 
          From kids' education to complex productivity tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project 1 */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-green-500 transition-colors group">
          <Gamepad2 className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Kids Fun Learning App</h3>
          <p className="text-gray-400">
            Current Flagship: An interactive educational platform merging fun UI animations with solid pedagogy for children.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-green-500 transition-colors group">
          <Server className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">The Home Lab</h3>
          <p className="text-gray-400">
            Self-hosted infrastructure running Nextcloud, AdGuard DNS, and VPNs. I don't just write code; I manage the metal.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-green-500 transition-colors group">
          <Smartphone className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Productivity SaaS</h3>
          <p className="text-gray-400">
            Developed "Book Note" and "Complex To-Do" apps (available on GitHub), focusing on clean architecture and user utility.
          </p>
        </div>

      </div>
    </main>
  );
}