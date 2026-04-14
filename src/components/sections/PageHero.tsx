"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle, Shield, Zap, Clock, Award, Users } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  images?: string[];
  showFeatures?: boolean;
}

export function PageHero({ title, subtitle, images, showFeatures = false }: PageHeroProps) {
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

  const features = [
    { icon: CheckCircle, text: "Erkend installateur" },
    { icon: Award, text: "15+ jaar ervaring" },
    { icon: Clock, text: "24/7 bereikbaar" },
    { icon: Shield, text: "VCA gecertificeerd" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[70vh] flex items-center justify-center">
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-12">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8"
              >
                {subtitle}
              </motion.p>
            )}

            {showFeatures && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-10"
              >
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                    <feature.icon className="w-5 h-5 text-accent" />
                    <span className="text-white text-sm font-medium">{feature.text}</span>
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
      </div>

      {showFeatures && (
        <div className="bg-gradient-to-r from-primary via-primary/95 to-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Complete Installaties",
                  description: "Van nieuwbouw tot renovatie, van zonnepanelen tot laadpalen - wij leveren alle elektrotechnische diensten.",
                  icon: Zap
                },
                {
                  title: "Ervaren Specialisten",
                  description: "Onze gecertificeerde monteurs hebben 15+ jaar ervaring en staan garant voor vakwerk.",
                  icon: Users
                },
                {
                  title: "Transparant & Eerlijk",
                  description: "Duidelijke prijzen, geen verborgen kosten. U weet altijd waar u aan toe bent.",
                  icon: Shield
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
