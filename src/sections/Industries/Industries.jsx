import {
  ShoppingBasket,
  Factory,
  CarFront,
  MonitorSmartphone,
  Building2,
  Store,
  Package,
} from "lucide-react";

const industries = [
  { icon: ShoppingBasket, title: "Retail & e-commerce" },
  { icon: Factory, title: "Manufacturing" },
  { icon: CarFront, title: "Automotive & parts" },
  { icon: MonitorSmartphone, title: "Electronics & technology" },
  { icon: Building2, title: "Construction materials" },
  { icon: Store, title: "Wholesale & distribution" },
  { icon: Package, title: "Consumer goods" },
];
export default function Industries() {
  return (
    <section id="industries" className="section-wrap py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow justify-center">
          <span className="h-px w-7 bg-emerald-700" /> Who we support
        </span>
        <h2 className="section-title">
          Built to support a range of{" "}
          <span className="text-emerald-700">industries.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted">
          We aim to support businesses across sectors with storage, logistics
          and distribution solutions aligned with their requirements.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {industries.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="group flex min-h-[145px] flex-col items-start justify-between rounded-2xl border border-forest/8 bg-white p-5 transition hover:border-emerald-800/30 hover:bg-forest hover:text-white sm:p-6"
          >
            <Icon
              size={25}
              className="text-forest transition group-hover:text-mint"
            />
            <h3 className="mt-6 text-sm font-bold leading-5">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
