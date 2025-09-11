// src/components/cta-section/cta-section.tsx
import React from "react";
import CtaCard from "./cta-card";
import ImageCard from "./image-card";

export default function CtaSection() {
  return (
    <section className="w-full max-w-[1300px] mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CtaCard
          subtitle="A Healthy Way"
          title="All-Day Comfort: Ergonomic Chairs with Max Support"
          description="Wave goodbye to back pain and boost your productivity. Our ergonomic chairs support healthy sitting, reduce strain, and keep you comfortable during long hours at your desk."
          buttonText="Shop Now"
          href="/ergo-chairs"
        />
        <ImageCard imageUrl="/ergonomic-chair.webp" altText="Ergonomic Chair" />
      </div>
    </section>
  );
}
