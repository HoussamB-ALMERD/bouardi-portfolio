// frontend/src/app/cybersecurity/page.js

import Link from "next/link";
import { ShieldCheck, ArrowLeft, GraduationCap } from "lucide-react";

export default function CyberPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24">
      <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-5 h-5" />
        <span>Return to Base</span>
      </Link>

      <div className="border-l-4 border-sky-500 pl-6 mb-16">
        <h1 className="text-5xl font-bold mb-4 text-sky-500">Cybersecurity Protocols</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          From CNDP ISO compliance to AI-driven Zero Day Defense.
          My work ensures resilience in an interconnected world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project 1: CNDP */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-sky-500 transition-colors group">
          <ShieldCheck className="w-12 h-12 text-sky-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">CNDP Security Head</h3>
          <p className="text-gray-400">
            Managed physical and network security for the CNDP building phase. Implemented ISO 27001 standards and automated alert systems for web agencies.
          </p>
        </div>

        {/* Project 2: PhD */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-sky-500 transition-colors group">
          <ShieldCheck className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">PhD: AI in Cyber</h3>
          <p className="text-gray-400">
            Current research on Economic Resilience and Zero-Day Defense for IoT/Edge devices using Artificial Intelligence.
          </p>
        </div>

        {/* PROJECT 3: The Professor (Fixed Special Characters) */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-sky-500 transition-colors group md:col-span-2">
          <GraduationCap className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Instructor at ENSAF</h3>
          <p className="text-gray-400">
            Teaching the next generation of engineers (1st to 5th year).
            <br />
            <span className="text-sm font-mono text-gray-500 mt-2 block">
              &gt; Algorithms &amp; Data Structures <br/>
              &gt; Networking &amp; Architecture <br/>
              &gt; Quality of Service (QoS)
            </span>
          </p>
        </div>

      </div>
    </main>
  );
}