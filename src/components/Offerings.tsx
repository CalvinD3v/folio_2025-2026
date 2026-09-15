import { ArrowUpRight, Briefcase, Lightbulb, Users } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const OFFERINGS = [
  {
    icon: Briefcase,
    title: "Business",
    description:
      "Clear-eyed guidance from first brief to final handover, keeping every project on scope, on budget, and on brand.",
  },
  {
    icon: Lightbulb,
    title: "ennovation",
    description:
      "Fresh thinking applied to materials, form, and process, pushing each build past the expected and into the original.",
  },
  {
    icon: Users,
    title: "experience",
    description:
      "Spaces and objects shaped around how people actually live, work, and move through a room.",
  },
];

export default function Offerings() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-12">
      <Reveal>
        <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">
          What I offer to my Clients
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="relative mt-16 hidden sm:block">
        {/* connector lines: span the exact gap to the cards below, aligned to each card's column center */}
        <div className="pointer-events-none absolute inset-x-0 top-full h-24">
          {["16.6667%", "50%", "83.3333%"].map((left, i) => (
            <span
              key={left}
              className="absolute top-0 h-24 w-px -translate-x-1/2 overflow-hidden bg-line"
              style={{ left }}
            >
              <span
                className="absolute inset-x-0 -top-1/2 h-[200%] w-full bg-gradient-to-b from-transparent via-accent to-transparent opacity-0 [animation:connector-pulse_2.4s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            </span>
          ))}
        </div>

        <div className="relative mx-auto w-fit">
          <div className="pointer-events-none absolute inset-x-6 top-0 flex -translate-y-1/2 justify-between">
            <span className="h-2 w-2 rounded-full bg-ink/20" />
            <span className="h-2 w-2 rounded-full bg-ink/20" />
            <span className="h-2 w-2 rounded-full bg-ink/20" />
          </div>
          <div className="pointer-events-none absolute inset-x-6 bottom-0 flex translate-y-1/2 justify-between">
            <span className="h-2 w-2 rounded-full bg-ink/20" />
            <span className="h-2 w-2 rounded-full bg-ink/20" />
            <span className="h-2 w-2 rounded-full bg-ink/20" />
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-ink px-10 py-5 text-sm font-semibold tracking-wide text-cream">
            Powered By
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 origin-center scale-[2.2] -rotate-[30deg] opacity-60 [mix-blend-mode:plus-lighter] [animation:chip-shine_5s_infinite] [background:linear-gradient(90deg,transparent_20%,rgba(255,255,255,0.35)_50%,rgba(255,255,255,0.18)_55%,transparent_70%)] [background-size:200%_100%]"
            />
          </div>
        </div>
      </Reveal>

      <RevealGroup
        stagger={0.08}
        className="mt-10 grid gap-6 sm:mt-24 lg:grid-cols-3"
      >
        {OFFERINGS.map(({ icon: Icon, title, description }) => (
          <RevealItem key={title}>
            <div className="h-full rounded-3xl border border-line p-8 transition-shadow hover:shadow-lg hover:shadow-black/5">
              <Icon className="h-8 w-8 text-ink" strokeWidth={1.5} />
              <div className="mt-6 flex items-center gap-2">
                <h3 className="text-lg font-bold text-ink">{title}</h3>
                <ArrowUpRight className="h-4 w-4 text-faint" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
