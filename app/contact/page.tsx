import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
export default function Contact() {
  return (
    <main>
      {/* <section className="nature-photo min-h-[500px] bg-cover bg-center">
        <div className="container-x flex min-h-[500px] items-end pb-20">
          <div className="max-w-2xl text-white">
            <p className="mb-5 text-xs font-bold tracking-[.22em] text-cyan-100 uppercase">
              Contact Reindeer Water
            </p>
            <h1 className="font-[family-name:var(--font-sora)] text-5xl font-semibold tracking-[-.05em] sm:text-6xl lg:text-7xl">
              Let&apos;s Talk.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/85">
              Have a question, need a supply enquiry, or want to work with
              Reindeer Water? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section> */}
      {/* Hero */}
      <section className="pattern border-b border-slate-100 bg-white pt-48 pb-28">
        <div className="mx-auto max-w-3xl space-y-4 px-6 text-center md:px-12">
          <span className="text-brand-dark/80 text-xs font-bold tracking-widest uppercase">
            Contact Reindeer Water
          </span>
          <h1 className="font-heading text-brand-teal mt-2 text-4xl font-extrabold md:text-6xl">
            Let&apos;s Talk.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Have a question, need a supply enquiry, or want to work with
            Reindeer Water? We&apos;d love to hear from you.
          </p>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-[1.15fr_.85fr]">
          {/* Form */}
          <div>
            <p className="text-xs font-bold tracking-[.2em] text-[var(--blue)] uppercase">
              Send an enquiry
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-.035em] text-[var(--navy)]">
              Tell us what you need.
            </h2>
            <form className="mt-10 grid gap-5" action="#" method="post">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" name="phone" placeholder="+234 ..." />
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="How can we help?"
                />
              </div>
              <label className="grid gap-2 text-sm font-semibold text-[var(--navy)]">
                Message
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your enquiry..."
                  className="mt-1 resize-none border border-slate-300 bg-white px-4 py-3 text-sm font-normal transition outline-none focus:border-[var(--blue)]"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-[var(--navy)] px-7 py-4 text-sm font-bold text-white transition hover:bg-[var(--blue)]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Aside */}
          <aside className="bg-brand-bg h-fit p-8 lg:p-10">
            <p className="text-xs font-bold tracking-[.2em] text-[var(--blue)] uppercase">
              Find us
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-2xl font-semibold text-[var(--navy)]">
              Reindeer Water
            </h2>
            <div className="mt-9 grid gap-7">
              <Info icon={PhoneIcon} title="Phone" value="+234 8160 015 9559" />
              <Info
                icon={EnvelopeIcon}
                title="Email"
                value="reindeerwater@gmail.com"
              />
              <Info
                icon={MapPinIcon}
                title="Address"
                value="Opp WAYE foundation, Du, Jos South, Plateau, Nigeria"
              />
              <Info
                icon={ClockIcon}
                title="Business hours"
                value="Mon–Sat · 8:00 AM–5:00 PM"
              />
            </div>
            <div className="textsm mt-10 border-t border-slate-200 pt-7 text-center text-xs leading-7 font-bold tracking-widest text-slate-600 uppercase">
              Stay Inspired. Stay Hydrated.
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[var(--navy)]">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1 h-12 border border-slate-300 bg-white px-4 text-sm font-normal transition outline-none focus:border-[var(--blue)]"
      />
    </label>
  );
}
function Info({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white">
        <Icon className="h-5 w-5 text-[var(--blue)]" />
      </span>
      <div>
        <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
          {title}
        </p>
        <p className="mt-1 text-sm leading-6 text-[var(--navy)]">{value}</p>
      </div>
    </div>
  );
}
