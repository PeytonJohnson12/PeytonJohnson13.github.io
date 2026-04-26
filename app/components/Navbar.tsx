"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/app/lib/nav-links";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-[#03050E]/60 backdrop-blur-xl border-b border-white/[0.06] flex items-center justify-between px-12">
      <Link href="/" className="font-extrabold text-xl text-[#F0F6FC] tracking-[-0.03em]">
        Acme<span className="text-[#3B82F6]">Corp</span>
      </Link>

      <nav className="flex items-center gap-1">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href.replace("/#", "/"));
          return (
            <Link
              key={href}
              href={href}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-[#3B82F6]/12 border border-[#3B82F6]/20 text-[#3B82F6]"
                  : "text-[#6E7681] hover:text-[#F0F6FC] hover:bg-white/[0.06]"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-2">
        <Link
          href="/admin"
          className="px-5 py-2 rounded-lg text-sm font-semibold text-[#F0F6FC] border border-white/12 hover:bg-white/[0.06] transition-colors duration-150"
        >
          Sign In
        </Link>
        <Link
          href="/#features"
          className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] transition-colors duration-150"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
