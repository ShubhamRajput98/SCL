import { ArrowUpRight, Target, Eye, HeartHandshake } from 'lucide-react'

const principles = [
  { icon: Target, title: 'Our mission', text: 'To provide reliable, efficient and customer-oriented logistics solutions that simplify operations and support business success.' },
  { icon: Eye, title: 'Our vision', text: 'To become a trusted logistics partner by building lasting relationships, embracing innovation and pursuing service excellence.' },
  { icon: HeartHandshake, title: 'Our values', text: 'Reliability, integrity, customer commitment, efficiency and continuous improvement guide the way we work.' },
]
export default function About() {
  return (
    <section id="about" className="section-wrap py-20 sm:py-24 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div>
          <span className="eyebrow"><span className="h-px w-7 bg-emerald-700"/> About SCL</span>
          <h2 className="section-title">Delivering more than cargo. <span className="text-emerald-700">Building trust.</span></h2>
          <p className="mt-6 text-base leading-8 text-muted">At Shatchandi Logistic Private Limited, logistics is about creating reliable connections, supporting business growth and giving every shipment the attention it deserves.</p>
          <p className="mt-4 text-base leading-8 text-muted">We focus on practical, customer-first solutions shaped around your requirements—with thoughtful coordination, transparent communication and a commitment to service quality.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 border-b border-forest pb-2 text-sm font-bold transition hover:border-emerald-700 hover:text-emerald-700">Get to know our team <ArrowUpRight size={16}/></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map(({icon: Icon,title,text}, i) => <article key={title} className={`rounded-3xl p-6 sm:p-7 ${i === 0 ? 'bg-forest text-white sm:col-span-2' : 'border border-forest/8 bg-white'}`}>
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${i === 0 ? 'bg-mint text-forest' : 'bg-paper text-emerald-800'}`}><Icon size={22}/></span>
            <h3 className="mt-5 font-display text-xl font-extrabold">{title}</h3>
            <p className={`mt-3 text-sm leading-7 ${i === 0 ? 'text-white/65' : 'text-muted'}`}>{text}</p>
          </article>)}
        </div>
      </div>
    </section>
  )
}