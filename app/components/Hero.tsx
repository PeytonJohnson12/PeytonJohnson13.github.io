"use client";

import Link from "next/link";

const avatars = [
  "linear-gradient(135deg,#4f46e5,#7c3aed)",
  "linear-gradient(135deg,#0ea5e9,#3b82f6)",
  "linear-gradient(135deg,#10b981,#059669)",
  "linear-gradient(135deg,#f59e0b,#d97706)",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#03050E] text-white px-6 overflow-hidden">
      {/* Animated background blobs */}
      <div
        className="absolute top-[-120px] left-[-160px] w-[640px] h-[640px] rounded-full bg-[#3B82F6]/[0.18] blur-[80px]"
        style={{ animation: "blob-float 8s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-indigo-500/[0.12] blur-[80px]"
        style={{ animation: "blob-float 8s ease-in-out infinite 2s" }}
      />
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/[0.10] blur-[60px]"
        style={{ animation: "blob-float 8s ease-in-out infinite 4s" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div
        className="relative z-10 max-w-4xl text-center flex flex-col items-center"
        style={{ animation: "fade-up 0.6s ease forwards" }}
      >
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/08 px-4 py-1.5 text-sm text-[#93C5FD] mb-9">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          Modern Business Platform — Now in v3.0
        </div>

        {/* Headline */}
        <h1 className="text-[80px] leading-[1.0] font-black tracking-[-0.04em] text-[#F0F6FC]">
          Build faster.
        </h1>
        <h1 className="text-[80px] leading-[1.0] font-black tracking-[-0.04em] text-[#3B82F6] mb-7">
          Ship smarter.
        </h1>

        {/* Sub */}
        <p className="text-xl text-[#6E7681] max-w-[520px] leading-relaxed mb-11">
          We help ambitious teams streamline operations, scale without friction, and deliver products that matter.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <Link
            href="/#features"
            className="rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-3.5 text-base transition-colors"
            style={{ boxShadow: "0 0 40px rgba(59,130,246,0.35)" }}
          >
            Get Started Free
          </Link>
          <Link
            href="/#about"
            className="rounded-xl border border-white/10 text-white font-medium px-8 py-3.5 text-base hover:bg-white/[0.06] transition-colors"
          >
            Watch demo
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-4">
          <div className="flex">
            {avatars.map((bg, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#03050E]"
                style={{ background: bg, marginLeft: i > 0 ? "-10px" : 0 }}
              />
            ))}
          </div>
          <p className="text-sm text-[#6E7681]">
            Trusted by{" "}
            <span className="text-[#F0F6FC] font-semibold">2,400+</span> teams worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
