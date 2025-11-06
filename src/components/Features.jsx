import { ShieldCheck, Zap, Globe, Wallet } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Bank-grade security",
    desc: "End-to-end encryption with biometrics and adaptive risk scoring.",
  },
  {
    icon: Zap,
    title: "Instant settlements",
    desc: "Lightning-fast transfers with real-time reconciliation and alerts.",
  },
  {
    icon: Globe,
    title: "Global-ready",
    desc: "Multi-currency support and cross-border compliance built-in.",
  },
  {
    icon: Wallet,
    title: "Smart wallets",
    desc: "Programmable spend rules, virtual cards, and role-based controls.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Built for modern fintech teams
          </h2>
          <p className="mt-3 text-white/70">
            A sleek system that merges a glassmorphic aesthetic with production-grade infrastructure.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/7.5"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 text-white ring-1 ring-white/20">
                <f.icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
