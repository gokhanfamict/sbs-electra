import { Footer } from "@/components/layout/Footer";
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
  "Gratis en vrijblijvend",
  "Binnen 24 uur reactie",
  "Geen verborgen kosten",
];

export default function PrivacybeleidPage() {
  return (
    <main>
      <Hero 
        title="Privacybeleid"
        description="SBS Electra respecteert uw privacy. Lees hoe wij omgaan met uw persoonsgegevens en welke rechten u heeft"
        bullets={bullets}
        images={heroImages}
      />
      
      <FeaturesSectie />
      
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Verzameling van gegevens</h2>
            <p className="text-gray-600 mb-6">Wij verzamelen persoonsgegevens wanneer u contact met ons opneemt via het contactformulier, telefonisch of per e-mail.</p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">2. Gebruik van gegevens</h2>
            <p className="text-gray-600 mb-6">Uw gegevens worden gebruikt om uw aanvraag te behandelen, offertes te verstrekken en contact met u op te nemen.</p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">3. Uw rechten</h2>
            <p className="text-gray-600 mb-6">U heeft het recht op inzage, correctie en verwijdering van uw gegevens. Neem contact op via info@sbselectra.nl.</p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">4. Cookies</h2>
            <p className="text-gray-600">Onze website gebruikt geen cookies voor tracking of marketing doeleinden.</p>
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