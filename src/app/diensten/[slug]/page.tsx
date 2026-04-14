import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, getServiceBySlug } from "@/lib/data/services";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { CTABanner } from "@/components/sections/CTABanner";

export async function generateStaticParams() {
  return services.map((d) => ({ slug: d.slug }));
}

export default function DienstDetailPage({ params }: { params: { slug: string } }) {
  const dienst = getServiceBySlug(params.slug);
  if (!dienst) notFound();
  
  const otherServices = services.filter(s => s.slug !== params.slug).slice(0, 3);
  
  return (
    <main>
      <PageHero 
        title={dienst.title}
        subtitle={dienst.shortDescription}
      />
      
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
              <Link href="/diensten"><Button variant="ghost" className="mb-6 text-primary hover:text-accent"><ArrowLeft className="w-4 h-4 mr-2" />Alle diensten</Button></Link>
              <h1 className="text-4xl font-bold text-primary mb-4">{dienst.title}</h1>
              <p className="text-gray-600 text-lg mb-8">{dienst.description}</p>
              
              <h2 className="text-2xl font-bold text-primary mb-6">Voordelen</h2>
              <ul className="space-y-3 mb-8">
                {dienst.benefits.map((b, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold text-primary mb-6">Veelgestelde vragen</h2>
              {dienst.faqs.map((faq, i) => (
                <div key={i} className="mb-6 p-4 bg-light rounded-xl">
                  <h4 className="font-semibold text-primary mb-2">{faq.vraag}</h4>
                  <p className="text-gray-600 text-sm">{faq.antwoord}</p>
                </div>
              ))}
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white mb-6">
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <p className="text-white/70 text-sm mb-6">Heeft u vragen over deze dienst? Neem contact met ons op.</p>
                <Link href="/contact">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold">Offerte Aanvragen</Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4">Andere diensten</h3>
                <div className="space-y-4">
                  {otherServices.map(s => (
                    <Link key={s.slug} href={`/diensten/${s.slug}`} className="block p-4 bg-light rounded-xl hover:bg-primary/5 transition-colors">
                      <h4 className="font-semibold text-primary text-sm">{s.title}</h4>
                      <p className="text-gray-500 text-xs mt-1">{s.shortDescription}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
      <Process />
      <CTABanner />
      <Footer />
    </main>
  );
}
