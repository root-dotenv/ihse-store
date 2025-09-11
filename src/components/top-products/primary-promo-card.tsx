// src/components/upgrades/primary-promo-card.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LuChevronRight } from "react-icons/lu";

interface PrimaryPromoCardProps {
  subtitle?: string;
  title: string;
  linkText: string;
  href: string;
  imageUrl: string;
  className?: string;
}

export default function PrimaryPromoCard({
  subtitle,
  title,
  linkText,
  href,
  imageUrl,
  className,
}: PrimaryPromoCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 text-white p-8 h-[500px] lg:w-[630px] lg:h-[620px]",
        className
      )}
    >
      <Image src={imageUrl} alt={title} fill className="object-cover z-0" />
      <div className="relative z-10 flex flex-col items-center text-center h-full pt-8">
        {subtitle && (
          <p className="text-sm font-semibold tracking-widest uppercase mb-2">
            {subtitle}
          </p>
        )}
        <h3 className="text-4xl lg:text-5xl font-bold mb-4 transition-all">
          {title}
        </h3>
        <Link
          href={href}
          className="font-semibold text-[#E4C103] flex items-center transition-all"
        >
          {linkText}
          <LuChevronRight className="inline-block w-4.5 h-4.5 ml-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
