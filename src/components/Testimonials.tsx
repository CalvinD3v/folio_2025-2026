"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "I had the pleasure of working closely with Calvin, and he consistently impressed me with his ability to get things done. He has a rare talent for breaking down complex problems and finding practical, often innovative solutions. What stood out most was his decisiveness and ability to see the bigger picture, he kept the team focused on delivering real outcomes rather than just ticking boxes. Calvin brings tremendous value, and any team would be better for having him.",
    name: "Tanaka M",
    image: "/images/tanaka-m.jpg",
    company: "Business Insurance Made Easy (BI-ME)",
  },
  {
    quote:
      "I would absolutely work with Calvin again given the chance. He has a real talent for transforming branding guides into code that meets all expectations—a true master of his craft.",
    name: "Tumelo Mampuru",
    image: "/images/tumelo-m.jpeg",
    company: "Codetrics (Pty) Ltd",
  },
  {
    quote:
      "When it comes to building digital products, Calvin is a rare find. He combines technical expertise with a deep understanding of user experience, resulting in solutions that are both functional and delightful. His ability to navigate complex challenges and deliver high-quality results is truly impressive.",
    name: "Nontokozo Mangquku",
    image: "/images/nontoko-profile.jpg",
    company: "Transgenerational Wealth",
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
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          What My Clients Are Saying
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
                  <p className="mt-3 text-sm leading-relaxed text-body italic">
                    <span className="font-serif text-3xl leading-none text-accent">
                      &ldquo;
                    </span>
                    {review.quote}
                    <span className="font-serif text-3xl leading-none text-accent">
                      &rdquo;
                    </span>
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-semibold text-ink">
                      {review.company} -{" "}
                    </span>
                    <span className="text-sm text-ink">{review.name}</span>
                  </div>
                </div>
                <Image
                  src={review.image}
                  alt={review.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0 rounded-2xl object-cover"
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
