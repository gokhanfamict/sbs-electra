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
    image: "https://images.unsplash.com/photo-1508504179250-2b5c39f3a7a4?w=800&q=80"
  },
  { 
    slug: "elektra-renovatie", 
    title: "Elektra renovatie", 
    shortDescription: "Modernisering van bestaande elektrische installaties", 
    description: "Verouderde bedrading brengt risico's met zich mee. Onze monteurs inspecteren en moderniseren uw installatie.", 
    benefits: ["Veiliger dan verouderde bedrading", "Capaciteit voor moderne apparaten", "Smart home voorbereiding"], 
    faqs: [{ vraag: "Moet ik uit huis?", antwoord: "In de meeste gevallen kunt u gewoon in uw woning blijven." }],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a4b5c?w=800&q=80"
  },
  { 
    slug: "storingsdienst", 
    title: "Storingsdienst", 
    shortDescription: "24/7 beschikbaar voor spoedreparaties", 
    description: "Elektrische storingen komen altijd onverwacht. Onze 24/7 storingsdienst is snel ter plaatse voor noodsituaties.", 
    benefits: ["24/7 bereikbaar", "Snelle respons", "Gecertificeerde monteurs"], 
    faqs: [{ vraag: "Wat kost de storingsdienst?", antwoord: "Wij hanteren een transparant tarief dat u vooraf wordt meegedeeld." }],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  { 
    slug: "periodieke-keuring", 
    title: "Periodieke keuring (NEN 1010)", 
    shortDescription: "Inspectie en certificering van installaties", 
    description: "Regelmatige inspectie is essentieel voor veiligheid. Wij voeren NEN 1010 keuringen uit voor particulieren en bedrijven.", 
    benefits: ["Gecertificeerde inspecteurs", "NEN 1010 rapport", "Verplicht voor verhuurders"], 
    faqs: [{ vraag: "Hoe vaak moet ik keuren?", antwoord: "Woningen elke 5-10 jaar, bedrijven vaker." }],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a4b5c?w=800&q=80"
  },
  { 
    slug: "laadpalen", 
    title: "Laadpalen", 
    shortDescription: "Installatie van laadpunten voor elektrische auto's", 
    description: "Wij installeren laadpalen en wallboxes voor particulieren en bedrijven met A-merken zoals Wallbox en EVBox.", 
    benefits: ["Advies over beste lader", "Vakkundige installatie", "Subsidieadvies"], 
    faqs: [{ vraag: "Wat is het verschil tussen wallbox en laadpaal?", antwoord: "Wallbox is voor muurmontage thuis, laadpaal is vrijstaand." }],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80"
  },
  { 
    slug: "zonnepanelen", 
    title: "Zonnepanelen", 
    shortDescription: "Installatie en aansluiting van zonnepanelen", 
    description: "Zonnepanelen zijn een uitstekende investering. Wij installeren complete zonne-energiesystemen.", 
    benefits: ["Complete installatie", "Advies over panelen", "Garantie op werk"], 
    faqs: [{ vraag: "Hoeveel panelen heb ik nodig?", antwoord: "Dat hangt af van uw verbruik. Wij maken een gratis dakscan." }],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
  },
  { 
    slug: "domotica", 
    title: "Domotica / Smart Home", 
    shortDescription: "Slimme huisautomatisering", 
    description: "Domotica verhoogt comfort en helpt energie besparen. Wij adviseren en installeren smart home systemen.", 
    benefits: ["Modulair systeem", "Smartphone bediening", "Energiebesparing"], 
    faqs: [{ vraag: "Is mijn woning geschikt?", antwoord: "Ja, wij kunnen bestaande installaties smart ready maken." }],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  { 
    slug: "data-netwerk", 
    title: "Data & Netwerk", 
    shortDescription: "Bekabeling voor internet en netwerken", 
    description: "Een stabiel netwerk is onmisbaar. Wij installeren CAT6a/CAT7 bekabeling voor optimaal netwerk.", 
    benefits: ["CAT6a/CAT7 bekabeling", "Professionele testing", "WiFi-optimalisatie"], 
    faqs: [{ vraag: "Wat is het verschil CAT6 en CAT7?", antwoord: "CAT7 biedt hogere snelheden en betere afscherming." }],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
