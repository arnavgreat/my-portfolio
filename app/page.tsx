import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Youtube, Mail, ArrowRight, Code2, Camera, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">AG.</div>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="#content" className="hover:text-white transition-colors">Content</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            Building Software & <br />
            Exploring the World.
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            Hi, I'm <strong className="text-white">Arnav Gupta</strong>. A Software Engineer and Content Creator based in India. 
            I bridge the gap between technical problem-solving and creative storytelling to build high-impact personal brands.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="https://www.linkedin.com/in/arnav-gupta-450427293" 
              target="_blank"
              className="bg-white text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              <Linkedin size={20} /> Connect on LinkedIn
            </Link>
            <Link 
              href="#content"
              className="border border-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              See Content <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* --- BENTO GRID LAYOUT --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* 1. ABOUT CARD (Large) */}
          <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Code2 className="text-blue-500" /> The Developer
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              With a background in QA and Software Development, I focus on clean code and efficient systems. Currently creating solutions using modern web technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Next.js', 'SQL', 'Automation Testing', 'Manual Testing'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 2. STATS / LOCATION CARD */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <MapPin className="text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold">India</h3>
              <p className="text-slate-500">Based in Delhi</p>
            </div>
            <div className="mt-8">
              <p className="text-sm text-slate-400">Open to:</p>
              <p className="font-medium text-white">Remote & Hybrid Roles</p>
            </div>
          </div>

          {/* 3. YOUTUBE CARD (Creative) */}
          <Link 
            href="https://www.youtube.com/@Maya_bramhand" 
            target="_blank"
            className="group md:col-span-2 bg-gradient-to-br from-red-900/20 to-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-red-500/50 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="bg-red-600 text-white p-2 rounded-lg">
                <Youtube size={24} />
              </div>
              <ArrowRight className="text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Maya Bramhand</h3>
            <p className="text-slate-400 mb-4">
              Documenting journeys across India. Exploring culture, spirituality, and the beauty of the unknown through cinematic travel logs.
            </p>
            <span className="text-sm font-medium text-red-400 group-hover:underline">Watch Channel &rarr;</span>
          </Link>

          {/* 4. INSTAGRAM CARD (Lifestyle) */}
          <Link 
            href="https://www.instagram.com/_arnav_gupta___/"
            target="_blank" 
            className="group bg-gradient-to-br from-purple-900/20 to-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
          >
             <div className="flex justify-between items-start mb-4">
              <div className="bg-purple-600 text-white p-2 rounded-lg">
                <Instagram size={24} />
              </div>
              <ArrowRight className="text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-1">@_arnav_gupta___</h3>
            <p className="text-slate-400 text-sm">Personal brand, lifestyle & BTS.</p>
          </Link>

        </section>

        {/* --- CONTACT SECTION --- */}
        <section className="mt-24 border-t border-slate-800 pt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's create something together.</h2>
          <p className="text-slate-400 mb-8">
            Always open to discussing product design, content strategy, or partnership opportunities.
          </p>
          <a 
            href="mailto:your-email@example.com" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-xl font-medium transition-colors"
          >
            <Mail size={24} /> Get in touch
          </a>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Arnav Gupta. All rights reserved.</p>
      </footer>
    </div>
  );
}