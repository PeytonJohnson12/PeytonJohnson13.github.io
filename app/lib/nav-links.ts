export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Admin", href: "/admin" },
] as const;

export const FOOTER_NAV_LINKS = NAV_LINKS.filter((l) => l.href !== "/#contact");
