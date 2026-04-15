"use client";
import { motion } from "framer-motion";
import { Zap, Users, Shield } from "lucide-react";

export function FeaturesSectie() {
  return (
    <section className="py-16 bg-light">
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
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}