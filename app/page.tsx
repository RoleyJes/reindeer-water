import Link from "next/link";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TruckIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import { SectionHeading } from "@/components/SectionHeading";
import { Process } from "@/components/Process";
import Hero from "@/components/home/Hero";
import Promise from "@/components/home/Promise";
import Products from "@/components/home/Products";
import CTA from "@/components/CTA";

const benefits = [
  ["Clean & Safe", "Produced with care and a strong focus on hygiene."],
  ["Quality Focused", "Quality is considered at every stage of production."],
  [
    "Refreshingly Pure",
    "A clean, crisp experience made for everyday refreshment.",
  ],
  [
    "Reliable Supply",
    "A dependable partner for homes, businesses and bulk needs.",
  ],
];
const icons = [ShieldCheckIcon, BeakerIcon, SparklesIcon, TruckIcon];

export default function Home() {
  return (
    <main>
      <Hero />
      <Promise />
      <Products />

      <section className="relative overflow-hidden bg-[var(--navy)] py-24 lg:py-32">
        <div className="water-photo absolute inset-0 bg-cover bg-center opacity-25" />
        <div className="container-x relative">
          <SectionHeading
            centered
            light
            eyebrow="How we work"
            title="Quality You Can See. Purity You Can Trust."
            body="A thoughtful production process keeps the essentials simple: treat carefully, filter thoroughly, check consistently and package hygienically."
          />
          <div className="mt-12">
            <Process />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Reindeer Water"
            title="Everything you need from everyday water."
            body="From production to packaging, every step is focused on delivering water you can trust."
          />
          <div className="mt-12 grid border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([t, d], i) => {
              const I = icons[i];
              return (
                <div
                  key={t}
                  className="reveal border-b border-slate-200 p-7 sm:border-r lg:border-b-0 lg:last:border-r-0"
                >
                  <I className="h-7 w-7 text-[var(--blue)]" />
                  <h3 className="mt-7 font-[family-name:var(--font-sora)] text-lg font-semibold text-[var(--navy)]">
                    {t}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="nature-photo min-h-[600px] bg-cover bg-center py-24">
        <div className="container-x flex min-h-[450px] items-end">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-xs font-bold tracking-[.22em] text-cyan-100 uppercase">
              A simple standard
            </p>
            <h2 className="font-[family-name:var(--font-sora)] text-5xl font-semibold tracking-[-.05em] sm:text-6xl">
              Every Drop Matters.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/85">
              From production to packaging, every step is focused on delivering
              water you can trust.
            </p>
          </div>
        </div>
      </section> */}

      <CTA />
    </main>
  );
}
