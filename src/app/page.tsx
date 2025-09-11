// src/app/page.tsx
"use client";
import FeaturedProducts from "@/components/featured-products/featured-products";
import HeroSection from "@/components/hero-section/hero-section";
import PartnersSection from "@/components/other-partners/partners-section";
import UpgradesSection from "@/components/top-products/upgrades-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <FeaturedProducts />
      <UpgradesSection />
      <PartnersSection />
    </div>
  );
}
