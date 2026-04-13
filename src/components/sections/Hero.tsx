"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Phone, Home, FileCheck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0d2137]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">⚡ Erkend Elektrabedrijf | NEN 1010</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Betrouwbare elektrotechnische<br /><span className="text-accent">installaties</span> voor woning en bedrijf
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Van storingsdienst tot complete nieuwbouwinstallaties — SBS Electra staat voor kwaliteit en vakmanschap.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="default" size="lg" asChild><Link href="/contact">Gratis offerte aanvragen</Link></Button>
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-primary" asChild><Link href="/diensten">Onze diensten</Link></Button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[{ icon: Zap, title: "24/7 Storingsdienst", text: "Altijd bereikbaar bij spoed" }, { icon: Home, title: "Particulier & Zakelijk", text: "Voor elke klus de juiste expertise" }, { icon: FileCheck, title: "NEN 1010 Gecertificeerd", text: "Officieel erkend" }, { icon: Calendar, title: "Gratis Offerte", text: "Vrijblijvend advies" }].map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <f.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-white/60 text-sm">{f.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
