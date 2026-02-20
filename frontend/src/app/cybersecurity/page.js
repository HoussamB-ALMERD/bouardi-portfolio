// frontend/src/app/cybersecurity/page.js

import Link from "next/link";
import { ShieldCheck, ArrowLeft, GraduationCap, FileText, Cpu, Bug } from "lucide-react";

export default function CyberPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24">
      <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-5 h-5" />
        <span>Return to Base</span>
      </Link>

      <div className="border-l-4 border-sky-500 pl-6 mb-16">
        <h1 className="text-5xl font-bold mb-4 text-sky-500">Edge AI &amp; Cybersecurity Research</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          2nd-year PhD candidate. CNRST Excellence Scholar.
          My thesis fuses AI with cybersecurity to build economically resilient defense systems for critical infrastructure. 5 papers. 1 deployed IPS. Zero cloud dependency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* PhD Thesis */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-sky-500 transition-colors group">
          <GraduationCap className="w-12 h-12 text-sky-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">PhD Thesis: AI &times; Cybersecurity</h3>
          <p className="text-gray-400">
            &ldquo;Integration of AI into Cybersecurity for Economical Resilience.&rdquo; Researching lightweight ML models for real-time threat detection on resource-constrained edge devices &mdash; where milliseconds determine breach or containment.
          </p>
        </div>

        {/* Publications */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-sky-500 transition-colors group">
          <FileText className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">5 Academic Publications</h3>
          <p className="text-gray-400">
            3 journal papers under review: Systematic Literature Review on Zero-Day IoT attacks, and lightweight edge intrusion detection for Mirai botnets using Random Forests.
            <br />
            <span className="text-sm font-mono text-gray-500 mt-2 block">
              &gt; ESAI&apos;25: AI-Enhanced Encryption vs Blockchain for Embedded Medical Imaging <br/>
              &gt; ICOSES: Smart Mobility Services Architecture
            </span>
          </p>
        </div>

        {/* DoberMan - Flagship */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-sky-500 transition-colors group md:col-span-2">
          <Bug className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">DoberMan &mdash; Edge-Deployed IPS for Critical IoMT</h3>
          <p className="text-gray-400">
            My magnum opus. An Intrusion Prevention System built for the Internet of Medical Things. Runs an ensemble model (Random Forest + Isolation Forest) with local LLMs (TinyLlama/Ollama) and SHAP-based Explainable AI for human-readable threat reports. Uses Linux Kernel tc for adaptive traffic throttling instead of binary blocking &mdash; because in medical infrastructure, dropping a packet can cost a life.
            <br />
            <span className="text-sm font-mono text-gray-500 mt-2 block">
              &gt; Stack: Python &bull; Scikit-learn &bull; Ollama &bull; SHAP &bull; Linux tc &bull; Edge Hardware <br/>
              &gt; Status: Deployed. No cloud. No API calls. Pure edge inference.
            </span>
          </p>
        </div>

      </div>
    </main>
  );
}