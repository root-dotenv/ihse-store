// src/components/products/featured-products.tsx
"use client";
import React, { useEffect, useState, useRef } from "react";
import ProductCard from "./product-card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Product {
  id: number;
  image: string;
  productName: string;
  productPrice: string;
  productColors: string[];
  availableInStock: number;
  productDescription: string;
  productCategories: string[];
  productTags: string[];
  isAvailable: boolean;
  detailedImages: string[];
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-[34px] font-semibold tracking-[-0.68px] mb-2.5 text-[#1a1c1d] leading-[42px]">
            Top Featured Products
          </h2>
          <p className="text-gray-500 mt-1">
            Browse a random collection of our favorite items
          </p>
        </div>
        <button className="bg-[#9FA3A7] text-[#FFF] px-4 py-2 rounded-full text-sm font-semibold">
          Our products
        </button>
      </div>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <FaChevronLeft />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          style={{ transform: "translate(50%, -50%)" }}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
