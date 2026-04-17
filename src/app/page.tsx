import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Results />
      <Process />
      <Services />
      <FAQ />
      <Footer />
    </main>
  );
}
