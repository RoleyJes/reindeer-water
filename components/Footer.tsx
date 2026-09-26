import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";
export function Footer() {
  return (
    <footer className="bg-brandteal bg-[#0f2b39 bg-brand-dark text-white/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          {/* <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white font-bold text-[var(--navy)]">
              R
            </span>
            <span className="font-[family-name:var(--font-sora)] text-sm font-bold tracking-[.14em]">
              REINDEER WATER
            </span>
          </div> */}
          <Link href="/" className="flex items-center">
            <div className="flex size-10 items-center justify-center rounded-full md:size-20">
              <Image src={logo} alt="Reindeer logo" className="objectcover" />
            </div>
            <p className="font-heading flex flex-col text-sm font-bold tracking-[.14em] text-white md:text-2xl">
              <span>REINDEER</span>
              <span className="text-xs font-normal tracking-wider text-white md:text-base">
                PURIFIED WATER
              </span>
            </p>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7">
            Clean, refreshing drinking water produced with care for homes,
            businesses, and everyday moments.
          </p>
        </div>
        <div>
          <h3 className="font-heading text-sm font-bold">Explore</h3>
          <div className="mt-5 grid gap-3 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-sm font-bold">Contact</h3>
          <div className="mt-5 grid gap-3 text-sm leading-6">
            <p>+234 8160 015 9559</p>
            <p>reindeerwater@gmail.com</p>
            <p>
              Opp WAYE foundation, Du <br />
              Jos South, Plateau, Nigeria
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-sm font-bold">Stay connected</h3>
          <p className="mt-5 text-sm leading-6">
            Follow Reindeer Water for updates and brand news.
          </p>
          <div className="mt-5 flex gap-2">
            <span className="rounded-full border border-white/15 px-4 py-2 text-xs">
              Instagram
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-xs">
              Facebook
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <span>© 2026 Reindeer Water. All rights reserved.</span>
          <span>Stay Inspired. Stay Hydrated.</span>
        </div>
      </div>
    </footer>
  );
}
