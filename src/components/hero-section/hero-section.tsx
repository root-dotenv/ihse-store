// src/components/hero-section/hero-section.tsx
import React from "react";
import HeroBanner from "./hero-banner";
import CardGrid from "./card-grid";

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
      <HeroBanner />
      <CardGrid />
    </section>
  );
}
