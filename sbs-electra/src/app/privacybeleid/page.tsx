import { Footer } from "@/components/layout/Footer";

export default function PrivacybeleidPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h1 className="text-4xl font-bold text-primary mb-8">Privacybeleid</h1>
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
