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
  "Updates over elektrotechniek",
  "Tips en tricks voor uw installatie",
  "Veiligheidsadvies en normen",
];

export const metadata = { title: "Blog | SBS Electra" };

export default function BlogPage() {
  return (
    <main>
      <Hero 
        title="Blog & Nieuws"
        description="Blijf op de hoogte van de nieuwste ontwikkelingen in elektrotechniek, veiligheidstips en bedrijfsnieuws van SBS Electra"
        bullets={bullets}
        images={heroImages}
      />
      
      <FeaturesSectie />
      
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Binnenkort Beschikbaar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Wij zijn bezig met het schrijven van interessante artikelen over elektrotechniek, veiligheid en meer.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Hoe herkent u een elektrische storing?", date: "Maart 2026" },
              { title: "Voordelen van zonnepanelen in 2026", date: "Februari 2026" },
              { title: "Waarom periodieke keuring belangrijk is", date: "Januari 2026" },
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-primary/5 rounded-xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-primary/30 text-6xl font-bold">?</span>
                </div>
                <p className="text-sm text-accent mb-2">{post.date}</p>
                <h3 className="text-lg font-bold text-primary mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm">Binnenkort beschikbaar...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <Process />
      <CTABanner />
    </main>
  );
}