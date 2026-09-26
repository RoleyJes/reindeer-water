"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import logo from "@/public/logo.png";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Products", "/products"],
    ["Contact", "/contact"],
  ];
  return (
    <header className="border-[#bdeef5 border-brand-teal fixed inset-x-0 top-8 z-50 mx-auto w-[90%] max-w-250 rounded-full border-4 bg-white/75 backdrop-blur-sm md:w-full">
      <div className="containerx flex h-13 items-center justify-between ps-2 pe-6 md:h-15">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <div className="flex size-10 items-center justify-center rounded-full md:size-20">
            <Image src={logo} alt="Reindeer logo" className="objectcover" />
          </div>
          <p className="flex flex-col font-[family-name:var(--font-sora)] text-sm font-bold tracking-[.14em] text-[var(--navy)] md:text-2xl">
            <span>REINDEER</span>
            <span className="text-xs font-normal tracking-wider text-[var(--navy)] md:text-base">
              PURIFIED WATER
            </span>
          </p>
        </Link>
        {/* Links */}
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-slate-600 transition hover:text-[var(--navy)]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="hover:bg-brand-dark/90 rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-bold text-white transition"
          >
            Get in Touch
          </Link>
        </nav>
        {/* Menu */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-200">
            {open ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </span>
        </button>
      </div>
      {open && (
        <div
          className={cn(
            "absolute top-full mt-8 w-full rounded-lg bg-white shadow-2xl transition-transform duration-300 ease-in md:hidden",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <nav className="container-x flex flex-col py-4">
            {links.map(([label, href]) => (
              <Link
                onClick={() => setOpen(false)}
                key={href}
                href={href}
                className="border-b border-slate-100 py-4 font-semibold text-slate-700"
              >
                {label}
              </Link>
            ))}
            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className="mt-4 rounded-full bg-[var(--navy)] px-5 py-3 text-center font-bold text-white"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
    // <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/85 backdrop-blur-xl">
    //   <div className="container-x flex h-[76px] items-center justify-between">
    //     <Link
    //       href="/"
    //       className="flex items-center gap-3"
    //       onClick={() => setOpen(false)}
    //     >
    //       <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--navy)] text-white">
    //         <span className="text-lg font-semibold">R</span>
    //       </span>
    //       <span className="font-[family-name:var(--font-sora)] text-[15px] font-bold tracking-[.14em] text-[var(--navy)]">
    //         REINDEER{" "}
    //         <span className="font-normal text-[var(--blue)]">WATER</span>
    //       </span>
    //     </Link>
    //     <nav className="hidden items-center gap-9 md:flex">
    //       {links.map(([label, href]) => (
    //         <Link
    //           key={href}
    //           href={href}
    //           className="text-sm font-semibold text-slate-600 transition hover:text-[var(--navy)]"
    //         >
    //           {label}
    //         </Link>
    //       ))}
    //       <Link
    //         href="/contact"
    //         className="rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--blue)]"
    //       >
    //         Get in Touch
    //       </Link>
    //     </nav>
    //     <button
    //       aria-label="Toggle menu"
    //       onClick={() => setOpen(!open)}
    //       className="md:hidden"
    //     >
    //       <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-200">
    //         {open ? (
    //           <XMarkIcon className="h-5 w-5" />
    //         ) : (
    //           <Bars3Icon className="h-5 w-5" />
    //         )}
    //       </span>
    //     </button>
    //   </div>
    //   {open && (
    //     <div className="border-t border-slate-100 bg-white md:hidden">
    //       <nav className="container-x flex flex-col py-4">
    //         {links.map(([label, href]) => (
    //           <Link
    //             onClick={() => setOpen(false)}
    //             key={href}
    //             href={href}
    //             className="border-b border-slate-100 py-4 font-semibold text-slate-700"
    //           >
    //             {label}
    //           </Link>
    //         ))}
    //         <Link
    //           onClick={() => setOpen(false)}
    //           href="/contact"
    //           className="mt-4 rounded-full bg-[var(--navy)] px-5 py-3 text-center font-bold text-white"
    //         >
    //           Get in Touch
    //         </Link>
    //       </nav>
    //     </div>
    //   )}
    // </header>
  );
}
