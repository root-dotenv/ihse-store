// src/app/page.tsx
"use client";

import HeroSection from "@/components/hero-section/hero-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <HeroSection />
    </div>
  );
}
