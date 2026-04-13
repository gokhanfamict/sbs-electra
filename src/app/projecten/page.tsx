import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = { title: "Projecten | SBS Electra" };

export default function ProjectenPage() {
  return (
    <main>
      <PageHero 
        title="Onze Projecten" 
        subtitle="Bekijk onze recent voltooide projecten"
      />
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-12">Binnenkort meer projecten om te bekijken.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
