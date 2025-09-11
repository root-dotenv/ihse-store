// src/components/partners/brand-pill.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandPillProps {
  brandName: string;
  logoUrl: string;
  href: string;
}

export default function BrandPill({
  brandName,
  logoUrl,
  href,
}: BrandPillProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-[197px] h-[126px] bg-white rounded-2xl shadow-[0_3px_4px_0_rgba(0,0,0,0.08)] p-4 transition-transform duration-200 hover:scale-105"
    >
      <div className="relative w-full h-full">
        <Image
          src={logoUrl}
          alt={`${brandName} logo`}
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
}
