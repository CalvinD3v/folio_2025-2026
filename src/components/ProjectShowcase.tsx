import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

function PhotoTile({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 30vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute bottom-4 left-4 rounded-full bg-cream px-3 py-1.5 text-xs font-medium text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {label}
      </span>
    </div>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="showcases" className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-12">
      <Reveal>
        <h2 className="font-display text-4xl text-ink sm:text-5xl text-left">
          PROJECT SHOWCASES
        </h2>
      </Reveal>

      <RevealGroup
        stagger={0.06}
        className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-stretch"
      >
        <RevealItem className="flex flex-[388] flex-col gap-4">
          <PhotoTile
            src="/images/ecommerce-platform.jpg"
            alt="E-commerce platform project screenshot"
            label="codestudio.co.za & billing system"
            className="aspect-[388/316]"
          />
          <PhotoTile
            src="/images/ai-marketplace.jpg"
            alt="AI Marketplace project screenshot"
            label="AI Marketplace"
            className="aspect-[388/210]"
          />
        </RevealItem>

        <RevealItem className="flex flex-[302] flex-col">
          <PhotoTile
            src="/images/team-workspace.jpg"
            alt="Team workspace dashboard project screenshot"
            label="Codestudio.co.za Client Dashboard"
            className="h-full min-h-[280px] lg:min-h-0"
          />
        </RevealItem>

        <RevealItem className="flex flex-[390] flex-col gap-4">
          <PhotoTile
            src="/images/editorial-redesign.jpg"
            alt="Zeal Ecommerce Platform project screenshot"
            label="Zeal Ecommerce Platform"
            className="aspect-[390/312]"
          />
          <div className="flex gap-4">
            <PhotoTile
              src="/images/product-launch.jpg"
              alt="Product Launch project screenshot"
              label="bi-me.co.za InsureTech"
              className="aspect-[179/125] flex-1"
            />
            <PhotoTile
              src="/images/news-portal.jpg"
              alt="Rebranding & Logo Design project screenshot"
              label="Logo & Rebranding"
              className="aspect-[179/125] flex-1"
            />
          </div>
        </RevealItem>

        <RevealItem className="flex flex-[390] flex-col gap-4">
          <PhotoTile
            src="/images/event-ticketing-app.jpg"
            alt="Finance Tracking app project screenshot"
            label="Finance Tracking App"
            className="aspect-[390/312]"
          />
          <PhotoTile
            src="/images/nontokozo-duo-full.png"
            alt="Brand identity project photography"
            label="Brand Identity & Website"
            className="aspect-[240/200]"
          />
        </RevealItem>
      </RevealGroup>

      {/* <Reveal
        delay={0.1}
        className="mt-14 flex flex-col items-center gap-6 text-center"
      >
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          For <span className="font-semibold">craftsmanship</span>,{" "}
          <span className="font-semibold">precision</span>, and{" "}
          <span className="font-semibold">care</span>.
        </p>
        <p className="text-sm text-muted">
          This work is trusted by clients who value lasting quality.
        </p>
        <button className="rounded-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-cream transition-transform hover:scale-105 active:scale-95">
          VIEW ALL PROJECTS
        </button>
      </Reveal> */}
    </section>
  );
}
