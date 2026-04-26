import type { Metadata } from "next";
import AdminPlaceholderPage from "@/app/components/admin/AdminPlaceholderPage";

export const metadata: Metadata = {
  title: "Analytics — Admin",
};

export default function AnalyticsPage() {
  return <AdminPlaceholderPage title="Analytics" />;
}
