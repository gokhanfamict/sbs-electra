import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { Certifications } from "@/components/sections/Certifications";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <WhyUs />
      <Certifications />
      <Process />
      <Services />
      <Testimonials />
      <CTABanner />
    </>
  );
}
