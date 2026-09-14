import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Reveal className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:px-10 lg:px-12">
        <span className="font-display text-xs tracking-widest text-ink">
          CALVIN CHOU
        </span>
        <p>&copy; {new Date().getFullYear()} Calvin Chou. All rights reserved.</p>
      </Reveal>
    </footer>
  );
}
