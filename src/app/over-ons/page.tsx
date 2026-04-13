import { Footer } from "@/components/layout/Footer";

export const metadata = { title: "Over Ons | SBS Electra" };

export default function OverOnsPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary text-center mb-12">Over SBS Electra</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Ons Verhaal</h2>
              <p className="text-gray-600 mb-4">SBS Electra is uw betrouwbare partner voor alle elektrotechnische werkzaamheden. Met jarenlange ervaring en een team van gecertificeerde monteurs staan wij klaar voor zowel particuliere als zakelijke klussen.</p>
              <p className="text-gray-600">Van een simpel stopcontact tot een complete nieuwbouwinstallatie - wij leveren vakwerk met aandacht voor detail.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl font-bold text-accent">10+</span></div>
              <p className="text-center font-semibold text-primary">Jaar Ervaring</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
