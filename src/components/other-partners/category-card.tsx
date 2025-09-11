// src/components/partners/category-card.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  href: string;
}

export default function CategoryCard({
  title,
  imageUrl,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="relative flex-shrink-0 w-[232px] h-[290px] rounded-2xl overflow-hidden shadow-md group"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#e7eae96f] to-transparent" />
      <div className="relative flex items-end h-full px-4 pb-7">
        <h3 className="text-[17px] w-full flex justify-center font-semibold text-center text-[#252f35] leading-[20.4px] tracking-[-0.17px]">
          {title}
        </h3>
      </div>
    </Link>
  );
}
