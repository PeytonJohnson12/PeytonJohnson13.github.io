import Link from "next/link";
import { FOOTER_NAV_LINKS } from "@/app/lib/nav-links";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Ready to get started?</h2>
        <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
          Let's talk about how Acme Corp can help your team move faster.
        </p>
        <a
          href="mailto:hello@acmecorp.com"
          className="mt-8 inline-block rounded-lg bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          Contact Us
        </a>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© 2026 Acme Corp. All rights reserved.</span>
          <nav className="flex gap-6">
            {FOOTER_NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
