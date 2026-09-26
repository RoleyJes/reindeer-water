import CustomButton from "../CustomButton";
import { SectionHeading } from "../SectionHeading";

function Promise() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-slate-100">
          <div className="bottle-photo absolute inset-0 bg-cover bg-center" />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
            <p className="text-xs font-bold tracking-widest text-[var(--blue)] uppercase">
              The Reindeer standard
            </p>
            <p className="mt-2 font-[family-name:var(--font-sora)] text-xl font-semibold text-[var(--navy)]">
              Clean starts here.
            </p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Our promise"
            title="Pure by Nature. Trusted by Choice."
            body="Reindeer Water is committed to providing clean, safe, refreshing drinking water through careful production and quality-focused processes. We believe something as essential as water deserves thoughtful attention from source to package."
          />

          <div className="mt-8">
            <CustomButton label="Learn More" href="/about" />
          </div>
          {/* <div className="mt-9 grid gap-4 border-t border-slate-200 pt-7 sm:grid-cols-2">
            <div>
              <p className="font-[family-name:var(--font-sora)] text-3xl font-semibold text-[var(--navy)]">
                01
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Careful production, designed around consistency and hygiene.
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-sora)] text-3xl font-semibold text-[var(--navy)]">
                02
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A straightforward promise: water you can feel good about
                serving.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Promise;
