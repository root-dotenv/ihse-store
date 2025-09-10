// src/components/hero-section/card-grid.tsx
import React from "react";
import PromoCard from "./promo-card";

// Mock data based on the screenshot
const cardData = [
  {
    title: "Up to 20% OFF on our selected products",
    linkText: "See offers",
    href: "/offers",
    imageUrl: "/promo-image-one.avif",
  },
  {
    title: "Dive into the world of ergonomics",
    linkText: "Explore",
    href: "/ergo-chairs",
    imageUrl: "/promo-image-two.avif",
  },
  {
    title: "Game changer computer accessories/gadgets",
    linkText: "Explore",
    href: "/gadgets",
    imageUrl: "/promo-image-three.avif",
  },
];

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {cardData.map((card, index) => (
        <PromoCard
          key={index}
          title={card.title}
          linkText={card.linkText}
          href={card.href}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}
