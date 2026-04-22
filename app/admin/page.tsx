import Link from "next/link";

const quickLinks = [
  {
    title: "Kanban Board",
    description: "Manage tasks across To Do, In Progress, and Done columns.",
    href: "/admin/kanban",
    icon: "📋",
  },
];

export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-1 text-gray-500">Welcome to the Acme Corp admin area.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickLinks.map(({ title, description, href, icon }) => (
          <Link
            key={href}
            href={href}
            className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-brand/30 transition-all"
          >
            <div className="text-3xl mb-3">{icon}</div>
            <h2 className="font-semibold text-gray-900 group-hover:text-brand transition-colors">
              {title}
            </h2>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
