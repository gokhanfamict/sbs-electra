"use client";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Award, Users } from "lucide-react";

interface WhyUsProps {
    dark?: boolean;
}

export function WhyUs({ dark = false }: WhyUsProps) {
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
    <section className={`py-20 ${dark ? 'bg-primary' : 'bg-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-primary'}`}>Waarom SBS Electra?</h2>
          <p className={`max-w-2xl mx-auto ${dark ? 'text-white/70' : 'text-gray-600'}`}>Wij zijn meer dan alleen een elektrische installateur. Wij zijn uw partner voor veilige, duurzame en innovatieve elektrische oplossingen.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center p-6 rounded-2xl ${dark ? 'bg-white/10 border border-white/20 hover:bg-white/15' : 'bg-white hover:shadow-lg'} transition-all`}
            >
              <div className={`w-16 h-16 ${dark ? 'bg-accent/20' : 'bg-primary/10'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <reason.icon className={`w-8 h-8 ${dark ? 'text-accent' : 'text-primary'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-primary'}`}>{reason.title}</h3>
              <p className={`text-sm ${dark ? 'text-white/70' : 'text-gray-600'}`}>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}