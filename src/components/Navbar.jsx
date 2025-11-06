import { CreditCard, Shield, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-10 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/80 to-purple-500/80 text-white shadow-lg shadow-purple-500/20 ring-1 ring-white/20 backdrop-blur">
            <CreditCard size={20} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white/90">
            GlassPay
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-white/70 transition hover:text-white" href="#features">
            Features
          </a>
          <a className="text-sm text-white/70 transition hover:text-white" href="#security">
            Security
          </a>
          <a className="text-sm text-white/70 transition hover:text-white" href="#pricing">
            Pricing
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-xl px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/20 backdrop-blur transition hover:text-white md:block">
            Sign in
          </button>
          <button className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-400/10 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">
            <Shield size={16} className="text-cyan-300 group-hover:rotate-6 transition" />
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
