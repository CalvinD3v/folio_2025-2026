import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";

const SERVICES = [
  "Bespoke Furniture Design",
  "Furniture Restoration",
  "Material & Spatial Consultation",
];

export default function CustomBuild() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
          <Image
            src="/images/subhero.png"
            alt="Custom arm-chair build, client seated portrait"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
          <span className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs font-medium text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Arm-Chair Custom Build
          </span>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Build The Furniture Of Your Dreams. Custom&ndash;Made For You
          </h2>

          <div className="mt-8 divide-y divide-line border-y border-line">
            {SERVICES.map((service) => (
              <div
                key={service}
                className="group flex items-center justify-between py-4"
              >
                <span className="flex items-center gap-3 text-sm font-semibold tracking-wide text-ink">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ink/70">
                    <svg viewBox="0 0 12 10" className="h-3 w-3" fill="none">
                      <path
                        d="M1 5L4.5 8.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {service.toUpperCase()}
                </span>
                <ArrowUpRight className="h-4 w-4 text-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
              </div>
            ))}
          </div>

          <button className="mt-8 flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-cream transition-transform hover:scale-105 active:scale-95">
            VIEW ALL SERVICES
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
