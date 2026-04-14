"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Klaar om te beginnen?
            </h2>
            <p className="text-white/70 mb-6 text-lg">
              Of u nu een nieuwe installatie nodig heeft, uw elektrische systeem wilt moderniseren, of te maken heeft met een spoedsituatie - wij staan voor u klaar.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-accent" />
                <span>24/7 bereikbaar voor spoedgevallen</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Shield className="w-5 h-5 text-accent" />
                <span>Vakkundige service met garantie</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Zap className="w-5 h-5 text-accent" />
                <span>Eerlijke prijzen, vrijblijvende offerte</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Neem contact met ons op</h3>
            <div className="space-y-4 mb-6">
              <a href="tel:+31612345678" className="flex items-center gap-4 text-white hover:text-accent transition-colors">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Bel direct</p>
                  <p className="font-semibold">06-12345678</p>
                </div>
              </a>
              <a href="mailto:info@sbselectra.nl" className="flex items-center gap-4 text-white hover:text-accent transition-colors">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/60">E-mail ons</p>
                  <p className="font-semibold">info@sbselectra.nl</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Adres</p>
                  <p className="font-semibold">Kastanjelaan 45, 1161VA Zwanenburg</p>
                </div>
              </div>
            </div>
            <Link href="/contact">
              <Button className="w-full h-14 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-xl">
                Gratis Offerte Aanvragen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
