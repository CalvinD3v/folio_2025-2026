import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CreativityBand from "@/components/CreativityBand";
import EmotionBanner from "@/components/EmotionBanner";
import Collections from "@/components/Collections";
import Offerings from "@/components/Offerings";
import ProjectShowcase from "@/components/ProjectShowcase";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CreativityBand />
        <EmotionBanner />
        <Collections />
        <Offerings />
        <ProjectShowcase />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
