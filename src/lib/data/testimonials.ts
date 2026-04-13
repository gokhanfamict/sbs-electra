export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  { name: "Jan de Vries", location: "Amsterdam", rating: 5, text: "Uitstekende service! SBS Electra heeft onze nieuwbouwwoning voorzien van een complete installatie. Professioneel en binnen de afgesproken tijd." },
  { name: "Familie Bakker", location: "Haarlem", rating: 5, text: "Zeer tevreden over de installatie van onze laadpaal. De monteur legde alles uit en werkte netjes. Ook nog eens een eerlijke prijs." },
  { name: "M. van Dorst", location: "Zwanenburg", rating: 5, text: "Onze bedrijfspand was snel voorzien van een moderne installatie. Correct werk geleverd en hielden rekening met onze planning." },
  { name: "Peter Smit", location: "Amstelveen", rating: 5, text: "SBS Electra heeft bij ons de meterkast vernieuwd. Snelle service en duidelijk rapport. Zullen we zeker weer inschakelen." },
  { name: "Lisa de Groot", location: "Hoofddorp", rating: 5, text: "De storingsdienst was binnen een uur ter plaatse en heeft het probleem snel verholpen. Goede communicatie en eerlijke prijs." },
];
