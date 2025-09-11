// src/components/hero-section/promo-card.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

interface PromoCardProps {
  title: string;
  linkText: string;
  href: string;
  imageUrl: string;
}

export default function PromoCard({
  title,
  linkText,
  href,
  imageUrl,
}: PromoCardProps) {
  return (
    <div className="bg-[#FFF] flex items-center justify-between rounded-2xl shadow-[0_4px_6px_0_rgba(0,0,0,0.08)] px-2.5 py-1.5">
      <div className="p-4 flex flex-col h-full">
        <h3
          className="text-[#303c43] text-[18px] font-bold leading-[26px] tracking-[-0.36px] mb-2.5"
          style={{ margin: "0px 0px 10px" }}
        >
          {title}
        </h3>
        <Link
          href={href}
          className="text-[#3f72e5] text-[15px] font-semibold leading-[15px] flex items-center hover:underline transition-all"
          style={{ margin: "19px 0px 0px" }}
        >
          {linkText} <LuChevronRight className="inline-block w-4.5 h-4.5" />
        </Link>
      </div>
      <Image
        src={imageUrl}
        alt={"alternative text"}
        width={150}
        height={100}
        className="rounded-lg object-cover"
      />
    </div>
  );
}
