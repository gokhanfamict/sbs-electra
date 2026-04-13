"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Over Ons", href: "/over-ons" },
  { label: "Diensten", href: "/diensten" },
  { label: "Projecten", href: "/projecten" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-primary shadow-lg" : "bg-primary/95"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center"><Zap className="w-6 h-6 text-primary" /></div>
            <span className="text-white font-bold text-xl">SBS Electra</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/90 hover:text-accent text-sm font-medium transition-colors">{item.label}</Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+31612345678" className="flex items-center space-x-2 text-white text-sm"><Phone className="w-4 h-4 text-accent" /><span>06-12345678</span></a>
            <Link href="/contact" className="bg-accent text-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors">Offerte Aanvragen</Link>
          </div>
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/90 hover:text-accent font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{item.label}</Link>
            ))}
            <Link href="/contact" className="bg-accent text-primary px-5 py-2.5 rounded-lg font-semibold text-sm text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>Offerte Aanvragen</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
