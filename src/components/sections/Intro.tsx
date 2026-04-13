"use client";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Intro() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Uw Partner voor Elektrotechnische Installaties
            </h2>
            <p className="text-gray-600 mb-4">
              SBS Electra is al meer dan 15 jaar de vertrouwde partner voor particulieren en bedrijven in de regio Amsterdam, Amstelveen en omstreken. Van een simpel stopcontact tot een complete nieuwbouwinstallatie - wij leveren vakwerk met aandacht voor detail.
            </p>
            <p className="text-gray-600 mb-6">
              Onze gecertificeerde monteurs zijn gespecialiseerd in nieuwbouw, renovatie, zonnepanelen, laadpalen en smart home oplossingen. Wij denken mee met u en vinden altijd de beste oplossing voor uw situatie en budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Bel Direct
                </Button>
              </Link>
              <Link href="/over-ons">
                <Button size="lg" variant="outline">
                  Meer over ons
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <span className="text-4xl font-bold text-primary block">500+</span>
              <span className="text-gray-600 text-sm">Tevreden Klanten</span>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <span className="text-4xl font-bold text-primary block">15+</span>
              <span className="text-gray-600 text-sm">Jaar Ervaring</span>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <span className="text-4xl font-bold text-primary block">100%</span>
              <span className="text-gray-600 text-sm">Gecertificeerd</span>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <span className="text-4xl font-bold text-primary block">24/7</span>
              <span className="text-gray-600 text-sm">Storingsdienst</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
