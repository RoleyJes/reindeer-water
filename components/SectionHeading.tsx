import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
  centered = false,
  wrapperClassname,
  bodyClassname,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  light?: boolean;
  centered?: boolean;
  wrapperClassname?: string;
  bodyClassname?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        wrapperClassname,
      )}
    >
      <p
        className={`mb-4 text-xs font-bold tracking-[.2em] uppercase ${light ? "text-cyan200 text-[#cbe3e5]" : "text[var(--blue)]] text-brand-dark/80"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-[family-name:var(--font-sora)] text-3xl leading-tight font-semibold tracking-[-.035em] capitalize sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-[var(--navy)]"}`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-5 max-w-xl text-base leading-8 text-[#1c3a3e]",
            light && "text[var(--navy)/50] text-[#cbe3e5 text-slate-100",
            centered && "mx-auto",
            bodyClassname,
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
