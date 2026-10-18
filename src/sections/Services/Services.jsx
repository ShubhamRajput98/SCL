import {
  ArrowUpRight,
  Snowflake,
  Warehouse,
  Truck,
  Boxes,
  PackageCheck,
  Navigation,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Snowflake,
    title: "Temperature-Controlled Storage",
    tag: "Cold storage",
    text: "Storage solutions designed for products that require carefully managed low-temperature conditions, including a −20°C storage requirement.",
    tone: "featured",
  },
  {
    number: "02",
    icon: Warehouse,
    title: "Storage & Warehousing",
    tag: "Organized inventory",
    text: "Planned storage and inventory support to help businesses keep goods organized, accessible and ready for the next step.",
    tone: "",
  },
  {
    number: "03",
    icon: Truck,
    title: "Logistics & Transportation",
    tag: "Coordinated movement",
    text: "Practical shipment coordination and transportation planning based on cargo needs, route availability and delivery expectations.",
    tone: "",
  },
  {
    number: "04",
    icon: Boxes,
    title: "Distribution",
    tag: "Supply chain support",
    text: "Distribution coordination that helps move products from storage toward their intended destinations with clear communication.",
    tone: "",
  },
  {
    number: "05",
    icon: PackageCheck,
    title: "Cargo Handling Coordination",
    tag: "Careful handling",
    text: "A considered approach to handling requirements and handovers, aligned with the agreed cargo and operating process.",
    tone: "",
  },
  {
    number: "06",
    icon: Navigation,
    title: "Shipment Planning",
    tag: "End-to-end visibility",
    text: "We understand your shipment details, plan the arrangements and coordinate the next steps with your business requirements in mind.",
    tone: "",
  },
];
export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="section-wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">
              <span className="h-px w-7 bg-emerald-700" /> What we do
            </span>
            <h2 className="section-title max-w-2xl">
              Logistics built around{" "}
              <span className="text-emerald-700">your business.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted md:pb-2">
            A connected approach to storage, logistics and distribution—planned
            around your cargo requirements and operating priorities.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ number, icon: Icon, title, tag, text, tone }) => (
            <article
              key={number}
              className={`group relative overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7 ${tone === "featured" ? "border-forest bg-forest text-white" : "border-forest/8 bg-paper/70 hover:border-emerald-800/20"}`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tone === "featured" ? "bg-mint text-forest" : "bg-white text-forest"}`}
                >
                  <Icon size={23} />
                </span>
                <span
                  className={`font-display text-sm font-extrabold ${tone === "featured" ? "text-mint" : "text-forest/30"}`}
                >
                  {number}
                </span>
              </div>
              <p
                className={`mt-7 text-[10px] font-bold uppercase tracking-[.18em] ${tone === "featured" ? "text-mint" : "text-forest"}`}
              >
                {tag}
              </p>
              <h3 className="mt-2 font-display text-xl font-extrabold leading-snug">
                {title}
              </h3>
              <p
                className={`mt-3 text-sm leading-7 ${tone === "featured" ? "text-white/65" : "text-muted"}`}
              >
                {text}
              </p>
              <a
                href="#contact"
                aria-label={`Enquire about ${title}`}
                className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${tone === "featured" ? "text-mint" : "text-forest"} transition group-hover:gap-3`}
              >
                Discuss this service <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-muted">
          Service details can be refined to match the facilities, routes and
          capabilities confirmed by SCL.
        </p>
      </div>
    </section>
  );
}
