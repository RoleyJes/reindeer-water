import Link from "next/link";
import { SectionHeading } from "../SectionHeading";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Product from "../Products";

import bottles1 from "@/public/bottles.webp";
import bottles2 from "@/public/bottles2.webp";
import bottles3 from "@/public/bottles3.webp";
import CustomButton from "../CustomButton";

function Products() {
  return (
    // <section className="bg-[#f2fbff bg-[#f4f8f8] py-24 lg:py-32">
    //   <div className="container-x">
    //     <SectionHeading
    //       eyebrow="Our products"
    //       title="Made for everyday refreshment."
    //       body="From convenient everyday drinking to dependable bulk supply, Reindeer Water is built around the moments when good water matters."
    //     />
    //     <div className="mt-12 grid gap-5 md:grid-cols-3">
    //       <Product
    //         title="Sachet Water"
    //         label="Everyday"
    //         image="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=85"
    //       />
    //       <Product
    //         title="Bottled Water"
    //         label="On the go"
    //         image="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=85"
    //       />
    //       <Product
    //         title="Bulk / Wholesale"
    //         label="For business"
    //         image="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=85"
    //       />
    //     </div>
    //     <div className="mt-10">
    //       <Link
    //         href="/products"
    //         className="group inline-flex items-center gap-2 border-b border-[var(--navy)] pb-1 text-sm font-bold text-[var(--navy)]"
    //       >
    //         View Our Products{" "}
    //         <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <section className="pt-4 pb-12 lg:pt-12 lg:pb-24">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our products"
              title="Made for everyday refreshment."
              body="From convenient everyday drinking to dependable bulk supply, Reindeer Water is built around the moments when good water matters."
            />

            <div className="mt-8">
              <CustomButton label="View Products" href="/products" />
            </div>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-5">
            <div className="place-items-center">
              <Product
                imageClassname="aspect-3/1.5"
                title="75cl × 12"
                label="Family Pack"
                image={bottles1}
              />
            </div>
            <div className="place-items-center">
              <Product
                imageClassname="aspect-3/1.5"
                title="75cl × 20"
                label="Bulk Pack"
                image={bottles2}
              />
            </div>
            <div className="place-items-center">
              <Product
                imageClassname="aspect-3/1.5"
                title="50cl × 12"
                label="Everyday Pack"
                image={bottles3}
              />
            </div>
            <div className="place-items-center">
              <Product
                imageClassname="aspect-3/1.5"
                title="50cl × 20"
                label="Stock Pack"
                image={bottles1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function Product({
//   title,
//   label,
//   image,
// }: {
//   title: string;
//   label: string;
//   image: string;
// }) {
//   return (
//     <div className="group overflow-hidden bg-white">
//       <div className="relative aspect-[4/4.5] overflow-hidden">
//         <img
//           src={image}
//           alt=""
//           className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//         />
//         <div className="absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[var(--navy)] backdrop-blur">
//           {label}
//         </div>
//       </div>
//       <div className="flex items-center justify-between border-x border-b border-slate-200 px-5 py-5">
//         <h3 className="font-[family-name:var(--font-sora)] font-semibold text-[var(--navy)]">
//           {title}
//         </h3>
//         <ArrowRightIcon className="h-4 w-4 text-[var(--blue)]" />
//       </div>
//     </div>
//   );
// }

export default Products;
