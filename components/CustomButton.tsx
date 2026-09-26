import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type BtnSizes = "sm" | "base";
type BtnVariants = "solid" | "outline";

type CustomButtonProps = {
  label: string;
  href: string;
  size?: BtnSizes;
  variant?: BtnVariants;
};

const sizes = {
  sm: "px-4 py-2",
  base: "px-7 py-4",
};

const variants = {
  solid: "bg-brand-teal text-white hover:bg-brand-dark/90",
  outline:
    "border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white",
};

function CustomButton({
  label,
  href,
  size = "base",
  variant = "solid",
}: CustomButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-center gap-2 rounded-full text-sm font-bold transition-all duration-300",
        sizes[size],
        variants[variant],
      )}
    >
      {label}
      <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
    </Link>
  );
}

export default CustomButton;
