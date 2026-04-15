"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Home, Shield, Wrench, Plug, Sun } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { Hero } from "@/components/sections/Hero";
import { FeaturesSectie } from "@/components/sections/FeaturesSectie";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { CTABanner } from "@/components/sections/CTABanner";

const heroImages = [
  { url: "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space (1).jpg", alt: "Elektricien aan het werk" },
  { url: "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space.jpg", alt: "Elektrische installatie" },
  { url: "/images/engineer-with-blueprints-standing-near-electrical-panel-blue-light-engineer-energy-control.jpg", alt: "Engineer bij elektrisch paneel" }
];

const bullets = [
  "Van zonnepanelen tot laadpalen",
  "Vakkundige en snelle service",
  "Garantie op al ons werk",
];

export default function DienstenPage() {
  const iconMap: Record<string, React.ElementType> = { Zap, Home, Shield, Wrench, Plug, Sun };
  return (
    <main>
      <Hero 
        title="Onze Diensten"
        description="Elektra aanleg, renovatie, zonnepanelen, laadpalen en meer - wij zijn uw full-service partner voor alle elektrische installaties"
        bullets={bullets}
        images={heroImages}
      />
      
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Wat Wij Doen</h2>
              <p className="text-gray-600 mb-4">
                Bij SBS Electra bent u aan het juiste adres voor alle elektrotechnische werkzaamheden. Van een simpel stopcontact vervangen tot een complete elektrische installatie voor nieuwbouw - wij hebben de expertise en ervaring om elke klus te klaren.
              </p>
              <p className="text-gray-600 mb-4">
                Onze diensten omvatten onder andere elektra aanleg, renovatie van bestaande installaties, de installatie van zonnepanelen en laadpalen, data netwerken en domotica systemen. Wij werken volgens de nieuwste normen en veiligheidsstandaarden.
              </p>
              <p className="text-gray-600 mb-4">
                Elk project pakken wij met dezelfde toewijding en professionaliteit aan. Wij denken graag met u mee over de beste oplossing voor uw situatie en budget. Bij SBS Electra krijgt u gegarandeerd vakwerk geleverd door ervaren monteurs.
              </p>
              <p className="text-gray-600">
                Heeft u een vraag over onze diensten of heeft u een offerte nodig? Neem gerust contact met ons op. Wij staan u graag te woord en helpen u verder met al uw elektrotechnische vragen.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 rounded-2xl z-10" />
              <img 
                src="/images/Overons.jpg" 
                alt="SBS Electra team"
                className="rounded-2xl shadow-xl w-full relative z-0 max-h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 shadow-xl z-20">
                <div className="text-center">
                  <span className="text-4xl font-bold text-accent">8+</span>
                  <p className="text-white text-sm">Diensten</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Projecten" },
              { value: "15+", label: "Jaar Ervaring" },
              { value: "100%", label: "Gecertificeerd" },
              { value: "24/7", label: "Bereikbaar" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <span className="text-3xl font-bold text-primary">{stat.value}</span>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesSectie dark />
      
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Onze Diensten</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Van kleine reparatie tot complete installaties - wij leveren vakwerk voor elke klus.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((dienst, i) => {
              const Icon = iconMap[dienst.slug.split("-")[0]] || Zap;
              return (
                <motion.div 
                  key={dienst.slug} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/diensten/${dienst.slug}`}>
                    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={dienst.image} 
                          alt={dienst.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl text-primary mb-3">{dienst.title}</CardTitle>
                        <p className="text-gray-600 text-sm mb-4">{dienst.shortDescription}</p>
                        <span className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-medium">
                          Meer informatie <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <WhyUs />
      <Process />
      <CTABanner dark={false} />
    </main>
  );
}