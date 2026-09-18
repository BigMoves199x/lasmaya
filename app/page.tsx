import Image from "next/image";
import Hero from "./components/home/Hero";
import Navbar from "./components/layout/Navbar";
import AboutAward from "./components/home/AboutAward";
import EditionSpotlight from "./components/home/EditionSpotlight";
import AwardJourney from "./components/home/AwardJourney";
import NomineesShowcase from "./components/home/NomineesShowcase";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutAward />
      <EditionSpotlight />
      <AwardJourney/>
      <NomineesShowcase />
      <Footer />

    </main>
  );
}
