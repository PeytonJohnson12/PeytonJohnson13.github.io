import type { Metadata } from "next";
import AdminPlaceholderPage from "@/app/components/admin/AdminPlaceholderPage";

export const metadata: Metadata = {
  title: "Settings — Admin",
};

export default function SettingsPage() {
  return <AdminPlaceholderPage title="Settings" />;
}
