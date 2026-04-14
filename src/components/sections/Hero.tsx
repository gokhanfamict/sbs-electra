"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Zap, Phone, Home, FileCheck, Calendar, ArrowRight, Shield, Clock, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const heroImages = [
  {
    url: "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space (1).jpg",
    alt: "Elektricien aan het werk"
  },
  {
    url: "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space.jpg",
    alt: "Elektrische installatie"
  },
  {
    url: "/images/engineer-with-blueprints-standing-near-electrical-panel-blue-light-engineer-energy-control.jpg",
    alt: "Engineer bij elektrisch paneel"
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex].url}
            alt={heroImages[currentIndex].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-accent/30">
                <Award className="w-4 h-4" />
                15+ Jaar Ervaring
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Professionele Elektrotechnische <span className="text-accent">Installaties</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 mb-8"
            >
              Van storingsdienst tot complete nieuwbouwprojecten. Wij leveren kwaliteit en betrouwbaarheid voor woning en bedrijf in de regio Amsterdam.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              {[
                { icon: CheckCircle, text: "Erkend installateur met NEN 3140 & NEN 1010" },
                { icon: Clock, text: "24/7 storingsdienst voor spoedgevallen" },
                { icon: Shield, text: "Garantie op al ons werk" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-xl group">
                  Gratis Offerte
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="tel:+31612345678">
                <Button size="lg" className="h-14 px-8 bg-white hover:bg-white/90 text-primary font-semibold rounded-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Bel Direct
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Zap, value: "15+", label: "Jaar Ervaring" },
              { icon: Home, value: "500+", label: "Projecten" },
              { icon: FileCheck, value: "100%", label: "Gecertificeerd" },
              { icon: Calendar, value: "24/7", label: "Bereikbaar" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-accent w-6' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
}
