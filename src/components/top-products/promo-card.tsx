// src/components/upgrades/promo-card.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LuChevronRight } from "react-icons/lu";

interface PromoCardProps {
  subtitle?: string;
  title: string;
  linkText: string;
  href: string;
  imageUrl?: string;
  imageContent?: {
    src: string;
    width: number;
    height: number;
  };
  variant: "secondary" | "tertiary-gradient" | "tertiary-dark";
  className?: string;
}

export default function PromoCard({
  subtitle,
  title,
  linkText,
  href,
  imageUrl,
  imageContent,
  variant,
  className,
}: PromoCardProps) {
  const cardStyles = {
    secondary:
      "bg-white flex-col md:flex-row items-start md:items-center text-left p-6 lg:w-[630px] lg:h-[300px]",
    "tertiary-gradient":
      "text-white p-8 justify-center items-center text-center bg-gradient-to-b from-[rgb(247,177,168)] to-[rgb(63,114,229)] h-[300px] lg:w-[305px]",
    "tertiary-dark":
      "text-white p-8 justify-center items-center text-center h-[300px] lg:w-[305px]",
  };

  const titleStyles = {
    secondary: "text-2xl md:text-3xl font-bold text-[#2c2d2e]",
    "tertiary-gradient": "text-2xl font-bold",
    "tertiary-dark": "text-2xl font-bold",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300",
        cardStyles[variant],
        className
      )}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover z-0 transition-all"
        />
      )}
      <div className="relative z-10 flex flex-col h-full w-full transition-all">
        {subtitle && (
          <p className="text-sm font-semibold tracking-widest uppercase mb-2 transition-all">
            {subtitle}
          </p>
        )}
        <h3 className={cn("mb-4", titleStyles[variant])}>{title}</h3>
        <Link
          href={href}
          className={`font-semibold mt-auto flex items-center transition-all ${
            variant === "secondary"
              ? "text-[#2c2d2e] hover:text-[#E4C103] transition-all"
              : "text-[#E4C103] justify-center transition-all"
          }`}
        >
          {linkText}
          <LuChevronRight className="inline-block w-4.5 h-4.5 transition-all" />
        </Link>
      </div>
      {imageContent && (
        <div className="relative w-full md:w-[200px] h-[200px] flex-shrink-0 mt-4 md:mt-0 transition-all">
          <Image
            src={imageContent.src}
            alt={title}
            width={imageContent.width}
            height={imageContent.height}
            className="object-contain w-full h-full"
          />
        </div>
      )}
    </div>
  );
}
