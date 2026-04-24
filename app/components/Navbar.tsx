"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/app/lib/nav-links";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6">
      <Link href="/" className="font-bold text-lg text-white tracking-tight">
        Acme<span className="text-blue-400">Corp</span>
      </Link>
      <nav className="flex items-center gap-1">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href.replace("/#", "/"));
          return (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
