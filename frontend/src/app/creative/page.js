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
        <h1 className="text-5xl font-bold mb-4 text-pink-500">HCI &amp; Visualization</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Research without communication is incomplete. I design how complex systems are understood &mdash; from interactive interfaces to motion-based data narratives that make AI architectures legible to human reviewers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CRO & Behavioral Analytics */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-pink-500 transition-colors group">
          <TrendingUp className="w-12 h-12 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Behavioral Analytics &amp; CRO</h3>
          <p className="text-gray-400">
            Conversion Rate Optimization grounded in cognitive load theory. I audit digital interfaces to minimize friction and maximize decision throughput &mdash; the same principles I apply when designing XAI dashboards for my research systems.
          </p>
        </div>

        {/* Motion Design for Research */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-pink-500 transition-colors group">
          <Video className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Technical Motion Design</h3>
          <p className="text-gray-400">
            After Effects and Premiere Pro workflows for visualizing complex AI architectures, network topologies, and data flow diagrams. I animate the systems I build &mdash; turning ensemble model pipelines and SHAP attribution maps into visual narratives for conference presentations and papers.
          </p>
        </div>

        {/* Abstract Art & Generative Design */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-pink-500 transition-colors group md:col-span-2">
          <Paintbrush className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Abstract Art &amp; Generative Aesthetics</h3>
          <p className="text-gray-400">
            A painter and digital artist. My practice in abstract composition directly informs how I design data visualizations, UI hierarchies, and the 3D particle field on this portfolio&apos;s landing page. Art isn&apos;t decoration &mdash; it&apos;s a trained intuition for spatial relationships and visual weight that transfers directly to Human-Computer Interaction design.
          </p>
        </div>

      </div>
    </main>
  );
}