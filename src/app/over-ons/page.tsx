import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";

const heroImages = [
  "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space (1).jpg",
  "/images/electrician-working-switchboard-with-electrical-connection-cable-copy-space.jpg",
  "/images/engineer-with-blueprints-standing-near-electrical-panel-blue-light-engineer-energy-control.jpg"
];

export const metadata = { title: "Over Ons | SBS Electra" };

export default function OverOnsPage() {
  return (
    <main>
      <PageHero 
        title="Over SBS Electra" 
        subtitle="Uw betrouwbare partner voor elektrotechnische installaties"
        images={heroImages}
      />
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Ons Verhaal</h2>
              <p className="text-gray-600 mb-4">
                SBS Electra is opgericht met een simpele missie: de beste elektrotechnische service bieden voor een eerlijke prijs. Wat begon als een eenmanszaak is gegroeid tot een team van ervaren monteurs die klaar staan voor klussen van elke omvang.
              </p>
              <p className="text-gray-600 mb-4">
                Onze monteurs zijn VCA-gecertificeerd en volgen jaarlijks scholingen om up-to-date te blijven met de nieuwste technieken en veiligheidsnormen. Van NEN 1010 inspecties tot smart home installaties - wij hebben de expertise in huis.
              </p>
              <p className="text-gray-600">
                Wij geloven in duurzame relaties met onze klanten. Daarom staan wij bekend om onze betrouwbaarheid, eerlijke prijzen en uitstekende service. Elk project wordt met dezelfde zorg en precisie uitgevoerd, of het nu gaat om een simpel stopcontact of een complete nieuwbouwinstallatie.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/Overons.jpg" 
                alt="SBS Electra team"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <span className="text-4xl font-bold text-accent">15+</span>
                  <p className="text-white text-sm">Jaar Ervaring</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { value: "500+", label: "Projecten" },
              { value: "15+", label: "Jaar Ervaring" },
              { value: "100%", label: "Gecertificeerd" },
              { value: "24/7", label: "Bereikbaar" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                <span className="text-3xl font-bold text-primary">{stat.value}</span>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Onze Certificeringen</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "VCA", desc: "Veilig werken" },
                { name: "NEN 1010", desc: "Elektrische norm" },
                { name: "Stek", desc: "Erkend installateur" },
                { name: "REO", desc: "Laadpaal erkend" },
              ].map((cert, i) => (
                <div key={i} className="text-center p-6 border-2 border-light rounded-xl hover:border-accent transition-colors">
                  <span className="text-2xl font-bold text-primary">{cert.name}</span>
                  <p className="text-gray-500 text-sm mt-2">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-4">Onze Waarden</h3>
              <ul className="space-y-4">
                {[
                  "Veiligheid voorop - geen compromissen",
                  "Eerlijkheid en transparantie",
                  "Kwaliteit in elk detail",
                  "Klanttevredenheid is onze prioriteit"
                ].map((value, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-gray-600">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Werken Bij SBS Electra</h3>
              <p className="text-white/70 mb-6">
                Ben jij een ervaren elektricien of wil je het vak leren? Wij zijn altijd op zoek naar gemotiveerde collega's die willen groeien in hun vak.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Uitstekende arbeidsvoorwaarden</li>
                <li>• Scholings- en opleidingsmogelijkheden</li>
                <li>• Gezellig team met korte lijnen</li>
                <li>• Afwisselende projecten</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
