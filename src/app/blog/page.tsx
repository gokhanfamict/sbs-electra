import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = { title: "Blog | SBS Electra" };

export default function BlogPage() {
  return (
    <main>
      <PageHero 
        title="Blog & Nieuws"
        subtitle="Blijf op de hoogte van de nieuwste ontwikkelingen in elektrotechniek, veiligheidstips en bedrijfsnieuws van SBS Electra"
      />
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-12">Binnenkort meer artikelen om te lezen.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
