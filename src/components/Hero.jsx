import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Soft radial background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-6 md:grid-cols-2 md:pt-10">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Glassmorphic Fintech Interface
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            Modern payments with a 3D glass-card experience
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            A minimalist, digital-first design system crafted with Sass-inspired
            utility layers and smooth 3D interactions. Experience a credit card
            like no other.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-400/25 transition hover:shadow-cyan-400/40">
              Explore Demo
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </button>
            <button className="rounded-xl px-5 py-3 text-sm font-semibold text-white/80 ring-1 ring-white/20 backdrop-blur transition hover:text-white">
              Learn more
            </button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-white/60">
            <div>
              <div className="text-xl font-bold text-white">12k+</div>
              <div className="text-xs">Active users</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">99.99%</div>
              <div className="text-xs">Uptime</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">$2B+</div>
              <div className="text-xs">Processed</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full max-w-xl md:aspect-square md:max-w-none">
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 backdrop-blur-lg">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Subtle gradient overlay that doesn't block interaction */}
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
