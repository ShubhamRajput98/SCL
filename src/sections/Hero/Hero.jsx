import { ArrowDownRight, ArrowRight, CheckCircle2, Snowflake } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-forest text-white">
      <div className="absolute -right-40 -top-40 -z-10 h-[540px] w-[540px] rounded-full border border-white/10 sm:h-[700px] sm:w-[700px]" />
      <div className="absolute -right-20 -top-20 -z-10 h-[400px] w-[400px] rounded-full border border-white/10 sm:h-[560px] sm:w-[560px]" />
      <div className="section-wrap grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-mint"><span className="h-2 w-2 rounded-full bg-mint"/> Storage · Logistics · Distribution</div>
          <h1 className="max-w-2xl font-display text-5xl font-extrabold leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-[4.35rem]">Moving your world.<br/><span className="text-mint">Delivering trust.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">Smart, reliable and efficient logistics solutions that keep your business moving. From temperature-controlled storage to coordinated distribution, we help your supply chain move forward.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="primary-btn">Request a quote <ArrowRight size={17}/></a>
            <a href="#services" className="outline-btn">Explore services <ArrowDownRight size={17}/></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-mint"/> Business-focused solutions</span>
            <span className="flex items-center gap-2"><Snowflake size={17} className="text-mint"/> Cold storage capability</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[580px]">
          <div className="absolute -inset-4 rounded-[2rem] border border-white/10"/>
          <div className="relative overflow-hidden rounded-[1.6rem] bg-[#203f3b]">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85" alt="Organized logistics warehouse with goods ready for movement" className="h-[360px] w-full object-cover sm:h-[470px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/10 to-transparent"/>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-end justify-between gap-4">
                <div><p className="text-xs font-bold uppercase tracking-[.18em] text-mint">One connected operation</p><h2 className="mt-2 max-w-xs font-display text-2xl font-bold leading-tight sm:text-3xl">From careful storage to final delivery.</h2></div>
                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mint text-forest sm:flex"><ArrowRight size={25}/></div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl bg-white p-4 text-forest shadow-soft sm:-left-8 sm:p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800"><Snowflake size={24}/></span>
            <span><span className="block text-xs font-semibold text-muted">Temperature-focused</span><span className="mt-1 block font-display text-lg font-extrabold">−20°C storage</span></span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-mint"/>
    </section>
  )
}