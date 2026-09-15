import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-6 py-32 text-center">
        <div>
          <p className="font-display text-7xl text-ink sm:text-9xl">404</p>
          <h1 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-3 text-sm text-muted sm:text-base">
            The page you&apos;re looking for may have moved or never existed.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-cream transition-transform hover:scale-105 active:scale-95"
          >
            BACK TO HOME
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
