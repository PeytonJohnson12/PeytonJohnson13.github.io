import Link from "next/link";

const stats = [
  { label: "Total Tasks", value: "24", trend: "↑ 12% from last week", trendColor: "#22C55E" },
  { label: "In Progress", value: "7", trend: "3 due this week", trendColor: "#F59E0B" },
  { label: "Completed", value: "11", trend: "↑ 4 from yesterday", trendColor: "#22C55E" },
  { label: "Completion", value: "68%", trend: "Sprint progress", trendColor: "#6E7681", accent: true },
];

const activity = [
  { dot: "#22C55E", text: "Launch new landing page", action: "moved to", target: "Done", time: "2m ago" },
  { dot: "#F59E0B", text: "Redesign onboarding flow", action: "moved to", target: "In Progress", time: "18m ago" },
  { dot: "#3B82F6", text: "Set up analytics dashboard", action: "added to", target: "To Do", time: "1h ago" },
  { dot: "#22C55E", text: "Database migration v2", action: "moved to", target: "Done", time: "3h ago" },
];

export default function AdminPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="h-16 shrink-0 flex items-center justify-between px-8 border-b border-white/[0.06]">
        <span className="text-[15px] font-medium text-[#6E7681]">Dashboard</span>
        <button className="px-4 py-1.5 rounded-lg bg-[#3B82F6] text-white text-[13px] font-semibold hover:bg-[#2563EB] transition-colors">
          + New Task
        </button>
      </div>

      <div className="flex-1 p-8 flex flex-col gap-6 overflow-auto">
        <div>
          <h1 className="text-[28px] font-extrabold text-[#F0F6FC] tracking-[-0.02em]">Good morning, Alex</h1>
          <p className="mt-1 text-[15px] text-[#6E7681]">Here's what's happening with your projects today.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ label, value, trend, trendColor, accent }) => (
            <div
              key={label}
              className={`rounded-xl border p-6 ${
                accent
                  ? "border-[#3B82F6]/20 bg-[#3B82F6]/08"
                  : "border-white/[0.06] bg-[#0D1117]"
              }`}
            >
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.06em] mb-3"
                style={{ color: accent ? "#93C5FD" : "#6E7681" }}
              >
                {label}
              </div>
              <div
                className="text-[36px] font-extrabold tracking-[-0.03em]"
                style={{ color: accent ? "#3B82F6" : "#F0F6FC" }}
              >
                {value}
              </div>
              <div className="mt-1.5 text-[12px]" style={{ color: trendColor }}>
                {trend}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
          <div className="rounded-xl border border-white/[0.06] bg-[#0D1117] p-6 flex flex-col gap-4">
            <h2 className="text-[14px] font-bold text-[#F0F6FC]">Quick Access</h2>
            <Link
              href="/admin/kanban"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#3B82F6]/30 hover:bg-white/[0.06] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="2" width="5" height="14" rx="2" fill="#3B82F6" />
                  <rect x="7" y="2" width="5" height="9" rx="2" fill="#3B82F6" opacity="0.6" />
                  <rect x="13" y="2" width="4" height="12" rx="2" fill="#3B82F6" opacity="0.4" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-semibold text-[#F0F6FC] group-hover:text-[#3B82F6] transition-colors">Kanban Board</div>
                <div className="text-[12px] text-[#6E7681] mt-0.5">Manage tasks across columns</div>
              </div>
              <span className="text-[#3B4454] group-hover:text-[#3B82F6] transition-colors">→</span>
            </Link>
          </div>

          <div className="lg:col-span-2 rounded-xl border border-white/[0.06] bg-[#0D1117] p-6 flex flex-col gap-4">
            <h2 className="text-[14px] font-bold text-[#F0F6FC]">Recent Activity</h2>
            <div className="flex flex-col gap-3">
              {activity.map(({ dot, text, action, target, time }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: dot }} />
                  <p className="text-[13px] text-[#F0F6FC] flex-1 min-w-0">
                    {text}{" "}
                    <span className="text-[#6E7681]">{action}</span>{" "}
                    {target}
                  </p>
                  <span className="text-[12px] text-[#3B4454] shrink-0">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
