"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [form, setForm] = useState({ naam: "", email: "", telefoon: "", onderwerp: "", bericht: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log(form); };
  return (
    <main className="pt-20">
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Contact</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Heeft u een vraag of wilt u een offerte? Neem contact op.</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div><label className="block text-sm font-medium mb-2">Naam *</label><Input placeholder="Uw naam" required value={form.naam} onChange={(e) => setForm({...form, naam: e.target.value})} /></div>
                  <div><label className="block text-sm font-medium mb-2">Telefoon</label><Input placeholder="06-12345678" type="tel" value={form.telefoon} onChange={(e) => setForm({...form, telefoon: e.target.value})} /></div>
                </div>
                <div className="mb-4"><label className="block text-sm font-medium mb-2">E-mail *</label><Input placeholder="uw@email.nl" type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} /></div>
                <div className="mb-4"><label className="block text-sm font-medium mb-2">Onderwerp *</label><select className="flex h-11 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm" required value={form.onderwerp} onChange={(e) => setForm({...form, onderwerp: e.target.value})}><option value="">Selecteer</option><option>Offerte aanvragen</option><option>Storingsdienst</option><option>Algemene vraag</option></select></div>
                <div className="mb-6"><label className="block text-sm font-medium mb-2">Bericht *</label><Textarea placeholder="Vertel over uw project..." required value={form.bericht} onChange={(e) => setForm({...form, bericht: e.target.value})} /></div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">Verstuur bericht</Button>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-6">Contactgegevens</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-4"><MapPin className="w-6 h-6 text-accent mt-0.5" /><div><p className="font-medium">Adres</p><p className="text-gray-600">Kastanjelaan 45<br />1161VA Zwanenburg</p></div></li>
                  <li className="flex items-start space-x-4"><Phone className="w-6 h-6 text-accent mt-0.5" /><div><p className="font-medium">Telefoon</p><a href="tel:+31612345678" className="text-gray-600 hover:text-accent">06-12345678</a></div></li>
                  <li className="flex items-start space-x-4"><Mail className="w-6 h-6 text-accent mt-0.5" /><div><p className="font-medium">E-mail</p><a href="mailto:info@sbselectra.nl" className="text-gray-600 hover:text-accent">info@sbselectra.nl</a></div></li>
                  <li className="flex items-start space-x-4"><Clock className="w-6 h-6 text-accent mt-0.5" /><div><p className="font-medium">Openingstijden</p><p className="text-gray-600">Ma-Vr: 8:00 - 18:00<br />Spoed: 24/7</p></div></li>
                </ul>
              </div>
              <div className="bg-primary rounded-2xl p-8 text-center">
                <p className="text-white/80 mb-4">Of bel direct onze storingsdienst</p>
                <a href="tel:+31612345678" className="text-2xl font-bold text-accent">06-12345678</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
