import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import bottles1 from "@/public/bottles.webp";
import bottles2 from "@/public/bottles2.webp";
import bottles3 from "@/public/bottles3.webp";
import Product from "@/components/Products";

function Products() {
  return (
    <>
      {/* Hero */}
      <section className="pattern border-b border-slate-100 bg-white pt-36 pb-12 lg:pt-48 lg:pb-28">
        <div className="mx-auto max-w-3xl space-y-4 px-6 text-center md:px-12">
          <span className="text-brand-600 text-xs font-bold tracking-widest uppercase">
            Our products
          </span>
          <h1 className="font-heading text-brand-teal text-4xl font-extrabold md:text-6xl">
            Made for everyday refreshment.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            From convenient everyday drinking to dependable bulk supply,
            Reindeer Water is built around the moments when good water matters.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="pt-4 pb-12 lg:pt-12 lg:pb-24">
        <div className="container-x">
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            <div className="place-items-center">
              <Product title="75cl × 12" label="Family Pack" image={bottles1} />
            </div>
            <div className="place-items-center">
              <Product title="75cl × 20" label="Bulk Pack" image={bottles2} />
            </div>
            <div className="place-items-center">
              <Product
                title="50cl × 12"
                label="Everyday Pack"
                image={bottles3}
              />
            </div>
            <div className="place-items-center">
              <Product title="50cl × 20" label="Stock Pack" image={bottles1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
