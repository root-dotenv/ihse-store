// src/components/hero-section/hero-banner.tsx
"use client";
import React from "react";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <Image
        src="/promo-image-one.avif"
        alt="Hero banner"
        width={1280}
        height={550}
        className="max-w-[1280px] max-h-[550px] object-cover"
      />
    </div>
  );
}
