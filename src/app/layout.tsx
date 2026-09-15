import type { Metadata } from "next";
import {
  Playfair_Display,
  Archivo_Black,
  Inter,
  Sansation,
  Poppins,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sansation = Sansation({
  variable: "--font-sansation",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Calvin Chou — An Architect",
  description:
    "Calvin Chou's portfolio — building the future of the web from blueprint to code to market.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${archivoBlack.variable} ${inter.variable} ${sansation.variable} ${poppins.variable} ${plusJakarta.variable} antialiased`}
    >
      <body className="bg-cream text-ink font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
