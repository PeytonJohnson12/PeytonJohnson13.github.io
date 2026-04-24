import Link from "next/link";
import { FOOTER_NAV_LINKS } from "@/app/lib/nav-links";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#0f172a] to-[#020817] text-white relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 mb-8">
          Get in Touch
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to get <span className="text-blue-400">started</span>?
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
          Let's talk about how Acme Corp can help your team move faster.
        </p>
        <a
          href="mailto:hello@acmecorp.com"
          className="mt-10 inline-block rounded-lg bg-blue-600 hover:bg-blue-500 px-10 py-3.5 font-semibold text-white transition-colors"
        >
          Contact Us
        </a>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>© 2026 Acme Corp. All rights reserved.</span>
          <nav className="flex gap-6">
            {FOOTER_NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
