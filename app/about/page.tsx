import { SectionHeading } from "@/components/SectionHeading";
import { Process } from "@/components/Process";
import Image from "next/image";

import bottle from "@/public/bottle.jpeg";
import {
  CheckBadgeIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import CTA from "@/components/CTA";
const values = [
  {
    title: "Quality",
    desc: "Uncompromised standards in sourcing, filtration, and presentation.",
    icon: CheckBadgeIcon,
  },
  {
    title: "Integrity",
    desc: "Transparent processing and consistent mineral composition.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Hygiene",
    desc: "Automated, untouched handling from filtration to sealed container.",
    icon: SparklesIcon,
  },
  {
    title: "Reliability",
    desc: "Dependable supply logistics for individuals and commercial clients.",
    icon: TruckIcon,
  },
];
export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="pattern border-b border-slate-100 bg-white pt-48 pb-28">
        <div className="mx-auto max-w-3xl space-y-4 px-6 text-center md:px-12">
          <span className="text-brand-600 text-xs font-bold tracking-widest uppercase">
            About Reindeer Water
          </span>
          <h1 className="font-heading text-brand-teal text-4xl font-extrabold md:text-6xl">
            Water You Can Trust.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            A contemporary water brand built around a timeless idea: make clean,
            refreshing water carefully, and make it available when people need
            it.
          </p>
        </div>
      </section>
      {/* <section className="waterphoto min-h[610px] bg-cover bg-center"> */}
      {/* <div className="container-x flex min-h-[610px] items-end pb-20">
        <div className="max-w-3xl text-white">
          <p className="mb-5 text-xs font-bold tracking-[.22em] text-cyan-100 uppercase">
            About Reindeer Water
          </p>
          <h1 className="font-[family-name:var(--font-sora)] text-5xl font-semibold tracking-[-.05em] text-[#1c3a3e] sm:text-6xl lg:text-7xl">
            Water You Can Trust.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85">
            A contemporary water brand built around a timeless idea: make clean,
            refreshing water carefully, and make it available when people need
            it.
          </p>
        </div>
      </div> */}
      {/* </section> */}

      {/* Who We Are */}
      <section className="bg-brand-bg py-24 lg:py-32">
        <div className="container-x lg:gridcols-[1.1fr_.9fr] grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              // eyebrow="Who we are"
              title="Who we are"
              // title="Water is essential. Our standards should be too."
            />
            <div className="space-y-6 text-base leading-8">
              <p>
                Reindeer Water (Established 2022) is a premium water brand that
                fuses creativity and design as a source of inspiration and
                hydration. We are dedicated to providing consumers with the
                highest quality of water, sourced from the sedimentary rocks of
                Plateau.
              </p>
              <p>
                Each bottle of Reindeer is a mark of excellence to the
                brand&apos;s commitment to purity and sustainability. Our
                approach is deliberately straightforward: care about the water,
                care about the process, and care about the people who ultimately
                drink it.
              </p>
            </div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-slate-100">
            <div className="bottle-photo absolute inset-0 bg-cover bg-center" />
          </div>
        </div>
      </section>
      {/* <section className="py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Who we are"
            title="Water is essential. Our standards should be too."
          />
          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              Reindeer Water is a premium water brand that fuses creativity and
              design as a source of inspiration and hydration. We are dedicated
              to providing consumers with the highest quality of water, sourced
              from the sedimentary rocks of Plateau.
            </p>
            <p>
              Each bottle of Reindeer is a mark of excellence to the
              brand&apos;s commitment to purity and sustainability. Our approach
              is deliberately straightforward: care about the water, care about
              the process, and care about the people who ultimately drink it.
            </p>
          </div>
        </div>
      </section> */}

      {/* Our Values */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            centered
            bodyClassname="mt-2"
            title="Our values"
            body="The core principles guiding our bottling standards."
          />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="border-brand-light/60 rounded-xl border bg-white p-8 text-center shadow-sm"
                >
                  <div className="text-brand-teal bg-brand-teal/20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-brand-dark mb-2 text-lg font-bold">
                    {val.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
          {/* <div className="mt-12 grid border-t border-slate-200 md:grid-cols-2">
            {values.map(([t, d], i) => (
              <div
                key={t}
                className="border-b border-slate-200 p-8 md:nth-[odd]:border-r"
              >
                <span className="text-xs font-bold tracking-[.18em] text-[var(--blue)]">
                  0{i + 1}
                </span>
                <h3 className="mt-7 font-[family-name:var(--font-sora)] text-2xl font-semibold text-[var(--navy)]">
                  {t}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                  {d}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-[var(--cream) pt-10 pb-24 lg:pb-32">
        <div className="mx-auto w-full max-w-5xl px-3 lg:px-6">
          <SectionHeading
            centered
            wrapperClassname="max-w-3xl"
            eyebrow="Our commitment"
            title="Quality is not a finishing touch."
            body="It is part of the process. From water treatment and filtration to quality checks and hygienic packaging, we focus on the details that help deliver a consistent product."
          />
          <div className="mt-9 flex items-center justify-center gap-6">
            <p className="border-l-2 border-[var(--blue)] pl-1 text-sm leading-7 text-slate-600">
              Careful treatment
            </p>
            <p className="border-l-2 border-[var(--blue)] pl-1 text-sm leading-7 text-slate-600">
              Controlled filtration
            </p>
            <p className="border-l-2 border-[var(--blue)] pl-1 text-sm leading-7 text-slate-600">
              Quality-focused checks
            </p>
            <p className="border-l-2 border-[var(--blue)] pl-1 text-sm leading-7 text-slate-600">
              Hygienic packaging
            </p>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="bg-[var(--navy)] py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Our production process"
            title="Simple in principle. Serious in practice."
          />
          <div className="mt-12">
            <Process />
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
