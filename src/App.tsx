import { motion } from "motion/react";
import { Menu, MessageSquare, ShieldCheck, MapPin, Phone, Clock, Quote, Share2, Instagram, Globe, Home, Scissors, Calendar } from "lucide-react";

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md flex justify-between items-center px-6 py-4 border-b border-outline-variant/10">
    <div className="flex items-center gap-4">
      <Menu className="text-primary w-6 h-6 cursor-pointer" />
      <span className="text-2xl font-headline font-bold tracking-[0.2em] text-primary uppercase">SOVEREIGN</span>
    </div>
    <button className="bg-primary text-on-primary font-body text-[10px] font-bold tracking-widest px-6 py-2 transition-transform duration-200 active:scale-95 hover:bg-primary/90">
      BOOK NOW
    </button>
  </header>
);

const Hero = () => (
  <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        className="w-full h-full object-cover opacity-60" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbwDyuGrGwN7_ExlrY2W7KkrPwOy7fOQEuYEFHn4CTsvS16MhSFbYlevLs4jtS1cQhqoDEoFXwAmVRlJkWRoPw-Ke-V9Dw2x-LAF5v_nruWy4_ZZ_So41wLlVWooHU2_a916vnvfADMqZzZ_u26qGYKux3GNxZScnOmONxA62NyNCXEcl8JbI8e6ZZ-qJ7lusI62oZEHdmMgIdV0jBL78kYZkr3Z8yTrNVWO30Nv47mXAZxHqDQ3BkgFqFEgcSlnC6dvVYKgq-M_xn"
        alt="Barber Shop Interior"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="font-headline text-5xl md:text-7xl mb-6 leading-tight text-shadow-gold">
          Precision <span className="text-primary italic">Grooming</span> for <br/>Modern Men
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-xl font-light leading-relaxed">
          Step into a sanctuary of masculine elegance. Where time-honored techniques meet the surgical precision of the modern master.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-on-primary px-10 py-4 font-body font-extrabold tracking-[0.2em] uppercase text-sm hover:bg-primary/90 transition-colors">
            Book Appointment
          </button>
          <button className="border border-outline-variant bg-surface/50 backdrop-blur-sm text-primary px-10 py-4 font-body font-extrabold tracking-[0.2em] uppercase text-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 group">
            <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Chat on WhatsApp
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { name: "The Signature Cut", price: "$65", desc: "A precision haircut tailored to your head shape and hair texture, finished with a straight-razor neck shave and hot towel.", time: "45 Minutes" },
    { name: "Beard Sculpting", price: "$45", desc: "Expert shaping, trimming, and lining with straight-razor precision, conditioned with organic oud oils.", time: "30 Minutes" },
    { name: "Architectural Fade", price: "$75", desc: "A high-contrast, meticulous fade technique requiring absolute focus and specialized equipment.", time: "60 Minutes" },
    { name: "Sovereign Package", price: "$120", desc: "The ultimate experience. Signature cut, beard sculpting, charcoal facial mask, and an premium beverage.", time: "90 Minutes" },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-primary font-body text-xs tracking-[0.4em] uppercase block mb-4">The Selection</span>
          <h2 className="font-headline text-4xl">Our Essential Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(242, 202, 80, 0.05)" }}
              className="bg-background p-10 group transition-colors cursor-default"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline text-2xl group-hover:text-primary transition-colors">{service.name}</h3>
                <span className="font-headline text-2xl text-primary">{service.price}</span>
              </div>
              <p className="text-on-surface-variant font-light mb-6">{service.desc}</p>
              <span className="text-[10px] font-body tracking-widest text-outline-variant uppercase">{service.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => (
  <section className="py-24">
    <div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-[800px] gap-2 p-2">
      <div className="md:col-span-2 relative overflow-hidden group">
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHrsN5PpOPmbQV_9LVyJVHiNnMWgoQrrhs4XUzb-rqvnrs8qqqlurnSNPc8uBUwbnGWUHhQo4HquLYkXu_IKOX5Dp5CCY92MN4TGHUrK0Nl_TOnOeMJCD56YoIA311aYOJ8wEagz2EXmVe_XL44YsiZjfSQ_55_y-iR2L_uv6ev5OKPDHxurZb9TDraFN2ud7zcZc0liknmwIU7a-lN5z7bdnQnJJ-fqVWsNxB3C8ibFcrw5A4tiZw-yTmAWXTpRTDie3cBOQxl-BD"
          alt="The Sanctuary"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-10 left-10 text-white z-10">
          <h4 className="font-headline text-3xl mb-2">The Sanctuary</h4>
          <p className="font-body text-xs tracking-widest opacity-80">CRAFTED FOR COMFORT</p>
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
      </div>
      <div className="relative overflow-hidden group">
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0l4CdSnDqwrQT8FDXxgrWx4JlTNFKgK5uApfhLR8PlIbhmc4tByeKs-g6cY0KhQXmxybKz7RPIXB2x_SdYi0KK4D5vD0SQh2OobeD1tfEsBE4Bnms1khP3K_SlkTlGz_OJCgIDqdq-d3yN34JME8bqGfNDLs1dDDabkzlsC2tCGRPRybK-I6oXY59XsUAhWC0X-JiDjxhPGbd_5yrcD1TMblx12cvMh3GB_G5r3H9hXybRLJxzRCBmE8-WQG0bnp31ppUh9GYGHiU"
          alt="Barber Tools"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 flex flex-col items-center justify-center p-8 text-center border border-outline-variant/20">
          <ShieldCheck className="w-12 h-12 text-primary mb-6" />
          <h4 className="font-headline text-xl mb-4">Medical Grade Hygiene</h4>
          <p className="text-on-surface-variant text-sm font-light">Every tool is UV-sterilized after every guest. Your safety is our absolute priority.</p>
        </div>
      </div>
      <div className="md:col-span-2 relative overflow-hidden group">
        <img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBep3F2ngk6jS7bUp9MUjYK5IpGT81Og4D9xgY8VYgQtFwGfWbPlnw-gCzsADkkYX7_iniDwJ-vUQylz4QwU9OZwl6gr0CCoAnwlrZ5RRNu8do_xTqsI11PLeq0IYz5bI-WNwl8t9-HpsTYq-nYr_Ix9EjYYVm93zSZhpf2nTdKCyUY26jsX4ir99Ce3JGRilpG_w1OXeOKm7myRLybpqEGTB3uLXy0IUBY7_pImHI4R44_1O_w2vGHscTMk9L9kyqtV-_wV0wF12x1"
          alt="Barber Stations"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Pillars = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-primary font-body text-xs tracking-[0.4em] uppercase block mb-4">The Standard</span>
          <h2 className="font-headline text-5xl mb-12">The Pillars of Sovereignty</h2>
          <div className="space-y-12">
            {[
              { id: "01", title: "Absolute Precision", desc: "We measure in millimeters. Our barbers are trained in architectural cutting techniques to ensure a perfect silhouette." },
              { id: "02", title: "Premium Tools", desc: "Japanese steel shears and bespoke leather strops. We only use the finest instruments in the industry." },
              { id: "03", title: "Expert Barbers", desc: "Our team consists of Master Barbers with a minimum of 10 years experience in luxury grooming." },
              { id: "04", title: "Exclusive Atmosphere", desc: "A private, adults-only environment designed for relaxation and unhurried service." },
            ].map((pillar) => (
              <div key={pillar.id} className="flex gap-6">
                <span className="font-headline text-4xl text-outline-variant/40">{pillar.id}</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">{pillar.title}</h4>
                  <p className="text-on-surface-variant font-light">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-primary/30 z-0"></div>
          <img 
            className="relative z-10 grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-[4/5] object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrRmnB9h6z38JyFwa6gsvlKpSMpVH2fdL79xpwN58JDJOHpvK5O-My59yxNP2MxW3Mv-F5g_TIR1j0XGFi2wfZpOkqsPUIOG12T97QUe8A0JfskDem1ceoeQkCMLQE24eWP7HUOqOvCyPtwLLeSl4bbD6iHI802wNCLWdGsxDtUnWysbeFaiQBDI8rIpEpM3KG1WPEteWr69J8SsntP5qNS-VnN1LYKAOg6KMsjBOr_v35CJvJj6ISqQuchXlZst9qJ3w-ayNMmuXY"
            alt="Master Barber"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-primary/30 z-0"></div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 border-y border-outline-variant/10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { text: "The best haircut I've had in a decade. The attention to detail is truly on another level. It feels like an art gallery for your hair.", author: "JAMES R., EXECUTIVE" },
          { text: "A rare find in the city. Professional, clean, and the grooming packages are worth every penny. The beard sculpt is transformative.", author: "MARCUS T., ARCHITECT" },
          { text: "Sovereign isn't just a barbershop; it's an experience. The atmosphere alone is worth the visit. Highly recommended for any man who cares about his look.", author: "DAVID L., DESIGNER" },
        ].map((t, i) => (
          <div key={i} className="text-center md:text-left">
            <Quote className="text-primary w-10 h-10 mb-6 mx-auto md:mx-0 opacity-50" />
            <p className="font-headline text-xl mb-6 italic leading-relaxed">"{t.text}"</p>
            <span className="font-body text-xs tracking-widest text-outline-variant uppercase">— {t.author}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="font-headline text-4xl mb-8">Visit the Atelier</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-primary w-6 h-6 shrink-0" />
              <div>
                <p className="font-bold mb-1">Location</p>
                <p className="text-on-surface-variant">1221 Heritage Plaza, Suite 400<br/>Central District, London</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-primary w-6 h-6 shrink-0" />
              <div>
                <p className="font-bold mb-1">Phone</p>
                <p className="text-on-surface-variant">+44 20 7946 0123</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-primary w-6 h-6 shrink-0" />
              <div>
                <p className="font-bold mb-1">Hours</p>
                <p className="text-on-surface-variant">Mon - Sat: 09:00 - 20:00<br/>Sun: By Appointment Only</p>
              </div>
            </div>
          </div>
          <div className="mt-12 p-8 bg-surface border border-outline-variant/10">
            <h4 className="font-headline text-xl mb-4">Direct WhatsApp</h4>
            <p className="text-on-surface-variant text-sm mb-6">Need a last minute slot? Chat with our concierge directly for urgent bookings.</p>
            <button className="w-full py-4 bg-[#25D366] text-white font-body font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-colors">
              <MessageSquare className="w-5 h-5" />
              START CHAT
            </button>
          </div>
        </div>
        <div className="lg:col-span-7 h-[500px] grayscale contrast-125 brightness-75 relative group">
          <img 
            className="w-full h-full object-cover opacity-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx56npM1Ul2iWSWXn1mG_91EJJGNfRBjPvAIZds_jsq8jR1m2Z0Ggir0Hz_lQX-HQnQI61cGfjIsP7f-nlTX__q7kUA4ihKSt_R304Pb-0Nn-AvlfUSIses5avHevkQsc-tkX9vONmpZcn5XijX0pukgdMwlLd2GeYUmSpjPAi9dFHojg81AUSEf62FfOWi2IVzBABfgoSNhxQZks3rxfwgRnsuCdmFOQ91X3jhTnBpoymu3qhcYGap4LMgqcRJcPm1k-EnVbhWxa_"
            alt="Location Map"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-12 h-12 bg-primary flex items-center justify-center shadow-2xl"
            >
              <MapPin className="text-on-primary w-6 h-6" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-background py-16 px-6 border-t border-outline-variant/10 flex flex-col items-center gap-8">
    <span className="text-primary font-headline text-3xl font-bold tracking-[0.2em] uppercase">SOVEREIGN</span>
    <div className="flex flex-wrap justify-center gap-10">
      {["PRIVACY", "TERMS", "ACCESSIBILITY"].map((link) => (
        <a key={link} className="text-on-surface font-body text-[10px] tracking-[0.15em] hover:text-primary transition-colors" href="#">{link}</a>
      ))}
    </div>
    <div className="flex gap-6 mt-4">
      <Share2 className="text-outline-variant hover:text-primary cursor-pointer w-5 h-5 transition-colors" />
      <Instagram className="text-outline-variant hover:text-primary cursor-pointer w-5 h-5 transition-colors" />
      <Globe className="text-outline-variant hover:text-primary cursor-pointer w-5 h-5 transition-colors" />
    </div>
    <p className="text-on-surface/50 font-body text-[10px] tracking-[0.15em] mt-4">© 2024 THE SOVEREIGN STANDARD. ALL RIGHTS RESERVED.</p>
  </footer>
);

const MobileNav = () => (
  <nav className="md:hidden fixed bottom-0 w-full z-50 h-16 bg-background/90 backdrop-blur-md flex justify-around items-center border-t border-outline-variant/20">
    <div className="text-primary flex flex-col items-center justify-center">
      <Home className="w-6 h-6" />
    </div>
    <div className="text-on-surface/50 flex flex-col items-center justify-center hover:text-primary transition-colors">
      <Scissors className="w-6 h-6" />
    </div>
    <div className="text-on-surface/50 flex flex-col items-center justify-center hover:text-primary transition-colors">
      <Calendar className="w-6 h-6" />
    </div>
    <div className="text-on-surface/50 flex flex-col items-center justify-center hover:text-primary transition-colors">
      <MessageSquare className="w-6 h-6" />
    </div>
  </nav>
);

const FloatingWhatsApp = () => (
  <motion.a 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-24 right-6 z-40 bg-[#25D366] text-white w-14 h-14 flex items-center justify-center shadow-2xl rounded-full md:rounded-none" 
    href="#"
  >
    <MessageSquare className="w-6 h-6" />
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary selection:text-on-primary">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Gallery />
        <Pillars />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
      <FloatingWhatsApp />
    </div>
  );
}
