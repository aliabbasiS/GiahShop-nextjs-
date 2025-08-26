"use client"
import * as React from "react"
import { Flower } from "../../store" // اگر تایپت رو از استور میاری
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import NextImage from "../../../../Components/imagemaker"

function engToFarsiNumber(str: string): string {
  const persianDigits: string[] = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"]
  return str.replace(/\d/g, (d: string) => persianDigits[parseInt(d)])
}

interface CarouselShopingcartProps {
  products?: Flower[] 
}

export default function CarouselShopingcart({ products = [] }: CarouselShopingcartProps) {

  const ProductCard = ({ product }: { product: Flower }) => (
    <div className="overflow-hidden rounded-lg border my-10 bg-white shadow-sm gap-6 transition-all hover:shadow-md flex flex-col">
      <div className="relative grow items-center justify-center md:p-3 lg:p-6 rounded-lg w-full flex h-full">
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
        <div className="flex items-center justify-between gap-6">
          <span className="text-lg font-bold text-green-600">
            {engToFarsiNumber(`${product.price},000`)} تومان
          </span>
          <div className="flex gap-3 items-center">
            <button
              type="button"
              className="rounded-lg bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700 transition"
            >
              افزودن به سبد
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full flex items-center justify-center">
      <Carousel
        className="w-full lg:w-11/12 lg:flex lg:justify-center"
        opts={{
          align: "start",
          direction: "rtl",
          containScroll: "trimSnaps",
          loop: true,
        }}
      >
        <CarouselContent>
          {products.map((p) => (
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
  )
}
