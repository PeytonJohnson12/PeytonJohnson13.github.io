import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics — Admin",
};

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="shrink-0 h-16 flex items-center px-8 border-b border-white/[0.06]">
        <h1 className="text-[20px] font-extrabold text-[#F0F6FC] tracking-[-0.02em]">Analytics</h1>
      </header>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-[#3B4454] text-sm">Analytics coming soon</p>
      </div>
    </div>
  );
}
