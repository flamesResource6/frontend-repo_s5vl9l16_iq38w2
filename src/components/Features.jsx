import { Rocket, ShieldCheck, Zap } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white hover:shadow-sm transition-shadow">
      <Icon className="size-6 text-yellow-500" />
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="w-full py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-4 mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
            <span className="inline-block size-2 rounded-full bg-yellow-400" />
            Why Lemon
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Clean infrastructure, powerful performance</h2>
          <p className="text-gray-600 max-w-2xl">Everything you need to deploy with confidence, designed to stay out of your way.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={Zap} title="Instant deploys" desc="Push to main and your changes go live globally in seconds." />
          <Feature icon={ShieldCheck} title="Secure by default" desc="Automatic SSL, DDoS protection, and isolated environments." />
          <Feature icon={Rocket} title="Scale effortlessly" desc="From hobby to hyperscale with zero config and predictable pricing." />
        </div>
      </div>
    </section>
  );
}
