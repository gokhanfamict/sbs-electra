import { Footer } from "@/components/layout/Footer";

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h1 className="text-4xl font-bold text-primary mb-8">Algemene Voorwaarden</h1>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Algemeen</h2>
            <p className="text-gray-600 mb-4">Deze voorwaarden zijn van toepassing op alle overeenkomsten tussen SBS Electra en de opdrachtgever.</p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Offertes</h2>
            <p className="text-gray-600 mb-4">Offertes zijn vrijblijvend en gelden voor 30 dagen.</p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Betaling</h2>
            <p className="text-gray-600">Betalingstermijn is 14 dagen na factuurdatum.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
