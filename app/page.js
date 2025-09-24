import Image from "next/image";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import HomeCarousel from "./components/HomeCarousel";
import WhoWeAre from "./components/WhoWE";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HomeCarousel />
      <Hero />
      <WhoWeAre />
      <ServicesSection />
    </div>
  );
}
