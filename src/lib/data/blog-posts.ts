export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  { slug: "5-tekenen-elektrische-installatie-vervanging", title: "5 tekenen dat je elektrische installatie aan vervanging toe is", date: "15 maart 2024", category: "Veiligheid", excerpt: "Ontdek of het tijd is voor een upgrade van uw elektrische installatie.", content: "## Waarom een goede installatie belangrijk\n\nEen veilige en moderne elektrische installatie is essentieel voor elk huis.\n\n### 1. Regelmatig doorslaande stoppen\nAls uw stoppen regelmatig doorslaan, is dit een teken dat uw installatie overbelast raakt.\n\n### 2. Verouderde bedrading\nHeeft u een woning van voor 1980? Dan bestaat de kans dat de bedrading nog niet is vernieuwd.\n\n### 3. Geur van verbranding\nEen brandlucht uit stopcontacten is nooit normaal. Schakel direct de stroom uit en neem contact op.\n\n## Wat kunt u doen?\nNeem contact op met SBS Electra voor een gratis inspectie." },
  { slug: "laadpaal-thuis-installeren", title: "Laadpaal thuis installeren: waar moet je op letten?", date: "8 maart 2024", category: "Elektrisch Rijden", excerpt: "Een laadpaal thuis is de perfecte oplossing voor elektrische autoreizen.", content: "## Voordelen van een laadpaal thuis\n\nMet een elektrische auto komt de vraag: hoe en waar laden? Thuis laden is de meest praktische oplossing.\n\n### Welk type kiezen?\nEr zijn verschillende types: wallboxes voor aan de muur en laadpalen die vrijstaand zijn.\n\n### De aansluiting controleren\nVoorafgaand aan installatie controleren wij de elektrische aansluiting in uw meterkast.\n\n### Subsidie\nEr zijn subsidiemogelijkheden voor het installeren van een laadpaal. Vraag ons naar de actuele mogelijkheden." },
  { slug: "wat-kost-periodieke-keuring", title: "Wat kost een periodieke keuring van je elektra?", date: "1 maart 2024", category: "Onderhoud", excerpt: "Een NEN 1010 keuring is belangrijk voor de veiligheid. Maar wat zijn de kosten?", content: "## Waarom periodiek keuren?\n\nElektrische installaties moeten periodiek gekeurd worden om de veiligheid te waarborgen.\n\n### Wat omvat een keuring?\nOnze monteurs inspecteren bedrading, aarding, beveiligingsorganen en verdeelinrichting.\n\n### Kosten indicatie\nEen appartement kost €150-€250, een woonhuis €200-€350.\n\n### Hoe vaak keuren?\nVoor woningen wordt geadviseerd om elke 5-10 jaar te keuren." },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
