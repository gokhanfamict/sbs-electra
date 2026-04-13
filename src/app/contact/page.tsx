"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Zap, ArrowRight, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/PageHero";

export default function ContactPage() {
  const [form, setForm] = useState({ naam: "", email: "", telefoon: "", onderwerp: "", bericht: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <PageHero 
        title="Neem Contact Op"
        subtitle="Heeft u een vraag of heeft u een offerte nodig? Onze specialisten staan klaar om u te helpen - 24/7 bereikbaar voor spoedgevallen"
      />

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">Bericht Verzonden!</h3>
                    <p className="text-gray-600 mb-6">We nemen binnen 24 uur contact met u op.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">Nieuw bericht sturen</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                    <Button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-xl text-base font-semibold group">
                      Verstuur bericht
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-[#0d2137] rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Adres</p>
                      <p className="text-white/70 text-sm">Kastanjelaan 45<br />1161VA Zwanenburg</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Telefoon</p>
                      <a href="tel:+31612345678" className="text-accent hover:text-accent/80 transition-colors">06-12345678</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">E-mail</p>
                      <a href="mailto:info@sbselectra.nl" className="text-accent hover:text-accent/80 transition-colors">info@sbselectra.nl</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Openingstijden</p>
                      <p className="text-white/70 text-sm">Ma-Vr: 8:00 - 18:00<br />Spoed: 24/7</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 border border-accent/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">Storingsdienst</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Problemen met uw elektrische installatie? Onze spoedservice is 24/7 bereikbaar.</p>
                <a href="tel:+31612345678" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                  06-12345678
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
