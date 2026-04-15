'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Zap, ArrowRight, Send, Shield, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/Hero";
import { FeaturesSectie } from "@/components/sections/FeaturesSectie";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { CTABanner } from "@/components/sections/CTABanner";

const heroImages = [
  { url: "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space (1).jpg", alt: "Elektricien aan het werk" },
  { url: "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space.jpg", alt: "Elektrische installatie" },
  { url: "/images/engineer-with-blueprints-standing-near-electrical-panel-blue-light-engineer-energy-control.jpg", alt: "Engineer bij elektrisch paneel" }
];

const bullets = [
  "Gratis en vrijblijvende offerte",
  "Binnen 24 uur reactie",
  "Geen verborgen kosten",
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpwzgqvn';

export default function ContactPage() {
  const [form, setForm] = useState({ naam: "", email: "", telefoon: "", onderwerp: "", bericht: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          naam: form.naam,
          email: form.email,
          telefoon: form.telefoon,
          onderwerp: form.onderwerp,
          bericht: form.bericht
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
        setForm({ naam: "", email: "", telefoon: "", onderwerp: "", bericht: "" });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Hero 
        title="Neem Contact Op"
        description="Heeft u een vraag of heeft u een offerte nodig? Onze specialisten staan klaar om u te helpen - 24/7 bereikbaar voor spoedgevallen"
        bullets={bullets}
        images={heroImages}
      />

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold text-primary mb-6">Stuur ons een bericht</h2>
              <p className="text-gray-600 mb-8">Vul het formulier in en wij nemen zo snel mogelijk contact met u op.</p>
              
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-8 shadow-xl text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Bericht Verzonden!</h3>
                  <p className="text-gray-600 mb-6">We nemen binnen 24 uur contact met u op.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">Nieuw bericht sturen</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Naam *</label>
                      <Input placeholder="Jan de Vries" required value={form.naam} onChange={(e) => setForm({...form, naam: e.target.value})} className="h-12 rounded-xl border-gray-200 focus:border-accent focus:ring-accent/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Telefoon</label>
                      <Input placeholder="06-12345678" type="tel" value={form.telefoon} onChange={(e) => setForm({...form, telefoon: e.target.value})} className="h-12 rounded-xl border-gray-200 focus:border-accent focus:ring-accent/20" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">E-mail *</label>
                    <Input placeholder="jan@voorbeeld.nl" type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="h-12 rounded-xl border-gray-200 focus:border-accent focus:ring-accent/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Onderwerp *</label>
                    <select required value={form.onderwerp} onChange={(e) => setForm({...form, onderwerp: e.target.value})} className="flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm focus:border-accent focus:ring-accent/20">
                      <option value="">Waar kunnen we mee helpen?</option>
                      <option>Offerte aanvragen</option>
                      <option>Storingsdienst</option>
                      <option>Algemene vraag</option>
                      <option>Samenwerking</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Bericht *</label>
                    <Textarea placeholder="Vertel ons over uw project of vraag..." required value={form.bericht} onChange={(e) => setForm({...form, bericht: e.target.value})} className="min-h-[140px] rounded-xl border-gray-200 focus:border-accent focus:ring-accent/20 resize-none" />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full h-14 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-xl group disabled:opacity-50">
                    {loading ? 'Verzenden...' : 'Verstuur bericht'}
                    {!loading && <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-primary mb-6">Contact Informatie</h2>
              <p className="text-gray-600 mb-8">U kunt ons ook direct bereiken via onderstaande gegevens.</p>
              
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-white mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Adres</p>
                      <p className="text-white/70">Kastanjelaan 45<br />1161VA Zwanenburg</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Telefoon</p>
                      <a href="tel:+31612345678" className="text-accent hover:text-accent/80 transition-colors">06-12345678</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <a href="mailto:info@sbselectra.nl" className="text-accent hover:text-accent/80 transition-colors">info@sbselectra.nl</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Openingstijden</p>
                      <p className="text-white/70">Ma-Vr: 8:00 - 18:00<br />Spoed: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">Storingsdienst</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Problemen met uw elektrische installatie? Onze spoedservice is 24/7 bereikbaar.</p>
                <a href="tel:+31612345678" className="inline-flex items-center gap-2 text-accent font-bold hover:text-accent/80 transition-colors">
                  06-12345678
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturesSectie dark />
      <WhyUs />
      <Process />
      <CTABanner dark={false} />
    </main>
  );
}