"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const QUESTIONS = [
  {
    q: "What do you actually do?",
    a: "I'm a full-stack developer and digital agency founder — 9+ years shipping web and mobile products end-to-end, from .NET and Node.js APIs through React, Next.js, Nuxt, and React Native interfaces.",
  },
  {
    q: "What is Codestudio?",
    a: "The full-service digital agency I founded in 2017. I ran it alongside senior engineering roles for eight years before going full-time on it in 2025 — brand, design, hosting, and software for SMB clients across South Africa and abroad.",
  },
  {
    q: "What's your stack?",
    a: "React, Next.js, Nuxt.js, Vue, TypeScript, and Tailwind on the front end; .NET (C#), Node.js, and GraphQL/REST on the back end; React Native for mobile. Plus Figma, Illustrator, and Photoshop for brand and UX/UI work.",
  },
  {
    q: "Do you only write code, or design too?",
    a: "Both, end to end — user research and wireframes through high-fidelity Figma prototypes, then the pixel-accurate build. Brand identities, style guides, and social/print collateral too.",
  },
  {
    q: "Can you help with hosting and infrastructure as well?",
    a: "Yes — domains, managed hosting, DNS, SSL, deployments, monitoring, and uptime SLAs are part of the same integrated package, alongside Azure DevOps and Docker experience from running production platforms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-12">
      <Reveal>
        <h2 className="font-serif text-4xl text-ink sm:text-5xl">
          Frequently Asked Questions
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <RevealGroup stagger={0.06} className="flex flex-col gap-4">
          {QUESTIONS.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <RevealItem key={item.q}>
                <div className="rounded-2xl border border-line px-6 py-5 transition-colors hover:border-ink/30">
                  <button
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-sm font-medium text-ink sm:text-base">
                      {item.q}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink">
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" />
                        ) : (
                          <Plus className="h-3.5 w-3.5" />
                        )}
                      </motion.span>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm leading-relaxed text-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.15}>
          <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <PlaceholderImage
              palette="ink"
              label="At Work"
              className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            />
            <a
              href="/about"
              className="absolute right-5 bottom-5 rounded-full bg-ink px-5 py-2.5 text-xs font-medium tracking-wide text-cream transition-transform hover:scale-105 active:scale-95"
            >
              MORE ABOUT ME
            </a>
          </div>
          <div className="mt-6 border-t border-line pt-6">
            <p className="text-xs font-semibold tracking-wide text-faint uppercase">
              Founder · Codestudio
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Running Codestudio since 2017, I&apos;ve helped small and
              mid-sized businesses grow through brand, design, hosting, and
              software — comfortable wearing every hat in the room, from
              writing the code to designing the UX to managing the
              infrastructure underneath it all.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
