// frontend/src/app/automation/page.js

import Link from "next/link";
import { Bot, ArrowLeft, Workflow, Mail, Cpu } from "lucide-react";

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24">
      <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-5 h-5" />
        <span>Return to Base</span>
      </Link>

      <div className="border-l-4 border-purple-500 pl-6 mb-16">
        <h1 className="text-5xl font-bold mb-4 text-purple-500">Automation & AI</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          "If it feels robotic, a robot should do it." <br/>
          I build complex workflows to remove human error and save thousands of hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project 1 */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-purple-500 transition-colors group">
          <Mail className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">6-Month Email Loop</h3>
          <p className="text-gray-400">
            A complex follow-up system that tracks responses, adjusts templates, and manages leads automatically for half a year without human input.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-purple-500 transition-colors group">
          <Workflow className="w-12 h-12 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">n8n Home Lab</h3>
          <p className="text-gray-400">
            Self-hosted automation infrastructure (n8n) managing personal data streams, alert systems, and server health checks.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-purple-500 transition-colors group">
          <Bot className="w-12 h-12 text-sky-500 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">Academic AI Agents</h3>
          <p className="text-gray-400">
            Created automated scripts for Systematic Literature Reviews, parsing thousands of papers to accelerate PhD research.
          </p>
        </div>

      </div>
    </main>
  );
}