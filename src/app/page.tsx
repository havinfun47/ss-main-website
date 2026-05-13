import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import AgencyFailure from "@/components/AgencyFailure";
import Founder from "@/components/Founder";
import Process from "@/components/Process";
import Services from "@/components/Services";
import FitCheck from "@/components/FitCheck";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Results />
      <AgencyFailure />
      <Founder />
      <Process />
      <Services />
      <FitCheck />
      <FAQ />
      <Footer />
    </main>
  );
}
