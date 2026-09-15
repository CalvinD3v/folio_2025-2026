import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CreativityBand from "@/components/CreativityBand";
import EmotionBanner from "@/components/EmotionBanner";
import Collections from "@/components/Collections";
// import CustomBuild from "@/components/CustomBuild";
import Offerings from "@/components/Offerings";
// import TrendsBlog from "@/components/TrendsBlog";
import ProjectShowcase from "@/components/ProjectShowcase";
import LatestTrends from "@/components/LatestTrends";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
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
        {/* <CustomBuild /> */}
        <Offerings />
        {/* <TrendsBlog /> */}
        <ProjectShowcase />
        {/* <LatestTrends /> */}
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
