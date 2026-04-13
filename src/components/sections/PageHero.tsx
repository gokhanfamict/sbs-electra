"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, Phone, Award, Clock } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  images?: string[];
  showStats?: boolean;
}

export function PageHero({ title, subtitle, description, images, showStats = true }: PageHeroProps) {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const defaultImages = [
    "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space (1).jpg",
    "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space.jpg",
    "/images/engineer-with-blueprints-standing-near-electrical-panel-blue-light-engineer-energy-control.jpg"
  ];

  const heroImages = images || defaultImages;

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {heroImages.length === 1 ? (
          <img
            src={heroImages[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={heroImages[currentIndex]}
              alt={title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-accent/30">
              15+ Jaar Ervaring
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-4"
            >
              {subtitle}
            </motion.p>
          )}

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/70 max-w-xl mx-auto mb-8"
            >
              {description}
            </motion.p>
          )}

          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10"
            >
              {[
                { icon: Award, value: "15+", label: "Jaar Ervaring" },
                { icon: Zap, value: "500+", label: "Projecten" },
                { icon: Clock, value: "24/7", label: "Bereikbaar" },
                { icon: Phone, value: "100%", label: "Gecertificeerd" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-colors">
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {heroImages.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-accent w-6' : 'bg-white/30'}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
