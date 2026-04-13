"use client";
import { motion } from "framer-motion";
import { Phone, FileText, Wrench, CheckCircle } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Neem Contact",
      description: "Bel of mail ons voor een vrijblijvend gesprek over uw project of probleem."
    },
    {
      icon: FileText,
      number: "02",
      title: "Offerte Op Maat",
      description: "Wij komen langs voor een inspectie en stellen een duidelijke offerte op."
    },
    {
      icon: Wrench,
      number: "03",
      title: "Uitvoering",
      description: "Onze monteurs voeren het werk vakkundig en netjes uit."
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Oplevering",
      description: "Wij leveren pas op als everything naar wens is. U krijgt garantie op ons werk."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-[#0d2137]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Hoe Wij Werken</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Van eerste contact tot oplevering - wij zorgen voor een transparant en prettig proces.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-4xl font-bold text-white/30 tabular-nums">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm mt-auto">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/40" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
