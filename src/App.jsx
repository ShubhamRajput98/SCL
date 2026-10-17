import Header from './components/Header/Header'
import Hero from './sections/Hero/Hero'
import TrustStrip from './sections/TrustStrip/TrustStrip'
import About from './sections/About/About'
import Services from './sections/Services/Services'
import WhyChooseUs from './sections/WhyChooseUs/WhyChooseUs'
import Industries from './sections/Industries/Industries'
import Process from './sections/Process/Process'
import CTA from './sections/CTA/CTA'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-paper text-forest">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}