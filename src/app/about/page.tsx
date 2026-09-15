import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import SkillsGrid from "@/components/SkillsGrid";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Calvin Chou",
  description:
    "Full-stack developer and founder of Codestudio — 9+ years shipping web and mobile products end-to-end.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <SkillsGrid />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
