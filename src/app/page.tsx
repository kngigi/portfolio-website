import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] scroll-smooth ">
      <Navbar />
      <div className="container mx-auto py-4 px-12">
        <div className="pt-16">
          <HeroSection />
        </div>
        <div id="about" className="pt-32">
          <AboutSection />
        </div>
        <div id="projects" className="pt-32">
          <ProjectSection />
        </div>

        <div id="contact" className="pt-32">
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
