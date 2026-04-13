import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = { title: "Over Ons | SBS Electra" };

export default function OverOnsPage() {
  return (
    <main>
      <PageHero 
        title="Over SBS Electra" 
        subtitle="Uw betrouwbare partner voor elektrotechnische installaties"
      />
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Ons Verhaal</h2>
              <p className="text-gray-600 mb-4">SBS Electra is uw betrouwbare partner voor alle elektrotechnische werkzaamheden. Met jarenlange ervaring en een team van gecertificeerde monteurs staan wij klaar voor zowel particuliere als zakelijke klussen.</p>
              <p className="text-gray-600 mb-4">Van een simpel stopcontact tot een complete nieuwbouwinstallatie - wij leveren vakwerk met aandacht voor detail. Onze monteurs zijn VCA-gecertificeerd en volgen jaarlijks scholingen om up-to-date te blijven met de nieuwste technieken.</p>
              <p className="text-gray-600">Wij geloven in duurzame relaties met onze klanten. Daarom staan wij bekend om onze betrouwbaarheid, eerlijke prijzen en uitstekende service.</p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
                alt="SBS Electra monteur aan het werk"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <span className="text-4xl font-bold text-accent">15+</span>
                  <p className="text-white text-sm">Jaar Ervaring</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: "500+", label: "Projecten" },
              { value: "15+", label: "Jaar Ervaring" },
              { value: "100%", label: "Gecertificeerd" },
              { value: "24/7", label: "Bereikbaar" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <span className="text-3xl font-bold text-primary">{stat.value}</span>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Onze Certificeringen</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "VCA", desc: "Veilig werken" },
                { name: "NEN 1010", desc: "Elektrische norm" },
                { name: "Stek", desc: "Erkend installateur" },
                { name: "REO", desc: "Laadpaal erkend" },
              ].map((cert, i) => (
                <div key={i} className="text-center p-4 border border-gray-100 rounded-xl">
                  <span className="text-xl font-bold text-primary">{cert.name}</span>
                  <p className="text-gray-500 text-xs mt-1">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
