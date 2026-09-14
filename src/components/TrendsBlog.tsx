import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

export default function TrendsBlog() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-12">
      <Reveal>
        <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          STAY UPDATE FOR
          <br />
          TRENDS
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <PlaceholderImage
              palette="sand"
              label="Sideboard"
              className="aspect-[4/3] rounded-2xl transition-transform duration-500 hover:scale-[1.03]"
            />
            <PlaceholderImage
              palette="stone"
              label="Reading nook"
              className="aspect-[4/3] rounded-2xl transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
          <button className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-cream transition-transform hover:scale-105 active:scale-95">
            READ MORE BLOG
          </button>
          <div className="mt-8 border-t border-line pt-6">
            <p className="text-xs font-semibold tracking-wide text-faint uppercase">
              Sed Ut Perspiciatis
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="grid grid-cols-2 gap-4">
          <PlaceholderImage
            palette="sand"
            label="Lounge chair"
            className="col-span-2 aspect-[16/9] rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
          <PlaceholderImage
            palette="ink"
            label="Blue armchair"
            className="aspect-square rounded-2xl transition-transform duration-500 hover:scale-[1.03]"
          />
          <PlaceholderImage
            palette="ink"
            label="Blue sofa"
            className="aspect-square rounded-2xl transition-transform duration-500 hover:scale-[1.03]"
          />
        </Reveal>
      </div>
    </section>
  );
}
