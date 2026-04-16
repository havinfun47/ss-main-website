import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import PainPoints from "@/components/PainPoints";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <LogoMarquee />
      <PainPoints />
      <Results />
      <Process />
      <Testimonials />
      <Services />
      <Comparison />
      <FAQ />
      <Footer />
    </main>
  );
}
