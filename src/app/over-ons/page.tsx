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
      
      <FeaturesSectie />
      
      <WhyUs />
      <Process />
      <CTABanner dark={false} />
      <Footer />
    </main>
  );
}