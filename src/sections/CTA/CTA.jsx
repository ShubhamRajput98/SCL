import { ArrowRight, MessageCircle } from 'lucide-react'
export default function CTA() {
  return (
    <section className="section-wrap py-12 sm:py-16">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-forest px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
        <div className="absolute -right-12 -top-28 -z-10 h-80 w-80 rounded-full border border-white/10"/><div className="absolute -right-1 -top-16 -z-10 h-60 w-60 rounded-full border border-white/10"/>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div><span className="text-xs font-bold uppercase tracking-[.2em] text-mint">Ready to move forward?</span><h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-[-.04em] sm:text-4xl lg:text-5xl">Let’s move your business forward.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">Tell us about your storage, logistics or distribution requirements. We’ll start with understanding what your business needs.</p></div>
          <a href="#contact" className="primary-btn w-full sm:w-fit">Talk to our team <ArrowRight size={17}/></a>
        </div>
      </div>
    </section>
  )
}