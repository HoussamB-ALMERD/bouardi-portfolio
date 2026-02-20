// frontend/src/app/automation/page.js

import Link from "next/link";
import { Bot, ArrowLeft, Workflow, BookOpen, Cpu, Eye } from "lucide-react";

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24">
      <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-5 h-5" />
        <span>Return to Base</span>
      </Link>

      <div className="border-l-4 border-purple-500 pl-6 mb-16">
        <h1 className="text-5xl font-bold mb-4 text-purple-500">Local AI Systems</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Every system I build runs locally. No cloud APIs. No recurring costs. No data leaving the machine. Privacy-first AI that I own, control, and deploy on my own hardware.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Grader_SaaS */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-purple-500 transition-colors group">
          <Eye className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Grader_SaaS &mdash; XAI Grading Engine</h3>
          <p className="text-gray-400">
            Human-in-the-loop AI grading system with full Explainable AI. It doesn&apos;t just assign a mark &mdash; it generates a transparent reasoning chain explaining exactly why each score was given. Self-hosted. No student data leaves the server.
          </p>
        </div>

        {/* Alfred_Assistant */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-purple-500 transition-colors group">
          <Bot className="w-12 h-12 text-sky-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Alfred_Assistant &mdash; Local AI Agent</h3>
          <p className="text-gray-400">
            A personal AI assistant running entirely on local hardware. Computer vision, task integration, and natural language &mdash; zero API costs. Proof that you don&apos;t need OpenAI&apos;s billing page to build useful intelligence.
          </p>
        </div>

        {/* Wisdom-Synthesizer */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-purple-500 transition-colors group">
          <BookOpen className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Wisdom-Synthesizer &mdash; PDF-to-Audio Pipeline</h3>
          <p className="text-gray-400">
            An AI pipeline that ingests PDFs, structures content hierarchically, and generates audiobooks delivered directly to my phone. Converts research papers into consumable audio for commute-time learning.
          </p>
        </div>

        {/* n8n Home Lab */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-purple-500 transition-colors group">
          <Workflow className="w-12 h-12 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">n8n Orchestration Lab</h3>
          <p className="text-gray-400">
            Self-hosted n8n instance orchestrating data streams, automated alerts, server health monitoring, and cross-system integrations. The backbone that connects every local AI project into a unified infrastructure.
          </p>
        </div>

      </div>
    </main>
  );
}