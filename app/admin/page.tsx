import Link from "next/link";

const quickLinks = [
  {
    title: "Kanban Board",
    description: "Manage tasks across To Do, In Progress, and Done columns.",
    href: "/admin/kanban",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
];

export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      <p className="mt-1 text-slate-400">Welcome to the Acme Corp admin area.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickLinks.map(({ title, description, href, icon }) => (
          <Link
            key={href}
            href={href}
            className="group block rounded-xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4">
              {icon}
            </div>
            <h2 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
              {title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
