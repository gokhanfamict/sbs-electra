import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { CTABanner } from "@/components/sections/CTABanner";

export default function AlgemeneVoorwaardenPage() {
  return (
    <main>
      <PageHero 
        title="Algemene Voorwaarden"
        subtitle="De standaard voorwaarden voor alle diensten van SBS Electra - transparant en eerlijk"
      />
      
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Algemeen</h2>
            <p className="text-gray-600 mb-6">Deze voorwaarden zijn van toepassing op alle overeenkomsten tussen SBS Electra en de opdrachtgever.</p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">2. Offertes</h2>
            <p className="text-gray-600 mb-6">Offertes zijn vrijblijvend en gelden voor 30 dagen na datum van afgifte.</p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">3. Betaling</h2>
            <p className="text-gray-600 mb-6">Betalingstermijn is 14 dagen na factuurdatum. Bij overschrijding van deze termijn wordt 2% rente per maand berekend.</p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">4. Garantie</h2>
            <p className="text-gray-600 mb-6">Op al het uitgevoerde werk wordt minimaal 12 maanden garantie gegeven volgens NEN 3140 norm.</p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">5. Annulering</h2>
            <p className="text-gray-600">Annulering is mogelijk tot 48 uur voor aanvang van de werkzaamheden, tenzij anders overeengekomen.</p>
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
