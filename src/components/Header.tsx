"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Hire Me", href: "#hire" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10 lg:px-12">
        <span className="font-display text-sm tracking-widest text-ink">
          CALVIN CHOU
        </span>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative font-jakarta text-sm font-medium tracking-wide text-muted uppercase transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-jakarta text-sm font-medium text-cream sm:flex"
        >
          Start a Project
          <Zap className="h-4 w-4 fill-yellow-400 text-yellow-400" strokeWidth={1.75} />
        </motion.a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/70 text-ink sm:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line/70 sm:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 font-jakarta text-sm font-medium tracking-wide text-muted uppercase hover:bg-panel hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 font-jakarta text-sm font-medium text-cream"
              >
                Start a Project
                <Zap className="h-4 w-4 fill-yellow-400 text-yellow-400" strokeWidth={1.75} />
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
