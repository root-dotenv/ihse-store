// src/components/partners/partners-section.tsx
"use client";
import React from "react";
import CategoryCard from "./category-card";
import BrandPill from "./brand-pill";

// Mock Data
const categoryData = [
  {
    title: "Keyboards",
    imageUrl: "/mechanical-keyboard.webp",
    href: "/keyboards",
  },
  {
    title: "Monitors",
    imageUrl: "/headphones.webp",
    href: "/monitors",
  },
  {
    title: "Ergonomic Chairs",
    imageUrl: "/ergonomic-chair-ii.webp",
    href: "/ergo-chairs",
  },
  {
    title: "Gadgets",
    imageUrl: "/standing-desk.webp",
    href: "/gadgets",
  },
  {
    title: "Audio Equipments",
    imageUrl: "/legion-monitor.webp",
    href: "/audio",
  },
];

const brandData = [
  { name: "Sihoo", logoUrl: "/partner-two.webp", href: "/brands/sihoo" },
  {
    name: "Logitech",
    logoUrl: "/partner-fourteen.png",
    href: "/brands/logitech",
  },
  { name: "Godox", logoUrl: "/partner-seven.avif", href: "/brands/godox" },
  {
    name: "Lenovo Legion",
    logoUrl: "/partner-thirtneen.png",
    href: "/brands/lenovo",
  },
  { name: "DJI", logoUrl: "/partner-twelve.png", href: "/brands/dji" },
  { name: "Xiaomi", logoUrl: "/partner-nine.webp", href: "/brands/xiaomi" },
  { name: "Sony", logoUrl: "/partner-eleven.png", href: "/brands/sony" },
  { name: "JBL", logoUrl: "/partner-fifteen.png", href: "/brands/jbl" },
  {
    name: "Powerology",
    logoUrl: "/partner-one.webp",
    href: "/brands/powerology",
  },
  {
    name: "Green Lion",
    logoUrl: "/partner-five.webp",
    href: "/brands/greenlion",
  },
  { name: "Apple", logoUrl: "/partner-four.webp", href: "/brands/apple" },
  { name: "Samsung", logoUrl: "/partner-three.webp", href: "/brands/samsung" },
];

export default function PartnersSection() {
  return (
    <section className="w-full max-w-[1300px] mx-auto py-12 px-4">
      {/* Other Routes Section */}
      <div className="lg:hidden flex space-x-4 overflow-x-auto scrollbar-hide">
        {categoryData.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            imageUrl={category.imageUrl}
            href={category.href}
          />
        ))}
      </div>
      <div className="hidden lg:grid grid-cols-5 lg:gap-2">
        {categoryData.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            imageUrl={category.imageUrl}
            href={category.href}
          />
        ))}
      </div>

      {/* Featured Brands Section - With border and updated mobile grid */}
      <div className="mt-12 pt-10 border-t border-[#DADCE0]">
        <div className="flex flex-col mb-6">
          <h2 className="text-[34px] font-semibold tracking-[-0.68px] text-[#1a1c1d] leading-[42px]">
            Featured Brands
          </h2>
          <p className="text-gray-500 mt-1">
            Buy from the global manufacturers
          </p>
        </div>

        {/* Mobile: Horizontally scrolling 2-row grid */}
        <div className="lg:hidden overflow-x-auto pb-4 scrollbar-hide">
          <div className="inline-grid grid-rows-2 grid-flow-col gap-4">
            {brandData.map((brand) => (
              <BrandPill
                key={brand.name}
                brandName={brand.name}
                logoUrl={brand.logoUrl}
                href={brand.href}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 6-column grid */}
        <div className="hidden lg:grid grid-cols-6 gap-4 justify-items-center">
          {brandData.map((brand) => (
            <BrandPill
              key={brand.name}
              brandName={brand.name}
              logoUrl={brand.logoUrl}
              href={brand.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
