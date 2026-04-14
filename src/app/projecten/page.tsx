import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { CTABanner } from "@/components/sections/CTABanner";

const projecten = [
  {
    title: "Nieuwbouw Woonhuis Amstelveen",
    description: "Complete elektrische installatie voor een luxe nieuwbouwwoning van 180m².",
    image: "https://images.unsplash.com/photo-1508504179250-2b5c39f3a7a4?w=800&q=80",
    category: "Nieuwbouw"
  },
  {
    title: "Zonnepanelen Installatie Badhoevedorp",
    description: "12 zonnepanelen met hybrid omvormer voor een optimaal rendement.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    category: "Zonnepanelen"
  },
  {
    title: "Laadpaal Bedrijfspand Schiphol-Rijk",
    description: "4 laadpalen voor werknemers en bezoekers van een logistiek bedrijf.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    category: "Laadpalen"
  },
  {
    title: "Renovatie Historisch Pand Amsterdam",
    description: "Modernisering van de elektrische installatie in een monumentaal pand.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a4b5c?w=800&q=80",
    category: "Renovatie"
  },
  {
    title: "Smart Home Integratie Hilversum",
    description: "Volledige domotica installatie met verlichting, verwarming en beveiliging.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Domotica"
  },
  {
    title: "Kantoorpand NEN 3140 Keuring",
    description: "Periodieke inspectie en certificering volgens NEN 3140 norm.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Keuring"
  }
];

export const metadata = { title: "Projecten | SBS Electra" };

export default function ProjectenPage() {
  return (
    <main>
      <PageHero 
        title="Onze Projecten"
        subtitle="Van nieuwbouw tot renovatie - bekijk welke projecten wij de afgelopen jaren hebben gerealiseerd voor tevreden klanten"
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

      <WhyUs />
      <Process />
      <CTABanner />
      <Footer />
    </main>
  );
}
