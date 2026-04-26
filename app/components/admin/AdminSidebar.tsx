"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" />
        <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
        <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
        <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    label: "Kanban Board",
    href: "/admin/kanban",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="2" width="4" height="12" rx="1.5" fill="currentColor" />
        <rect x="6" y="2" width="4" height="8" rx="1.5" fill="currentColor" opacity="0.6" />
        <rect x="11" y="2" width="4" height="10" rx="1.5" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <polyline points="1,12 5,7 8,9 12,4 15,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col flex-1">
      <div className="px-5 pt-6 pb-2 text-[11px] font-semibold text-[#3B4454] uppercase tracking-[0.08em]">
        Navigation
      </div>

      <div className="flex flex-col gap-0.5 px-3">
        {navItems.map(({ label, href, icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-[#3B82F6]/12 border border-[#3B82F6]/20 text-[#3B82F6]"
                  : "text-[#6E7681] hover:text-[#F0F6FC] hover:bg-white/[0.06]"
              }`}
            >
              <span className="shrink-0">{icon}</span>
              {label}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto mx-3 mb-4 border-t border-white/[0.06] pt-4">
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.04]">
          <div
            className="w-8 h-8 rounded-full shrink-0"
            style={{ background: "linear-gradient(135deg,#3b82f6,#6366f1)" }}
          />
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] font-semibold text-[#F0F6FC] truncate">Alex Morgan</span>
            <span className="text-[11px] text-[#6E7681]">Admin</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
