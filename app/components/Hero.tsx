import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand to-brand-dark text-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Modern Solutions for Growing Teams
        </h1>
        <p className="mt-6 text-xl text-blue-100 max-w-xl mx-auto">
          We help businesses streamline operations, scale faster, and deliver better products — without the complexity.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#features"
            className="rounded-lg bg-white text-brand font-semibold px-6 py-3 hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/#about"
            className="rounded-lg border border-white/40 text-white font-semibold px-6 py-3 hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
