"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Home, Shield, Wrench, Plug, Sun } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
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

      <FeaturesSectie dark />
      <WhyUs />
      <Process />
      <CTABanner dark={false} />
    </main>
  );
}