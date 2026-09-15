"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";

const WHATSAPP_NUMBER = "27714313265";
const WHATSAPP_MESSAGE = "Hi Calvin, I'd like to chat about a project.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.936.537 3.822 1.554 5.451L2 22l4.68-1.528a9.958 9.958 0 0 0 5.324 1.53h.004c5.518 0 10.004-4.486 10.004-10.004 0-2.672-1.04-5.185-2.93-7.074A9.94 9.94 0 0 0 12.004 2zm0 18.234h-.003a8.198 8.198 0 0 1-4.178-1.144l-.3-.178-3.117 1.018.999-3.113-.196-.312a8.206 8.206 0 0 1-1.262-4.499c0-4.53 3.686-8.216 8.22-8.216a8.17 8.17 0 0 1 5.815 2.407 8.17 8.17 0 0 1 2.404 5.814c-.002 4.532-3.688 8.223-8.382 8.223z" />
    </svg>
  );
}

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

            const card = href ? (
              <a
                href={href}
                className="block flex-1 transition-opacity hover:opacity-80"
              >
                {content}
              </a>
            ) : (
              <div className="flex-1">{content}</div>
            );

            if (label === "Phone") {
              return (
                <div key={label} className="flex items-stretch gap-3">
                  {card}
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message Calvin on WhatsApp"
                    title="Message on WhatsApp"
                    className="flex w-16 shrink-0 items-center justify-center rounded-2xl border border-line bg-[#25D366]/10 text-[#25D366] transition-colors hover:bg-[#25D366]/20"
                  >
                    <WhatsAppIcon className="h-6 w-6" />
                  </a>
                </div>
              );
            }

            return <div key={label}>{card}</div>;
          })}
        </Reveal>
      </div>
    </section>
  );
}
