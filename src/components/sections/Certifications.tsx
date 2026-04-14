"use client";
import { motion } from "framer-motion";

export function Certifications() {
  const certs = [
    { name: "NEN 3140", desc: "Inspectie elektrische installaties" },
    { name: "NEN 1010", desc: "Elektrische installaties" },
    { name: "VCA", desc: "Veilig werken" },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Onze Certificeringen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Wij zijn gecertificeerd en voldoen aan alle Nederlandse normen en veiligheidsstandaarden.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">{cert.name}</span>
              </div>
              <p className="text-gray-600 text-sm">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
