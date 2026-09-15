"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ParallaxLayer from "./ParallaxLayer";
import Reveal from "./Reveal";

const SLIDES = [
  {
    src: "/images/commission-mapper-1.jpg",
    alt: "Commission Mapper — evidence map, dark theme, entity profile panel",
  },
  {
    src: "/images/commission-mapper-2.jpg",
    alt: "Commission Mapper — evidence map, dark theme, commission overview panel",
  },
  {
    src: "/images/commission-mapper-3.jpg",
    alt: "Commission Mapper — evidence map, light theme, entity profile panel",
  },
  {
    src: "/images/commission-mapper-4.jpg",
    alt: "Commission Mapper — evidence map, light theme, commission overview panel",
  },
];

export default function EmotionBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:px-12">
      <Reveal className="group relative aspect-[21/9] w-full overflow-hidden rounded-2x max-lg:rounded-[3rem]">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <ParallaxLayer strength={50}>
              <Image
                src={SLIDES[index].src}
                alt={SLIDES[index].alt}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </ParallaxLayer>
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-black/0 to-transparent" />

        <div className="absolute top-1/2 left-8 -translate-y-1/2 sm:left-14">
          <p className="font-serif text-2xl text-white sm:text-4xl">
            Commission Mapper,
          </p>
          <p className="font-serif text-2xl text-white/85 italic sm:text-4xl">
            An AI-powered tool for mapping and visualizing commission
            structures.
          </p>
        </div>

        <div className="absolute right-8 bottom-8 flex items-center gap-3 sm:right-14 sm:bottom-10">
          <button
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next slide"
            onClick={() => go(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
