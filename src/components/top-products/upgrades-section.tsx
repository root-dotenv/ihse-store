// src/components/upgrades/upgrades-section.tsx
import React from "react";
import PromoCard from "./promo-card";
import PrimaryPromoCard from "./primary-promo-card";

export default function UpgradesSection() {
  return (
    <section className="w-full max-w-[1300px] mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#2c2d2e] relative inline-block">
          StoreMax+ Specials
          <svg
            className="absolute -bottom-1 left-0 w-full"
            height="8"
            viewBox="0 0 100 8"
            preserveAspectRatio="none"
          >
            <path
              d="M0,4 Q25,8 50,4 T100,4"
              stroke="#E4C103"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </h2>
        <p className="text-[#303c43] text-lg lg:text-[1.25rem] font-semibold mt-4 max-w-2xl text-center mx-auto">
          Explore our exclusive StoreMax+ deals
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Primary Card */}
        <PrimaryPromoCard
          subtitle="EVERYTHING YOU NEED"
          title="for your Desk SETUP"
          linkText="Explore our Random Items"
          href="/desk-setup"
          imageUrl="/main-promo-image.webp"
          className="lg:row-span-2"
        />

        {/* Secondary Card */}
        <PromoCard
          variant="secondary"
          subtitle="PRODUCTION EQUIPMENTS"
          title="Take your production and content creation to a whole new level."
          linkText="Explore"
          href="/production-equipment"
          imageContent={{
            src: "/shure-image.webp",
            width: 200,
            height: 200,
          }}
        />

        {/* Tertiary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PromoCard
            variant="tertiary-gradient"
            title="MUST-HAVE Gadgets to Turbocharge Your Workday!"
            linkText="Discover"
            href="/gadgets"
          />
          <PromoCard
            variant="tertiary-dark"
            title="Build Your Own Custom PC"
            linkText="Buy Now"
            href="/custom-pc"
            imageUrl="/pegboard-ii.webp"
          />
        </div>
      </div>
    </section>
  );
}
