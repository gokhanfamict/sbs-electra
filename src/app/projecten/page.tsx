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
  "24/7 storingsdienst voor spoedgevallen",
  "Garantie op al ons werk",
];

const projecten = [
  {
    title: "Nieuwbouw Woonhuis Amstelveen",
    description: "Complete elektrische installatie voor een luxe nieuwbouwwoning van 180m².",
    image: "/images/1. new house electrical wiring.jpg",
    category: "Nieuwbouw"
  },
  {
    title: "Renovatie Historisch Pand Amsterdam",
    description: "Modernisering van de elektrische installatie in een monumentaal pand.",
    image: "/images/2. house renovation electrical.jpg",
    category: "Renovatie"
  },
  {
    title: "Storingsdienst Particulier Badhoevedorp",
    description: "Spoedreparatie na stroomuitval bij een woning.",
    image: "/images/3. electrician repair switchboard.jpg",
    category: "Storingsdienst"
  },
  {
    title: "Periodieke Keuring Bedrijfspand",
    description: "NEN 3140 inspectie en certificering voor een zakelijk pand.",
    image: "/images/4. electrical inspection.jpg",
    category: "Keuring"
  },
  {
    title: "Laadpaal Installatie Woonhuis",
    description: "Wallbox installatie voor een elektrische auto.",
    image: "/images/5. EV charging station.jpg",
    category: "Laadpalen"
  },
  {
    title: "Smart Home Integratie",
    description: "Volledige domotica installatie met verlichting en verwarming.",
    image: "/images/6. smart home technology.jpg",
    category: "Domotica"
  },
];

export const metadata = { title: "Projecten | SBS Electra" };

export default function ProjectenPage() {
  return (
    <main>
      <Hero 
        title="Onze Projecten"
        description="Van nieuwbouw tot renovatie - bekijk welke projecten wij de afgelopen jaren hebben gerealiseerd voor tevreden klanten"
        bullets={bullets}
        images={heroImages}
      />
      
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Recente Projecten</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Wij hebben al honderden projecten succesvol afgerond. Hier zijn enkele voorbeelden van ons werk.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projecten.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent/90 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesSectie dark />
      <WhyUs />
      <Process />
      <CTABanner dark={false} />
    </main>
  );
}