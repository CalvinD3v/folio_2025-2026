"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "calvin.mo.agency@gmail.com",
    href: "mailto:calvin.mo.agency@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 71 431 3265",
    href: "tel:+27714313265",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Centurion, South Africa",
    href: undefined,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `New project inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:calvin.mo.agency@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-12"
    >
      <Reveal>
        <h2 className="font-display text-4xl text-ink sm:text-5xl">
          Let&apos;s Start Your Project
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Tell me a bit about what you&apos;re building and I&apos;ll get
          back to you shortly — this opens straight into your email client.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink/50"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink/50"
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder="What are you looking to build?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none rounded-xl border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink/50"
            />
            <button
              type="submit"
              className="flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-cream transition-transform hover:scale-105 active:scale-95"
            >
              SEND MESSAGE
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-4">
          {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="flex items-center gap-4 rounded-2xl border border-line p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-panel text-ink">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-faint uppercase">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-ink">
                    {value}
                  </p>
                </div>
              </div>
            );

            return href ? (
              <a key={label} href={href} className="transition-opacity hover:opacity-80">
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
