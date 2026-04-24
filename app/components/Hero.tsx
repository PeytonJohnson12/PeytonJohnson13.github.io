"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020817] text-white px-6 overflow-hidden">
      {/* Animated background blobs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"
        style={{ animation: "blob-float 8s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl"
        style={{ animation: "blob-float 8s ease-in-out infinite 2s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-indigo-600/15 blur-3xl"
        style={{ animation: "blob-float 8s ease-in-out infinite 4s" }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="relative z-10 max-w-4xl text-center"
        style={{ animation: "fade-up 0.6s ease forwards" }}
      >
        {/* Label pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Modern Business Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Modern Solutions for
          <br />
          <span className="text-blue-400">Growing Teams</span>
        </h1>

        <p className="mt-6 text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
          We help businesses streamline operations, scale faster, and deliver better products — without the complexity.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#features"
            className="rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/#about"
            className="rounded-lg border border-white/20 text-white font-semibold px-8 py-3 hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
