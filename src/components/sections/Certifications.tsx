"use client";
import { motion } from "framer-motion";
import { Shield, Award, CheckCircle } from "lucide-react";

export function Certifications() {
  const certs = [
    { name: "NEN 3140", desc: "Inspectie elektrische installaties", icon: CheckCircle },
    { name: "NEN 1010", desc: "Elektrische installaties", icon: Shield },
    { name: "VCA", desc: "Veilig werken", icon: Award },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Onze Certificeringen</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Wij zijn gecertificeerd en voldoen aan alle Nederlandse normen en veiligheidsstandaarden.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 w-full md:w-72 text-center hover:bg-white/15 transition-colors"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-8 h-8 text-accent" />
              </div>
              <span className="text-2xl font-bold text-white block mb-2">{cert.name}</span>
              <p className="text-white/60 text-sm">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
