export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
}

export const projects: Project[] = [
  { slug: "nieuwbouw-woning-amsterdam", title: "Nieuwbouw woning Amsterdam", category: "particulier", description: "Complete elektrische installatie voor een nieuwbouwwoning in Amsterdam." },
  { slug: "kantoorpand-hoofddorp", title: "Kantoorpand Hoofddorp", category: "zakelijk", description: "Elektrische installatie voor een heel kantoorpand inclusief datanetwerken." },
  { slug: "laadpaal-installatie-zaandam", title: "Laadpaal installatie Zaandam", category: "particulier", description: "Installatie van 2 laadpalen voor een woning met twee elektrische auto's." },
  { slug: "renovatie-bedrijfshal", title: "Renovatie bedrijfshal", category: "industrie", description: "Complete renovatie van de elektrische installatie van een bedrijfshal." },
  { slug: "smart-home-utrecht", title: "Smart Home Utrecht", category: "particulier", description: "Domotica installatie voor een complete smart home." },
  { slug: "zonnepanelen-bedrijfspand", title: "Zonnepanelen bedrijfspand", category: "zakelijk", description: "Installatie van 50 zonnepanelen met aansluiting." },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
