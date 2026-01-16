// frontend/src/app/creative/page.js

import Link from "next/link";
import { Palette, ArrowLeft, Video, TrendingUp, Paintbrush } from "lucide-react";

export default function CreativePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24">
      <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-5 h-5" />
        <span>Return to Base</span>
      </Link>

      <div className="border-l-4 border-pink-500 pl-6 mb-16">
        <h1 className="text-5xl font-bold mb-4 text-pink-500">Creative Direction</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Optimizing Attention. I combine UI/UX, Motion Graphics, and CRO strategies to keep users engaged and converting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project 1 */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-pink-500 transition-colors group">
          <TrendingUp className="w-12 h-12 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">CRO & Retention Strategy</h3>
          <p className="text-gray-400">
            Specialized in E-commerce audits. I redesign stores not just to look good, but to maximize "Time on Site" and conversion rates.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-pink-500 transition-colors group">
          <Video className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Motion Information Design</h3>
          <p className="text-gray-400">
            Expert in After Effects & Premiere. I create explanatory animations and diagrams that capture attention in the short-form content era.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-pink-500 transition-colors group">
          <Paintbrush className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Abstract Art</h3>
          <p className="text-gray-400">
             A painter at heart. My background in abstract art informs my digital design choices, creating depth and emotion in UI.
          </p>
        </div>

      </div>
    </main>
  );
}