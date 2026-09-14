"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "Absolutely love the quality and design! The chair is not only stylish but also incredibly comfortable. Seamless customer service.",
    name: "Amanda Reyes",
  },
  {
    quote:
      "Excellent service and stunning design. The product looks even better in person and adds so much character to our living space.",
    name: "Sarah Whitfield",
  },
  {
    quote:
      "The craftsmanship is outstanding. Every detail feels intentional, and the piece has become the centerpiece of our home.",
    name: "Laura Kim",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const pair = [REVIEWS[index % REVIEWS.length], REVIEWS[(index + 1) % REVIEWS.length]];

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-12">
      <Reveal className="text-center">
        <p className="text-xs font-semibold tracking-widest text-faint uppercase">
          Testimonial
        </p>
        <h2 className="mt-2 font-serif text-4xl text-ink sm:text-5xl">
          What Our Customers Are Saying
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-[2rem] border border-line p-8 sm:p-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-10 sm:grid-cols-2"
          >
            {pair.map((review) => (
              <div key={review.name} className="flex items-center gap-6">
                <div className="flex-1">
                  <span className="font-serif text-3xl leading-none text-accent">
                    &ldquo;&rdquo;
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex text-accent">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-ink">5.0</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-body italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
                <PlaceholderImage
                  palette="stone"
                  className="h-24 w-24 shrink-0 rounded-2xl"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>
          <div className="flex items-center gap-2">
            {REVIEWS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-ink" : "w-1.5 bg-line-soft"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
