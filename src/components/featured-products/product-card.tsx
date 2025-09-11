// src/components/products/product-card.tsx
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ProductDetailDialog from "./product-detail-dialog";

// We need a more detailed Product type here to pass to the dialog
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
  overviewPoints?: string[];
  keyDetailsPoints?: string[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const rating = 4.7;

  return (
    <div className="flex-shrink-0 w-[217px] h-[420px] max-w-[217px] max-h-[420px] rounded-lg">
      <div className="group relative rounded-lg overflow-hidden">
        <div className="mx-auto overflow-hidden bg-gradient-to-br from-[#E7EAE9] to-[#DEE9E9]">
          <Image
            src={product.image}
            alt={product.productName}
            width={197}
            height={246}
            className="w-full h-[246px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Quick view button now triggers the dialog */}
        <div className="absolute inset-0 bg-neutral-800/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <ProductDetailDialog product={product}>
            <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-lg font-semibold">
              Quick view
            </button>
          </ProductDetailDialog>
        </div>
      </div>

      {/* Product Details Wrapper */}
      <div className="h-[154px] overflow-y-auto flex flex-col justify-between gap-y-1 mt-2">
        <h3 className="text-[#2c2d2e] hover:text-[#9da7b2] font-medium leading-[22.4px] tracking-[-0.17px] text-[1rem] transition-all duration-300 mt-1">
          {product.productName}
        </h3>
        <p className="text-[#2c2d2e] font-semibold text-[0.9375rem] tracking-[-0.17px]">
          {product.productPrice}
        </p>
        <div className="flex items-center">
          <FaStar size={13} className="text-yellow-400" />
          <FaStar size={13} className="text-yellow-400" />
          <FaStar size={13} className="text-yellow-400" />
          <FaStar size={13} className="text-yellow-400" />
          <FaStar size={13} className="text-yellow-400" />
          <span className="text-gray-600 text-sm ml-2">
            {rating.toFixed(1)}
          </span>
        </div>
        <div>
          {product.productTags.map((tag) => (
            <span
              key={tag}
              className="inline-block border border-[#DADCE0] rounded-full text-gray-600 text-xs font-medium mr-2 px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-[#9da7b2] text-[0.875rem] font-medium">
          {product.productDescription}
        </p>
        {product.availableInStock > 0 && product.availableInStock <= 5 && (
          <p className="text-orange-500 mt-2 text-[0.875rem] font-medium">
            {product.availableInStock} in stock
          </p>
        )}
      </div>
    </div>
  );
}
