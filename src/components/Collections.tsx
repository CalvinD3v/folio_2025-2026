"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";

type Tab = "design" | "development";

const CONTENT: Record<
  Tab,
  {
    logo: string;
    logoAlt: string;
    preview: string;
    previewAlt: string;
    previewFit: "contain" | "cover";
    previewPosition: string;
    portrait: string;
    portraitAlt: string;
  }
> = {
  design: {
    logo: "/images/nm-logo-light.png",
    logoAlt: "Nontokozo Mangquku brand mark",
    preview: "/images/design-1.png",
    previewAlt: "Nontokozo Mangquku brand mark, dark variant",
    previewFit: "contain",
    previewPosition: "50% 50%",
    portrait: "/images/nontoko-profile.jpg",
    portraitAlt: "Nontokozo Mangquku portrait — design work",
  },
  development: {
    logo: "/images/dev-1.jpg",
    logoAlt: "Nontokozo Mangquku brand mark, dark variant",
    preview: "/images/dev-2.jpg",
    previewAlt: "Nontokozo Mangquku site preview",
    previewFit: "cover",
    previewPosition: "28% 20%",
    portrait: "/images/dev-3.jpg",
    portraitAlt: "Nontokozo Mangquku portrait — development work",
  },
};

const TABS: { key: Tab; label: string }[] = [
  { key: "design", label: "Design Work" },
  { key: "development", label: "Development Work" },
];

export default function Collections() {
  const [tab, setTab] = useState<Tab>("design");
  const content = CONTENT[tab];

  return (
    <section id="collections" className="bg-panel py-20">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="portrait-blob" clipPathUnits="objectBoundingBox">
            <path
              d="M0.056 0
                 L0.894 0
                 Q0.95 0 0.95 0.089
                 L0.95 0.30
                 C0.95 0.32 1 0.4 1 0.5
                 C1 0.6 0.95 0.68 0.95 0.70
                 L0.95 0.911
                 Q0.95 1 0.894 1
                 L0.056 1
                 Q0 1 0 0.911
                 L0 0.089
                 Q0 0 0.056 0
                 Z"
            />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-12">
        <Reveal>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            LATEST COLLECTION
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-6">
            <Reveal
              delay={0.1}
              className="rounded-[2.5rem] rounded-br-[5rem] bg-cream p-8"
            >
              <h3 className="text-sm font-bold tracking-wide text-ink">
                NONTOKOZO MANGQUKU
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                From logo design and brand guidelines to a fully custom
                website, I&apos;ve built and designed a range of projects for
                Nontokozo Mangquku — bringing her brand to life across every
                touchpoint, from first sketch to shipped code.
              </p>
              <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-line bg-panel p-1">
                {TABS.map((t) => {
                  const isActive = t.key === tab;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setTab(t.key)}
                      className="relative rounded-full px-5 py-2.5 text-sm font-medium"
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="collections-toggle"
                          className="absolute inset-0 rounded-full bg-ink"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 35,
                          }}
                        />
                      ) : null}
                      <span
                        className={`relative z-10 transition-colors ${
                          isActive ? "text-cream" : "text-ink"
                        }`}
                      >
                        {t.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <div className="grid grid-cols-[1fr_1.4fr] gap-6">
              <Reveal
                delay={0.15}
                className="relative aspect-[960/748] self-center"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={content.logo}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={content.logo}
                        alt={content.logoAlt}
                        fill
                        sizes="(min-width: 1024px) 20vw, 45vw"
                        className="object-contain object-center transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Reveal>
              <Reveal delay={0.2} className="flex flex-col gap-3">
                <button className="group flex w-fit items-center gap-2 text-sm font-semibold text-ink">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-0.5">
                    <Star className="h-4 w-4 fill-cream" />
                  </span>
                  MOST VALUED CLIENT
                </button>
                <div className="relative min-h-[140px] flex-1 overflow-hidden rounded-[2rem]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={content.preview}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={content.preview}
                        alt={content.previewAlt}
                        fill
                        sizes="(min-width: 1024px) 28vw, 55vw"
                        style={{ objectPosition: content.previewPosition }}
                        className={`transition-transform duration-500 hover:scale-[1.03] ${
                          content.previewFit === "contain"
                            ? "object-contain"
                            : "object-cover"
                        }`}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal
            delay={0.1}
            className="relative min-h-[420px] rounded-[2.5rem] lg:w-[calc(100%+36px)] lg:rounded-none lg:[clip-path:url(#portrait-blob)]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] lg:rounded-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={content.portrait}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={content.portrait}
                    alt={content.portraitAlt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    style={{ objectPosition: "50% 15%" }}
                    className="object-cover transition-transform duration-500 hover:scale-[1.015]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
