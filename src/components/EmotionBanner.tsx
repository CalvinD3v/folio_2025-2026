import Image from "next/image";
import ParallaxLayer from "./ParallaxLayer";
import Reveal from "./Reveal";

export default function EmotionBanner() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:px-12">
      <Reveal className="group relative aspect-[21/9] w-full overflow-hidden rounded-[999px] max-lg:rounded-[3rem]">
        <ParallaxLayer strength={50}>
          <Image
            src="/images/latest-project.jpg"
            alt="Latest project — FinWise budgeting app shown on a laptop"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </ParallaxLayer>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
        <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-14">
          <p className="font-serif text-2xl text-white sm:text-4xl">
            Design with Emotion,
          </p>
          <p className="font-serif text-2xl text-white/85 italic sm:text-4xl">
            Build to Last
          </p>
        </div>
      </Reveal>
    </section>
  );
}
