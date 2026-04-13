"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Home, Shield, Wrench, Plug, Sun } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Onze Diensten</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Van kleine reparatie tot complete installaties - wij hebben de expertise voor elke elektra klus.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((dienst, i) => {
            const iconMap: Record<string, React.ElementType> = { Zap, Home, Shield, Wrench, Plug, Sun };
            const Icon = iconMap[dienst.slug.split("-")[0]] || Zap;
            return (
              <motion.div key={dienst.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-primary mb-3">{dienst.title}</CardTitle>
                    <p className="text-gray-600 text-sm mb-4">{dienst.shortDescription}</p>
                    <Link href={`/diensten/${dienst.slug}`} className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-medium">
                      Meer informatie <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
          <Button variant="default" size="lg" asChild><Link href="/diensten">Bekijk alle diensten</Link></Button>
        </motion.div>
      </div>
    </section>
  );
}
