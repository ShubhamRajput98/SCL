import { ShieldCheck, Route, PackageCheck, MessageCircle } from 'lucide-react'
const points = [
  { icon: ShieldCheck, title: 'Reliability first', desc: 'Dependable coordination' },
  { icon: Route, title: 'Connected movement', desc: 'Storage to distribution' },
  { icon: PackageCheck, title: 'Cargo care', desc: 'Planned handling processes' },
  { icon: MessageCircle, title: 'Clear communication', desc: 'Customer-focused support' },
]
export default function TrustStrip() {
  return <section className="border-b border-forest/5 bg-white"><div className="section-wrap grid grid-cols-2 gap-5 py-7 sm:grid-cols-4 sm:gap-4 sm:py-8">{points.map(({icon: Icon,title,desc}) => <div key={title} className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper text-emerald-800"><Icon size={19}/></span><span><span className="block text-sm font-bold">{title}</span><span className="mt-1 block text-xs text-muted">{desc}</span></span></div>)}</div></section>
}