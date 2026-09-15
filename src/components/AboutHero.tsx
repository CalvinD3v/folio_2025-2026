"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ParallaxLayer from "./ParallaxLayer";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

const STATS = [
  { value: "9", suffix: "+", label: "Years Experience" },
  { value: "7", suffix: "", label: "Companies & Clients" },
  { value: "2017", suffix: "", label: "Founded Codestudio" },
];

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pt-14 pb-20 sm:px-10 lg:px-12">
      <h1 className="font-serif text-[15vw] leading-[0.85] font-black tracking-tight text-ink text-right sm:text-[13vw] lg:text-[9.5vw] lg:leading-[0.82] xl:text-[8.75rem]">
        <SplitText text="A FOUNDER." />
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-4 font-sansation text-right text-xl font-light text-muted sm:text-2xl"
      >
        Full-stack developer and digital agency founder shipping web and
        mobile products end-to-end since 2017.
      </motion.p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_1fr]">
        <Reveal
          delay={0.1}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem]"
        >
          <ParallaxLayer strength={28}>
            <Image
              src="/images/calvin-about-portrait.jpg"
              alt="Calvin Chou portrait"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </ParallaxLayer>
          <span className="absolute bottom-5 left-5 rounded-full bg-cream px-4 py-2 text-xs font-semibold tracking-wide text-ink">
            FOUNDER · CODESTUDIO
          </span>
        </Reveal>

        <div className="flex flex-col justify-between gap-8 pt-6 pb-6">
          <Reveal
            delay={0.15}
            className="grid grid-cols-3 gap-6 border-b border-line pb-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-poppins text-3xl font-bold text-ink sm:text-4xl">
                  {stat.value}
                  {stat.suffix ? (
                    <span className="ml-1 font-normal">{stat.suffix}</span>
                  ) : null}
                </p>
                <p className="mt-1 font-jakarta text-xs font-medium tracking-wide text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <blockquote className="font-jakarta text-right text-lg leading-relaxed text-ink-soft sm:text-xl">
              &ldquo;Comfortable wearing every hat in the room — writing the
              code, designing the UX, scoping with clients, and managing the
              infrastructure underneath it all.&rdquo;
              <footer className="mt-3 text-base text-muted">
                &ndash; Calvin Chou
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.25} className="flex justify-start">
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-cream"
            >
              LET&apos;S TALK
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cream text-accent-deep">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
              </span>
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
