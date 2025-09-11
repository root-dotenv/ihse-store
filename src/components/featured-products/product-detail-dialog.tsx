// src/components/products/product-detail-dialog.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";

// Define a more detailed Product type for the dialog
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

interface ProductDetailDialogProps {
  product: Product;
  children: React.ReactNode;
}

// Sub-component for the Image Gallery (Left Column)
const ImageGallery = ({
  mainImage,
  thumbnails,
}: {
  mainImage: string;
  thumbnails: string[];
}) => {
  const [activeImage, setActiveImage] = useState(mainImage);

  return (
    <div className="w-full lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
      <div className="flex lg:flex-col gap-2 justify-start">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(thumb)}
            className={`w-[80px] h-[100px] rounded-lg overflow-hidden border-2 ${
              activeImage === thumb ? "border-blue-500" : "border-transparent"
            }`}
          >
            <Image
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={100}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
      <div className="w-full h-[300px] lg:w-[424px] lg:h-[530px] lg:max-w-[424px] lg:max-h-[530px] bg-gradient-to-br from-[#E7EAE9] to-[#DEE9E9] rounded-lg flex items-center justify-start overflow-hidden">
        <Image
          src={activeImage}
          alt="Main product image"
          width={424}
          height={530}
          className="object-cover w-[424px] h-[530px]"
        />
      </div>
    </div>
  );
};

// Sub-component for the Product Info (Right Column)
const ProductInfo = ({ product }: { product: Product }) => (
  <div className="w-full h-full flex flex-col justify-between lg:w-1/2 text-[#2c2d2e] p-4 lg:p-8">
    <div>
      <p className="text-[0.875rem] text-[#2c2d2e] uppercase tracking-widest font-medium">
        STOREMAX+
      </p>
      <h2 className="text-2xl lg:text-[34px] font-bold my-2 md:tracking-[-0.68px] md:leading-[42px]">
        {product.productName}
      </h2>
      <p className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
        {product.productPrice}
      </p>

      {product.overviewPoints && (
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Overview:</h3>
          <ul className="list-disc list-inside text-[#2c2d2e] text-[1rem] space-y-1">
            {product.overviewPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {product.keyDetailsPoints && (
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2">Key Details:</h3>
          <ul className="list-disc list-inside text-[#2c2d2e] text-[1rem] space-y-1">
            {product.keyDetailsPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <div
      className="flex flex-col lg:flex-row lg:gap-x-4 lg:w-full
     gap-4"
    >
      <Button className="bg-[#989ca1] font-medium text-[1rem] text-[#FFF] leading-[15px] hover:bg-gray-400 py-6 px-8 rounded-full transition-colors">
        Add to cart
      </Button>
      <Button className="bg-[#2c2d2e] font-medium text-[1rem] hover:bg-black text-[#FFF] leading-[15px] py-6 px-8 rounded-full transition-colors">
        Buy it now
      </Button>
    </div>
  </div>
);

export default function ProductDetailDialog({
  product,
  children,
}: ProductDetailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[90vw] lg:max-w-[1160px] h-auto lg:h-[789px] bg-white rounded-2xl border-none p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8 w-full h-full">
          <ImageGallery
            mainImage={product.image}
            thumbnails={product.detailedImages}
          />
          <ProductInfo product={product} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
