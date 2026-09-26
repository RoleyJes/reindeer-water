import Image, { StaticImageData } from "next/image";
import CustomButton from "./CustomButton";
import { cn } from "@/lib/utils";

type ProductProps = {
  title: string;
  label: string;
  wrapperClassname?: string;
  imageClassname?: string;
  image: string | StaticImageData;
};

export default function Product({
  title,
  label,
  image,
  wrapperClassname,
  imageClassname,
}: ProductProps) {
  return (
    <div
      className={cn(
        "group max-w-[320px] overflow-hidden bg-white",
        wrapperClassname,
      )}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt=""
          className={cn(
            "aspect-3/2 w-full object-cover transition duration-700 group-hover:scale-105",
            imageClassname,
          )}
        />
        <div className="text-brand-teal absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold backdrop-blur">
          {label}
        </div>
      </div>
      <div className="flex items-center justify-between rounded-b-xl border-x border-b border-slate-200 px-5 py-5">
        <h3 className="font-heading text-brand-teal font-semibold">{title}</h3>
        <CustomButton
          label="Buy Now"
          href="/contact"
          size="sm"
          variant="outline"
        />
      </div>
    </div>
  );
}
