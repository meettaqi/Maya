import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Cuisine from "@/components/Cuisine";
import Space from "@/components/Space";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-mayg-charcoal selection:bg-mayg-gold selection:text-mayg-charcoal">
      <Navigation />
      <Hero />
      <Philosophy />
      <Cuisine />
      <Space />
      <Gallery />
      <Reservation />
      <Footer />
    </main>
  );
}
