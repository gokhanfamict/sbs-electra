export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  faqs: { vraag: string; antwoord: string }[];
  image?: string;
}

export const services: Service[] = [
  { 
    slug: "elektra-aanleg-nieuwbouw", 
    title: "Elektra aanleg nieuwbouw", 
    shortDescription: "Complete elektrische installaties voor nieuwbouwprojecten", 
    description: "Bij nieuwbouwprojecten is een professionele elektrische installatie essentieel. SBS Electra verzorgt de complete elektrische aanleg voor nieubouwwoningen en bedrijfspanden.", 
    benefits: ["Volledige installatie NEN 1010", "Samenwerking met aannemers", "Hoogwaardige materialen"], 
    faqs: [{ vraag: "Hoe lang duurt een installatie?", antwoord: "Gemiddeld 2-4 weken voor een woning." }],
    image: "/images/1. new house electrical wiring.jpg"
  },
  { 
    slug: "elektra-renovatie", 
    title: "Elektra renovatie", 
    shortDescription: "Modernisering van bestaande elektrische installaties", 
    description: "Verouderde bedrading brengt risico's met zich mee. Onze monteurs inspecteren en moderniseren uw installatie.", 
    benefits: ["Veiliger dan verouderde bedrading", "Capaciteit voor moderne apparaten", "Smart home voorbereiding"], 
    faqs: [{ vraag: "Moet ik uit huis?", antwoord: "In de meeste gevallen kunt u gewoon in uw woning blijven." }],
    image: "/images/2. house renovation electrical.jpg"
  },
  { 
    slug: "storingsdienst", 
    title: "Storingsdienst", 
    shortDescription: "24/7 beschikbaar voor spoedreparaties", 
    description: "Elektrische storingen komen altijd onverwacht. Onze 24/7 storingsdienst is snel ter plaatse voor noodsituaties.", 
    benefits: ["24/7 bereikbaar", "Snelle respons", "Gecertificeerde monteurs"], 
    faqs: [{ vraag: "Wat kost de storingsdienst?", antwoord: "Wij hanteren een transparant tarief dat u vooraf wordt meegedeeld." }],
    image: "/images/3. electrician repair switchboard.jpg"
  },
  { 
    slug: "periodieke-keuring", 
    title: "Periodieke keuring (NEN 1010)", 
    shortDescription: "Inspectie en certificering van installaties", 
    description: "Regelmatige inspectie is essentieel voor veiligheid. Wij voeren NEN 1010 keuringen uit voor particulieren en bedrijven.", 
    benefits: ["Gecertificeerde inspecteurs", "NEN 1010 rapport", "Verplicht voor verhuurders"], 
    faqs: [{ vraag: "Hoe vaak moet ik keuren?", antwoord: "Woningen elke 5-10 jaar, bedrijven vaker." }],
    image: "/images/4. electrical inspection.jpg"
  },
  { 
    slug: "laadpalen", 
    title: "Laadpalen", 
    shortDescription: "Installatie van laadpunten voor elektrische auto's", 
    description: "Wij installeren laadpalen en wallboxes voor particulieren en bedrijven met A-merken zoals Wallbox en EVBox.", 
    benefits: ["Advies over beste lader", "Vakkundige installatie", "Subsidieadvies"], 
    faqs: [{ vraag: "Wat is het verschil tussen wallbox en laadpaal?", antwoord: "Wallbox is voor muurmontage thuis, laadpaal is vrijstaand." }],
    image: "/images/5. EV charging station.jpg"
  },
  { 
    slug: "domotica", 
    title: "Domotica / Smart Home", 
    shortDescription: "Slimme huisautomatisering", 
    description: "Domotica verhoogt comfort en helpt energie besparen. Wij adviseren en installeren smart home systemen.", 
    benefits: ["Modulair systeem", "Smartphone bediening", "Energiebesparing"], 
    faqs: [{ vraag: "Is mijn woning geschikt?", antwoord: "Ja, wij kunnen bestaande installaties smart ready maken." }],
    image: "/images/6. smart home technology.jpg"
  },
  { 
    slug: "data-netwerk", 
    title: "Data & Netwerk", 
    shortDescription: "Bekabeling voor internet en netwerken", 
    description: "Een stabiel netwerk is onmisbaar. Wij installeren CAT6a/CAT7 bekabeling voor optimaal netwerk.", 
    benefits: ["CAT6a/CAT7 bekabeling", "Professionele testing", "WiFi-optimalisatie"], 
    faqs: [{ vraag: "Wat is het verschil CAT6 en CAT7?", antwoord: "CAT7 biedt hogere snelheden en betere afscherming." }],
    image: "/images/7. network cable installation.jpg"
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}