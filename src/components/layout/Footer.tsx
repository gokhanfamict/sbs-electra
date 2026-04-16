import Link from "next/link";
import { Zap, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center"><Zap className="w-6 h-6 text-primary" /></div>
              <span className="font-bold text-xl">SBS Electra</span>
            </Link>
            <p className="text-white/70 text-sm mb-6">Betrouwbare elektrotechnische installaties voor woning en bedrijf. Al meer dan 10 jaar uw partner.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-accent"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-white/70 hover:text-accent"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-white/70 hover:text-accent"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6">Snelle Links</h4>
            <ul className="space-y-3">
              {[["Home", "/"], ["Over Ons", "/over-ons"], ["Diensten", "/diensten"], ["Projecten", "/projecten"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-white/70 hover:text-accent text-sm">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6">Diensten</h4>
            <ul className="space-y-3">
              {[["Elektra aanleg", "/diensten/elektra-aanleg-nieuwbouw"], ["Renovatie", "/diensten/elektra-renovatie"], ["Storingsdienst", "/diensten/storingsdienst"], ["Laadpalen", "/diensten/laadpalen"], ["Zonnepanelen", "/diensten/zonnepanelen"]].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-white/70 hover:text-accent text-sm">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3"><MapPin className="w-5 h-5 text-accent mt-0.5" /><span className="text-white/70 text-sm">Kastanjelaan 45<br />1161VA Zwanenburg</span></li>
              <li className="flex items-center space-x-3"><Phone className="w-5 h-5 text-accent" /><a href="tel:+31853696615" className="text-white/70 hover:text-accent text-sm">085-3696615</a></li>
              <li className="flex items-center space-x-3"><Mail className="w-5 h-5 text-accent" /><a href="mailto:info@sbselectra.nl" className="text-white/70 hover:text-accent text-sm">info@sbselectra.nl</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} SBS Electra — KvK: 52904539</p>
            <div className="flex space-x-6">
              <Link href="/privacybeleid" className="text-white/60 hover:text-accent text-sm">Privacybeleid</Link>
              <Link href="/algemene-voorwaarden" className="text-white/60 hover:text-accent text-sm">Algemene Voorwaarden</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
