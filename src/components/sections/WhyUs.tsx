"use client";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Award, Users } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      icon: Award,
      title: "Vakmanschap",
      description: "15+ jaar ervaring en gecertificeerde monteurs die garanderen dat elk project aan de hoogste standaarden voldoet."
    },
    {
      icon: Clock,
      title: "Betrouwbaarheid",
      description: "Wij komen onze afspraken na. Op tijd beginnen, op tijd klaar. Geen verrassingen achteraf."
    },
    {
      icon: Users,
      title: "Klantgericht",
      description: "Persoonlijk contact en meedenken over de beste oplossing voor uw situatie en budget."
    },
    {
      icon: CheckCircle,
      title: "Guarantie",
      description: "Op al ons werk krijgt u garantie. Mocht er iets mis gaan, lossen wij het direct op."
    }
  ];

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Waarom SBS Electra?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Wij zijn meer dan alleen een elektrische installateur. Wij zijn uw partner voor veilige, duurzame en innovatieve elektrische oplossingen.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
