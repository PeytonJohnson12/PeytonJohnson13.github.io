const stats = [
  { value: "500+", label: "Companies served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support coverage" },
  { value: "4.9★", label: "Average rating" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Built by people who care</h2>
          <p className="mt-6 text-gray-500 leading-relaxed">
            Acme Corp was founded in 2018 with a simple belief: software should work for the people using it, not the other way around. We've spent six years obsessing over the details so your team doesn't have to.
          </p>
          <p className="mt-4 text-gray-500 leading-relaxed">
            We partner with companies across industries — from scrappy startups to Fortune 500 enterprises — helping them move faster without sacrificing quality, security, or reliability.
          </p>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Our mission is to eliminate the operational friction that slows teams down, so you can focus on what you do best.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100"
            >
              <div className="text-4xl font-bold text-brand">{value}</div>
              <div className="mt-2 text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
