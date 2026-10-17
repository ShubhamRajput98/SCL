import { BadgeCheck, MessagesSquare, SlidersHorizontal, Handshake, RefreshCw } from 'lucide-react'

const benefits = [
  { icon: BadgeCheck, title: 'A reliability-first mindset', text: 'Careful planning and coordinated processes designed to support dependable cargo movement.' },
  { icon: MessagesSquare, title: 'Clear communication', text: 'Straightforward conversations to help keep your team informed about agreed arrangements.' },
  { icon: SlidersHorizontal, title: 'Flexible solutions', text: 'Logistics planning shaped around your cargo, priorities and practical requirements.' },
  { icon: Handshake, title: 'Customer-focused service', text: 'We take time to understand what your business needs before exploring suitable options.' },
  { icon: RefreshCw, title: 'Continuous improvement', text: 'A commitment to reviewing processes and adapting to changing business requirements.' },
]
export default function WhyChooseUs() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1000&q=85" alt="Freight containers and logistics operations" className="h-[400px] w-full rounded-[2rem] object-cover sm:h-[520px]"/>
          <div className="absolute -bottom-5 right-4 max-w-[260px] rounded-2xl bg-mint p-5 text-forest shadow-soft sm:-right-5 sm:p-6"><p className="font-display text-2xl font-extrabold">Your cargo.</p><p className="font-display text-2xl font-extrabold">Our commitment.</p><p className="mt-2 text-xs leading-5 text-forest/70">Every requirement deserves a thoughtful plan.</p></div>
        </div>
        <div className="pt-3 lg:pt-0">
          <span className="eyebrow"><span className="h-px w-7 bg-emerald-700"/> The SCL difference</span>
          <h2 className="section-title">A dependable partner for every <span className="text-emerald-700">next step.</span></h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted">We understand that every shipment matters. Our approach centers on service, communication and logistics arrangements that align with your business needs.</p>
          <div className="mt-8 space-y-5">
            {benefits.map(({icon: Icon,title,text}) => <div key={title} className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-800 shadow-sm"><Icon size={20}/></span><div><h3 className="font-display text-base font-extrabold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted">{text}</p></div></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}