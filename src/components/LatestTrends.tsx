"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const PRODUCTS: { name: string; category: string; price: string; palette: "sand" | "stone" | "clay" | "slate" | "moss" | "blush" | "ink" }[] = [
  { name: "Modern Accent Chair", category: "Chair", price: "$200", palette: "sand" },
  { name: "Classic Cupboard", category: "Cupboard", price: "$800", palette: "clay" },
  { name: "Comfort Curved Chair", category: "Chair", price: "$250", palette: "stone" },
  { name: "Executive Study Desk", category: "Desk", price: "$1,200", palette: "clay" },
  { name: "Executive Study Desk", category: "Desk", price: "$1,200", palette: "slate" },
  { name: "Comfort Chair", category: "Chair", price: "$250", palette: "clay" },
  { name: "Modern Accent Chair", category: "Chair", price: "$200", palette: "slate" },
  { name: "Classic Dining Set", category: "Cupboard", price: "$800", palette: "clay" },
  { name: "Comfort Curved Chair", category: "Chair", price: "$250", palette: "moss" },
  { name: "Executive Sofa Set", category: "Desk", price: "$1,200", palette: "slate" },
  { name: "Comfort Zone", category: "Desk", price: "$1,200", palette: "sand" },
  { name: "Comfort Chair", category: "Chair", price: "$250", palette: "blush" },
];

export default function LatestTrends() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-12">
      <div className="flex items-center justify-between">
        <Reveal>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">
            Our Latest Trends
          </h2>
        </Reveal>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Previous"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Next"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>

      <RevealGroup
        stagger={0.05}
        className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6"
      >
        {PRODUCTS.map((product, i) => (
          <RevealItem key={`${product.name}-${i}`}>
            <div className="group rounded-2xl border border-line p-3 transition-shadow hover:shadow-lg hover:shadow-black/5">
              <div className="overflow-hidden rounded-xl">
                <PlaceholderImage
                  palette={product.palette}
                  className="aspect-square transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="mt-3 inline-block rounded-full bg-panel px-3 py-1 text-xs font-medium text-muted">
                {product.category}
              </span>
              <p className="mt-2 text-sm font-semibold text-ink">
                {product.name}
              </p>
              <p className="text-sm text-muted">{product.price}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
