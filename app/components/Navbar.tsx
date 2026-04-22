"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/app/lib/nav-links";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-white/90 backdrop-blur border-b border-gray-100 flex items-center justify-between px-6">
      <Link href="/" className="font-bold text-lg text-gray-900 tracking-tight">
        Acme Corp
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
                  ? "bg-brand text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
