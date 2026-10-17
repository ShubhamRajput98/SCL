import { ArrowUpRight, Boxes, Linkedin, Instagram, Facebook } from 'lucide-react'

const footerLinks = [['Home', '#home'], ['About us', '#about'], ['Services', '#services'], ['Industries', '#industries'], ['Contact', '#contact']]
export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="section-wrap grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_1fr] lg:py-20">
        <div>
          <a href="#home" className="inline-flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-forest"><Boxes size={22}/></span><span className="font-display text-lg font-extrabold">SHATCHANDI <span className="text-mint">LOGISTIC</span></span></a>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">Moving your world with dependable logistics solutions. Professional service, efficient coordination and a customer-first approach to cargo movement.</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => <a key={i} href="#contact" aria-label={['Facebook','Instagram','LinkedIn'][i]} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-mint hover:text-mint"><Icon size={17}/></a>)}
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold">Quick links</h3>
          <ul className="mt-5 space-y-3">{footerLinks.map(([label, href]) => <li key={label}><a className="text-sm text-white/60 transition hover:text-mint" href={href}>{label}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="font-display font-bold">Let’s talk logistics</h3>
          <p className="mt-4 text-sm leading-6 text-white/60">Have a shipment or storage requirement? Tell us what your business needs.</p>
          <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-mint">Start an enquiry <ArrowUpRight size={16}/></a>
          <p className="mt-6 text-xs leading-5 text-white/40">Official email, phone and registered address can be added here once confirmed.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-wrap flex flex-col gap-3 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Shatchandi Logistic Private Limited. All rights reserved.</span>
          <div className="flex gap-5"><a href="#contact" className="hover:text-white">Privacy policy</a><a href="#contact" className="hover:text-white">Terms & conditions</a></div>
        </div>
      </div>
    </footer>
  )
}