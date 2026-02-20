// frontend/src/app/development/page.js

import Link from "next/link";
import { Code, ArrowLeft, Server, Dumbbell, Network } from "lucide-react";

export default function DevPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24">
      <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-5 h-5" />
        <span>Return to Base</span>
      </Link>

      <div className="border-l-4 border-green-500 pl-6 mb-16">
        <h1 className="text-5xl font-bold mb-4 text-green-500">Deep Tech Engineering</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Full-stack systems engineered on bare metal. I don&apos;t deploy to someone else&apos;s cloud &mdash; I build the infrastructure, train the models, and ship the product from my own hardware.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* The Home Lab */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-green-500 transition-colors group">
          <Server className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">The Home Lab &mdash; Bare Metal Ops</h3>
          <p className="text-gray-400">
            Self-hosted infrastructure running Nextcloud, AdGuard DNS, VPNs, and every AI model I build. This is the foundation &mdash; I don&apos;t just write code, I own the entire stack down to the kernel.
          </p>
        </div>

        {/* Go_To_GYM */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-green-500 transition-colors group">
          <Dumbbell className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Go_To_GYM &mdash; ML with Active Learning</h3>
          <p className="text-gray-400">
            A Random Forest model predicting workout readiness based on sleep quality, stress levels, and recovery metrics. Implements active learning &mdash; when I override the model&apos;s prediction, it retrains on the correction. The model gets sharper the more I disagree with it.
          </p>
        </div>

        {/* Book Notes */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-green-500 transition-colors group md:col-span-2">
          <Network className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Book Notes &mdash; Graph-Relational Knowledge System</h3>
          <p className="text-gray-400">
            A complex TypeScript application with Obsidian-like bidirectional graph relations between notes, concepts, and references. Not a simple CRUD app &mdash; a knowledge architecture designed for non-linear thinking and deep cross-referencing across research domains.
            <br />
            <span className="text-sm font-mono text-gray-500 mt-2 block">
              &gt; Stack: TypeScript &bull; Graph Data Structures &bull; Relational Mapping &bull; Self-Hosted
            </span>
          </p>
        </div>

      </div>
    </main>
  );
}