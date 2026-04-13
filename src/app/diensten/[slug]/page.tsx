import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, getServiceBySlug } from "@/lib/data/services";
import { Footer } from "@/components/layout/Footer";

export async function generateStaticParams() {
  return services.map((d) => ({ slug: d.slug }));
}

export default function DienstDetailPage({ params }: { params: { slug: string } }) {
  const dienst = getServiceBySlug(params.slug);
  if (!dienst) notFound();
  return (
    <main className="pt-20">
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/diensten"><Button variant="ghost" className="mb-6"><ArrowLeft className="w-4 h-4 mr-2" />Terug</Button></Link>
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">{dienst.title}</h1>
            <p className="text-gray-600 text-lg mb-8">{dienst.shortDescription}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Omschrijving</h2>
              <p className="text-gray-600 mb-6">{dienst.description}</p>
              <h2 className="text-2xl font-bold text-primary mb-6">Veelgestelde vragen</h2>
              {dienst.faqs.map((faq, i) => (
                <div key={i} className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">{faq.vraag}</h4>
                  <p className="text-gray-600 text-sm">{faq.antwoord}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-6 h-fit">
              <h3 className="text-xl font-bold text-primary mb-6">Voordelen</h3>
              <ul className="space-y-3 mb-6">
                {dienst.benefits.map((b, i) => <li key={i} className="flex items-start space-x-3"><CheckCircle className="w-5 h-5 text-accent mt-0.5" /><span className="text-gray-700 text-sm">{b}</span></li>)}
              </ul>
              <Button variant="default" className="w-full" asChild><Link href="/contact">Offerte aanvragen</Link></Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
