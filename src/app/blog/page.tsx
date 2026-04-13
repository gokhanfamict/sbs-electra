import { Footer } from "@/components/layout/Footer";

export const metadata = { title: "Blog | SBS Electra" };

export default function BlogPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary text-center mb-12">Blog</h1>
          <p className="text-center text-gray-600 mb-12">Binnenkort meer artikelen over elektra en veiligheid.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
