"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, Shield, Clock, Zap, Home, FileCheck, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface HeroProps {
  title?: string;
  description?: string;
  bullets?: string[];
  stats?: { icon: React.ElementType; value: string; label: string }[];
  images?: { url: string; alt: string }[];
}

const defaultImages = [
  { url: "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space (1).jpg", alt: "Elektricien aan het werk" },
  { url: "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space.jpg", alt: "Elektrische installatie" },
  { url: "/images/engineer-with-blueprints-standing-near-electrical-panel-blue-light-engineer-energy-control.jpg", alt: "Engineer bij elektrisch paneel" }
];

const defaultBullets = [
  "Erkend installateur met NEN 3140 & NEN 1010",
  "24/7 storingsdienst voor spoedgevallen",
  "Garantie op al ons werk",
];

const defaultStats = [
  { icon: Zap, value: "15+", label: "Jaar Ervaring" },
  { icon: Home, value: "500+", label: "Projecten" },
  { icon: FileCheck, value: "100%", label: "Gecertificeerd" },
  { icon: Calendar, value: "24/7", label: "Bereikbaar" },
];

export function Hero({ title = "Professionele Elektrotechnische Installaties", description = "Van storingsdienst tot complete nieuwbouwprojecten. Wij leveren kwaliteit en betrouwbaarheid voor woning en bedrijf in de regio Amsterdam.", bullets = defaultBullets, stats = defaultStats, images = defaultImages }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 mb-8"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              {bullets.map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{text}</span>
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
              <Link href="tel:+31853696615">
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
            {stats.map((stat, i) => (
              <div
                key={i}
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
        {images.map((_, i) => (
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