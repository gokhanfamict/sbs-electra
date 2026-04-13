"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Elektra probleem? Bel direct!</h2>
          <p className="text-primary/80 mb-6">Onze storingsdienst is 24/7 bereikbaar voor spoedgevallen.</p>
          <a href="tel:+31612345678"><Button variant="secondary" size="lg"><Phone className="w-5 h-5 mr-2" />06-12345678</Button></a>
        </motion.div>
      </div>
    </section>
  );
}
