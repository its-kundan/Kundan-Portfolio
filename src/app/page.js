// import Image from "next/image";
import Carousal from "@/components/Carousal";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SocialHandles from "@/components/SocialHandles";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div>
      This is my Portfolio.
      <Navigation />
      <Hero />
      <SocialHandles />
      <Projects />
      <Footer />
    </div>
  );
}
