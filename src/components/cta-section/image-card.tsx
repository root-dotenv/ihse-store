// src/components/cta-section/image-card.tsx
import React from "react";
import Image from "next/image";

interface ImageCardProps {
  imageUrl: string;
  altText: string;
}

export default function ImageCard({ imageUrl, altText }: ImageCardProps) {
  return (
    <div className="bg-white rounded-2xl flex items-center justify-center h-[500px] lg:h-[650px] lg:w-[630px] overflow-hidden">
      <Image
        src={imageUrl}
        alt={altText}
        width={500}
        height={500}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
