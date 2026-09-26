import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Hero() {
  return (
    <section className="hero-photo min-h-190 bg-cover bg-center bg-no-repeat pt-19">
      <div className="container-x flex min-h-171 items-center">
        <div className="max-w-2xl py-20 text-white">
          <p className="mb-6 text-xs font-bold tracking-[.25em] text-cyan-100 uppercase">
            Reindeer Water
          </p>
          <h1 className="font-[family-name:var(--font-sora)] text-5xl leading-[1.02] font-semibold tracking-[-.055em] sm:text-6xl lg:text-8xl">
            Pure Water.
            <br />
            Simply Better.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
            Clean, refreshing drinking water produced with care for homes,
            businesses, and everyday moments.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--navy)] transition hover:bg-cyan-50"
            >
              Get in Touch{" "}
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Discover Reindeer Water
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
