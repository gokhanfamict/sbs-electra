"use client";
import { motion } from "framer-motion";
import { Zap, Users, Shield } from "lucide-react";

interface FeaturesSectieProps {
  dark?: boolean;
}

export function FeaturesSectie({ dark = false }: FeaturesSectieProps) {
  return (
    <section className={`py-16 ${dark ? 'bg-primary' : 'bg-light'}`}>
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
              className={`text-center p-6 rounded-2xl ${dark ? 'bg-white/10 border border-white/20' : 'bg-white shadow-sm'} hover:shadow-lg transition-shadow`}
            >
              <div className={`w-16 h-16 ${dark ? 'bg-accent/20' : 'bg-primary/10'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className={`w-8 h-8 ${dark ? 'text-accent' : 'text-primary'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-primary'}`}>{feature.title}</h3>
              <p className={dark ? 'text-white/70' : 'text-gray-600'}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}