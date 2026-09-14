import Reveal from "./Reveal";

export default function CreativityBand() {
  return (
    <section className="bg-ink py-12 mx-6 sm:mx-10 lg:mx-12">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl">
            <span className="flex flex-wrap items-center gap-3">
              Where creativity
              <span className="h-6 w-6 rounded-full bg-accent" />
              meets
            </span>
            <span className="flex flex-wrap items-center gap-3">
              Every
              <span className="h-6 w-6 rounded-full bg-accent" />
              detail with
              <span className="h-6 w-6 rounded-full bg-accent" />
              crafts.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="max-w-sm text-sm leading-relaxed text-white/70">
          My craft combines forward-thinking vision with meticulous
          execution, ensuring that each space and object created is not
          solely visually striking, but deeply contextual.
        </Reveal>
      </div>
    </section>
  );
}
