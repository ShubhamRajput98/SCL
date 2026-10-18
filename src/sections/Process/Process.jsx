import { ClipboardList, Route, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Understand your needs",
    text: "We gather cargo details, origin, destination and delivery expectations.",
  },
  {
    icon: Route,
    num: "02",
    title: "Plan the solution",
    text: "We review the requirements and explore suitable arrangements based on availability.",
  },
  {
    icon: Truck,
    num: "03",
    title: "Coordinate operations",
    text: "We coordinate agreed storage, shipment and relevant handling arrangements.",
  },
  {
    icon: CheckCircle2,
    num: "04",
    title: "Support delivery",
    text: "We focus on communication and delivery coordination through the agreed process.",
  },
];
export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="section-wrap">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-7 bg-emerald-700" /> How we work
          </span>
          <h2 className="section-title">
            A clear process.{" "}
            <span className="text-emerald-700">Connected steps.</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted">
            From the first conversation to delivery coordination, we work to
            keep the process understandable and focused.
          </p>
        </div>
        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[8%] right-[8%] top-7 hidden h-px border-t border-dashed border-forest/20 lg:block" />
          {steps.map(({ icon: Icon, num, title, text }) => (
            <article
              key={num}
              className="relative rounded-3xl border border-forest/8 bg-paper p-6 sm:p-7"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-paper bg-mint text-forest">
                <Icon size={23} />
              </div>
              <p className="mt-7 text-xs font-extrabold tracking-[.16em] text-emerald-800">
                STEP {num}
              </p>
              <h3 className="mt-2 font-display text-lg font-extrabold">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
