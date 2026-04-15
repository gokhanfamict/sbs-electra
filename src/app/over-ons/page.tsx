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
  "Erkend installateur met NEN 3140 & NEN 1010",
  "15+ jaar ervaring in elektrotechniek",
  "VCA gecertificeerd en verzekerd",
];

export const metadata = { title: "Over Ons | SBS Electra" };

export default function OverOnsPage() {
  return (
    <main>
      <Hero 
        title="Over SBS Electra"
        description="Uw betrouwbare partner voor elektrotechnische installaties in de regio Amsterdam. Wij staan bekend om onze vakmanschap, betrouwbaarheid en eerlijke prijzen."
        bullets={bullets}
        images={heroImages}
      />
      
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Ons Verhaal</h2>
              <p className="text-gray-600 mb-4">
                SBS Electra is opgericht met een simpele missie: de beste elektrotechnische service bieden voor een eerlijke prijs. Wat begon als een eenmanszaak is gegroeid tot een team van ervaren monteurs die klaar staan voor klussen van elke omvang.
              </p>
              <p className="text-gray-600 mb-4">
                Onze monteurs zijn VCA-gecertificeerd en volgen jaarlijks scholingen om up-to-date te blijven met de nieuwste technieken en veiligheidsnormen. Van NEN 3140 inspecties tot smart home installaties - wij hebben de expertise in huis.
              </p>
              <p className="text-gray-600 mb-4">
                Wij geloven in duurzame relaties met onze klanten. Daarom staan wij bekend om onze betrouwbaarheid, eerlijke prijzen en uitstekende service. Elke opdracht pakken wij aan met dezelfde toewijding, of het nu gaat om een klein reparatietje of een heel nieuwbouwproject.
              </p>
              <p className="text-gray-600">
                Ons werkgebied omvat de gehele regio Amsterdam en omstreken. Wij zijn trots op onze reputatie en werken hard om deze te behouden. Bij SBS Electra bent u verzekerd van vakwerk, eerlijke prijzen en een team dat voor u klaar staat.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 rounded-2xl z-10" />
              <img 
                src="/images/Overons.jpg" 
                alt="SBS Electra team"
                className="rounded-2xl shadow-xl w-full relative z-0 max-h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 shadow-xl z-20">
                <div className="text-center">
                  <span className="text-4xl font-bold text-accent">15+</span>
                  <p className="text-white text-sm">Jaar Ervaring</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      <FeaturesSectie dark />
      <WhyUs />
      <Process />
      <CTABanner dark={false} />
      <Footer />
    </main>
  );
}