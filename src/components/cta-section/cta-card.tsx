// src/components/cta-section/cta-card.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CtaCardProps {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export default function CtaCard({
  subtitle,
  title,
  description,
  buttonText,
  href,
}: CtaCardProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#e7c710] rounded-2xl p-8 lg:p-[70px] h-[500px] lg:h-[650px] lg:w-[630px]">
      <p className="text-[#686868] text-[12px] font-medium leading-[19.2px] tracking-[1.2px] uppercase mb-[30px]">
        {subtitle}
      </p>
      <h2 className="text-[#686868] text-[34px] font-semibold leading-[42px] tracking-[-0.68px] mb-5">
        {title}
      </h2>
      <p className="text-[#686868] text-[17px] leading-[27.2px] tracking-[-0.17px] mb-[30px] max-w-md">
        {description}
      </p>
      <Button
        asChild
        className="bg-[#686868] text-white text-[15px] font-medium leading-[24px] rounded-full py-[7px] px-[30px] h-auto hover:bg-black"
      >
        <Link href={href}>{buttonText}</Link>
      </Button>
    </div>
  );
}
