<<<<<<< HEAD
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
=======
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
>>>>>>> 5e38421142a71afe7f4c744c9e143bd58cba2039
  );
}
