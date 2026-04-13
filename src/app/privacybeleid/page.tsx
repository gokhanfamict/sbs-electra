import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";

export default function PrivacybeleidPage() {
  return (
    <main>
      <PageHero 
        title="Privacybeleid"
        subtitle="SBS Electra respecteert uw privacy. Lees hoe wij omgaan met uw persoonsgegevens en welke rechten u heeft"
      />
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-gray-600 mb-4">SBS Electra hecht veel waarde aan de bescherming van uw persoonsgegevens.</p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Verzameling van gegevens</h2>
            <p className="text-gray-600 mb-4">Wij verzamelen persoonsgegevens wanneer u contact met ons opneemt.</p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Uw rechten</h2>
            <p className="text-gray-600">U heeft het recht op inzage, correctie en verwijdering van uw gegevens. Neem contact op via info@sbselectra.nl.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
