"use client";
import * as React from "react";

import useShoppingStore, { Flower } from "../store";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NextImage from "../../../Components/imagemaker";

function engToFarsiNumber(str: string): string {
  const persianDigits: string[] = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
  ];
  return str.replace(/\d/g, (d: string) => persianDigits[parseInt(d)]);
}

export default function CarouselShopingcart() {
  const products = useShoppingStore((state) => state.products);
  const addToCart = useShoppingStore((state) => state.addToCart);
  const getCart = useShoppingStore((state) => state.getCart);

  const ProductCard = ({ product }: { product: Flower }) => (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm gap-6 transition-all hover:shadow-md flex flex-col">
      <div className="relative grow items-center justify-center md:p-3  lg:p-6 rounded-lg w-full flex h-full">
        <NextImage
          url={product.image}
          alt={product.name}
          classes="rounded-lg grow object-contain"
        />
      </div>
      <div className="p-4 flex flex-col gap-3.5">
        <h4 className="mb-2 text-lg font-semibold text-gray-900">
          {product.name}
        </h4>
        {/* <p className="mb-3 text-sm text-gray-600">{product.description}</p> */}
        <div className="flex items-center justify-between  gap-6">
          <span className="text-lg font-bold text-green-600">
            {engToFarsiNumber(`${product.price},000`)} تومان
          </span>
          <div className="flex gap-3 items-center">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="rounded-lg bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700 transition"
            >
              افزودن به سبد
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Large screen carousel (4 per row) */}
      <div className="hidden lg:block">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            direction: "rtl",
            containScroll: "trimSnaps",
            loop: true,
          }}
        >
          <CarouselContent>
            {products.map((p: Flower) => (
              <CarouselItem
                key={p.id}
                className="p-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <ProductCard product={p} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Mobile/tablet carousel (2 per row) */}
      <div className="inline lg:hidden">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            direction: "ltr",
            containScroll: "trimSnaps",
            loop: true,
          }}
        >
          <CarouselContent>
            {products.map((p: Flower) => (
              <CarouselItem key={p.id} className="p-2 basis-1/2">
                <ProductCard product={p} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </>
  );
}
