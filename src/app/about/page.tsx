import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import SkillsGrid from "@/components/SkillsGrid";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const title = "About — Calvin Chou";
const description =
  "Full-stack developer and founder of Codestudio — 9+ years shipping web and mobile products end-to-end.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/about",
    siteName: "Calvin Chou",
    type: "profile",
    images: [{ url: "/images/calvin-about-portrait.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/calvin-about-portrait.jpg"],
  },
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
