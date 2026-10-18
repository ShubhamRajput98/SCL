import { useState } from "react";
import { Menu, X, ArrowUpRight, Boxes } from "lucide-react";
import logo from "../../images/logo.png";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Industries", "#industries"],
  ["Our Process", "#process"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-forest/5 bg-paper/95 backdrop-blur-xl">
      <div className="section-wrap flex h-[76px] items-center justify-between">
        <img src={logo} alt={logo} className="h-14 w-18" />
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-forest/75 transition hover:text-blue-300"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-300"
          >
            Request a quote <ArrowUpRight size={16} />
          </a>
        </nav>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-forest/10 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav
          className="border-t border-forest/10 bg-paper px-5 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-sm font-semibold hover:bg-blue-300/5"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 text-sm font-bold text-white"
          >
            Request a quote <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
