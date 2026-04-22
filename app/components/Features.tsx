const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Our platform is optimized for speed at every layer, so your team never waits.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance built in from day one — not bolted on.",
  },
  {
    icon: "📈",
    title: "Scalable by Design",
    description: "Start small and grow without re-architecting. We scale with your ambitions.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description: "Real humans available around the clock to keep your business running smoothly.",
  },
  {
    icon: "🔧",
    title: "Easy Integrations",
    description: "Connect your existing tools in minutes with our growing library of integrations.",
  },
  {
    icon: "📊",
    title: "Actionable Analytics",
    description: "Turn data into decisions with dashboards that surface what actually matters.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Everything you need</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            A complete platform that gives your team superpowers — without the learning curve.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
