// frontend/src/app/components/sections/Hero.jsx

"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; 
import CyberField from "../canvas/CyberField";
import { Phone, Mail, Copy, Check, GraduationCap, Briefcase, Globe, Server } from "lucide-react";

// --- SUB-COMPONENTS ---

const LanguageModule = () => (
  <div className="absolute top-6 right-6 z-50 flex flex-col items-end gap-1 font-mono text-xs md:text-sm">
    <div className="flex items-center gap-2 text-sky-400">
      <span>LANG_PROTOCOL:</span>
      <Globe className="w-3 h-3 animate-pulse" />
    </div>
    <div className="flex gap-2 text-gray-400 bg-zinc-900/80 p-2 rounded border border-zinc-800 backdrop-blur-sm">
      <span title="Business Dominant" className="hover:text-white cursor-help border-b border-transparent hover:border-white transition-all">ENG::ADVANCED</span>
      <span className="text-zinc-600">|</span>
      <span title="Academic & Corporate" className="hover:text-white cursor-help border-b border-transparent hover:border-white transition-all">FR::FLUENT</span>
      <span className="text-zinc-600">|</span>
      <span title="Native" className="hover:text-white cursor-help border-b border-transparent hover:border-white transition-all">AR::NATIVE</span>
    </div>
  </div>
);

const RoleLink = ({ href, text, color }) => (
  <Link href={href} className="group relative cursor-pointer">
    <span className={`text-xl md:text-2xl font-bold ${color} transition-all duration-300 group-hover:opacity-80`}>
      {text}
    </span>
    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${color.replace('text-', 'bg-')} transition-all duration-300 group-hover:w-full`} />
  </Link>
);

const ContactItem = ({ icon: Icon, label, value, href, isCopyable }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e) => {
    if (isCopyable) {
      e.preventDefault();
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <a href={href} onClick={isCopyable ? handleCopy : undefined} className="flex items-center gap-3 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 px-4 py-2 rounded-lg hover:border-sky-500 hover:bg-zinc-800 transition-all cursor-pointer group">
      <div className="p-2 bg-zinc-800 rounded-md group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors">
        <Icon className="w-4 h-4 text-gray-300" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">{label}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-200 font-mono">{value}</span>
          {isCopyable && <span className="text-xs text-gray-600">{copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}</span>}
        </div>
      </div>
    </a>
  );
};

const Divider = () => <span className="hidden md:block text-gray-700 mx-4">|</span>;

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col">
      <LanguageModule /> {/* <--- NEW ADDITION */}
      
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
          <Suspense fallback={null}><CyberField /></Suspense>
          <fog attach="fog" args={["#000000", 5, 15]} />
        </Canvas>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 flex-grow flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter"
        >
          BOUARDI HOUSSAM
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0"
        >
          <RoleLink href="/cybersecurity" text="Cybersecurity Engineer" color="text-sky-400" />
          <Divider />
          <RoleLink href="/automation" text="Automation & AI" color="text-purple-400" />
          <Divider />
          <RoleLink href="/development" text="SaaS & Dev" color="text-green-400" />
          <Divider />
          <RoleLink href="/creative" text="Creative Director" color="text-pink-400" />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-gray-400 text-lg font-light tracking-wide"
        >
          Designing Resilience. Automating the Boring.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-30 w-full bg-black/40 backdrop-blur-sm border-t border-zinc-900 p-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8">
          <ContactItem icon={Phone} label="Secure Line" value="+212 6 94 70 42 08" href="tel:+212694704208" />
          <ContactItem icon={Briefcase} label="Professional Contact" value="Bouardihoussam.contact@gmail.com" href="mailto:Bouardihoussam.contact@gmail.com" isCopyable={true} />
          <ContactItem icon={GraduationCap} label="Academic / Research" value="houssam.bouardi@usmba.ac.ma" href="mailto:houssam.bouardi@usmba.ac.ma" isCopyable={true} />
        </div>
      </motion.div>
    </section>
  );
}