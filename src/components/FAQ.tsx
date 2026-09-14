"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const QUESTIONS = [
  {
    q: "What types of furniture do you offer?",
    a: "We specialize in custom-made furniture for living rooms, bedrooms, dining rooms, home offices, and more. From chairs and tables to cabinets and desks, we offer a wide range of options to fit your style and needs.",
  },
  {
    q: "Can I customize the design of my furniture?",
    a: "Yes — every piece can be tailored in dimension, material, and finish to fit your space and taste.",
  },
  {
    q: "How long does it take to complete an order?",
    a: "Most custom builds take between four and eight weeks depending on complexity and material availability.",
  },
  {
    q: "Do you offer delivery and installation?",
    a: "Yes, white-glove delivery and installation is available in all of our service areas.",
  },
  {
    q: "What materials do you use for your furniture?",
    a: "We work with sustainably sourced hardwoods, premium upholstery fabrics, and solid brass or iron hardware.",
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
              label="Showroom"
              className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            />
            <button className="absolute right-5 bottom-5 rounded-full bg-ink px-5 py-2.5 text-xs font-medium tracking-wide text-cream transition-transform hover:scale-105 active:scale-95">
              READ MORE FAQ
            </button>
          </div>
          <div className="mt-6 border-t border-line pt-6">
            <p className="text-xs font-semibold tracking-wide text-faint uppercase">
              Sed Ut Perspiciatis
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
