"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Home, Shield, Wrench, Plug, Sun } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";

export default function DienstenPage() {
  const iconMap: Record<string, React.ElementType> = { Zap, Home, Shield, Wrench, Plug, Sun };
  return (
    <main>
      <PageHero 
        title="Onze Diensten"
        subtitle="Elektra aanleg, renovatie, zonnepanelen, laadpalen en meer - wij zijn uw full-service partner voor alle elektrische installaties"
      />
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <Footer />
    </main>
  );
}
