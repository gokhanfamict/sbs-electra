"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTABannerProps {
  dark?: boolean;
}

export function CTABanner({ dark = true }: CTABannerProps) {
  return (
    <section className={`py-20 ${dark ? 'bg-gradient-to-r from-primary via-primary/95 to-primary' : 'bg-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-primary'}`}>
              Klaar om te beginnen?
            </h2>
            <p className={`mb-6 text-lg ${dark ? 'text-white/70' : 'text-gray-600'}`}>
              Of u nu een nieuwe installatie nodig heeft, uw elektrische systeem wilt moderniseren, of te maken heeft met een spoedsituatie - wij staan voor u klaar.
            </p>
            <div className="space-y-4 mb-8">
              <div className={`flex items-center gap-3 ${dark ? 'text-white/80' : 'text-gray-600'}`}>
                <Clock className={`w-5 h-5 ${dark ? 'text-accent' : 'text-primary'}`} />
                <span>24/7 bereikbaar voor spoedgevallen</span>
              </div>
              <div className={`flex items-center gap-3 ${dark ? 'text-white/80' : 'text-gray-600'}`}>
                <Shield className={`w-5 h-5 ${dark ? 'text-accent' : 'text-primary'}`} />
                <span>Vakkundige service met garantie</span>
              </div>
              <div className={`flex items-center gap-3 ${dark ? 'text-white/80' : 'text-gray-600'}`}>
                <Zap className={`w-5 h-5 ${dark ? 'text-accent' : 'text-primary'}`} />
                <span>Eerlijke prijzen, vrijblijvende offerte</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className={`rounded-3xl p-8 ${dark ? 'bg-white/10 backdrop-blur-sm border border-white/20' : 'bg-white shadow-lg'}`}
          >
            <h3 className={`text-xl font-bold mb-6 ${dark ? 'text-white' : 'text-primary'}`}>Neem contact met ons op</h3>
            <div className="space-y-4 mb-6">
              <a href="tel:+31612345678" className={`flex items-center gap-4 ${dark ? 'text-white hover:text-accent' : 'text-primary hover:text-accent'} transition-colors`}>
                <div className={`w-12 h-12 ${dark ? 'bg-accent/20' : 'bg-primary/10'} rounded-xl flex items-center justify-center`}>
                  <Phone className={`w-6 h-6 ${dark ? 'text-accent' : 'text-primary'}`} />
                </div>
                <div>
                  <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-500'}`}>Bel direct</p>
                  <p className="font-semibold">06-12345678</p>
                </div>
              </a>
              <a href="mailto:info@sbselectra.nl" className={`flex items-center gap-4 ${dark ? 'text-white hover:text-accent' : 'text-primary hover:text-accent'} transition-colors`}>
                <div className={`w-12 h-12 ${dark ? 'bg-accent/20' : 'bg-primary/10'} rounded-xl flex items-center justify-center`}>
                  <Mail className={`w-6 h-6 ${dark ? 'text-accent' : 'text-primary'}`} />
                </div>
                <div>
                  <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-500'}`}>E-mail ons</p>
                  <p className="font-semibold">info@sbselectra.nl</p>
                </div>
              </a>
              <div className={`flex items-center gap-4 ${dark ? 'text-white' : 'text-primary'}`}>
                <div className={`w-12 h-12 ${dark ? 'bg-accent/20' : 'bg-primary/10'} rounded-xl flex items-center justify-center`}>
                  <MapPin className={`w-6 h-6 ${dark ? 'text-accent' : 'text-primary'}`} />
                </div>
                <div>
                  <p className={`text-sm ${dark ? 'text-white/60' : 'text-gray-500'}`}>Adres</p>
                  <p className="font-semibold">Kastanjelaan 45, 1161VA Zwanenburg</p>
                </div>
              </div>
            </div>
            <Link href="/contact">
              <Button className={`w-full h-14 font-semibold rounded-xl ${dark ? 'bg-accent hover:bg-accent/90 text-primary' : 'bg-primary hover:bg-primary/90 text-white'}`}>
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