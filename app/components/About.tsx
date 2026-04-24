"use client";

import { useInView } from "@/app/hooks/useInView";

const stats = [
  { value: "500+", label: "Companies served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support coverage" },
  { value: "4.9★", label: "Average rating" },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 px-6 bg-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div
          style={inView ? { animation: "fade-up 0.6s ease forwards" } : { opacity: 0 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-6">
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Built by people <span className="text-blue-400">who care</span>
          </h2>
          <p className="mt-6 text-slate-400 leading-relaxed">
            Acme Corp was founded in 2018 with a simple belief: software should work for the people using it, not the other way around. We've spent six years obsessing over the details so your team doesn't have to.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            We partner with companies across industries — from scrappy startups to Fortune 500 enterprises — helping them move faster without sacrificing quality, security, or reliability.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Our mission is to eliminate the operational friction that slows teams down, so you can focus on what you do best.
          </p>
        </div>

        <div
          className="grid grid-cols-2 gap-4"
          style={inView ? { animation: "fade-up 0.6s ease 0.2s forwards" } : { opacity: 0 }}
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-blue-400">{value}</div>
              <div className="mt-2 text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
