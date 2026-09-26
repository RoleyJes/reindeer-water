import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import CustomButton from "./CustomButton";

function CTA() {
  return (
    <section className="bg-brand-bg py-20">
      <div className="container-x flex flex-col items-center justify-between gap-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[.2em] text-[var(--blue)] uppercase">
            Start a conversation
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-.035em] text-[var(--navy)] sm:text-[48px]">
            Ready for Refreshment?
          </h2>
          <p className="mt-3 text-lg text-slate-700">
            Get in touch with Reindeer Water for enquiries, supply, and
            partnerships.
          </p>
        </div>
        <CustomButton label="Contact Us" href="/contact" />
      </div>
    </section>
  );
}

export default CTA;
