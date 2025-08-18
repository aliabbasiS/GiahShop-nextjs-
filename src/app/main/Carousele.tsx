"use client"
import * as React from "react"
import NextImage from "../../../Components/imagemaker"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useShoppingStore, { Flower } from "../store"

export default function CarouselShopingcart() {
  const products = useShoppingStore((state) => state.products)
  const addToCart = useShoppingStore((state) => state.addToCart)
  const getCart = useShoppingStore((state) => state.getCart)

  const ProductCard = ({ product }: { product: Flower }) => (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-square">
        <NextImage
          url={product.image}
          alt={product.name}
          classes="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h4 className="mb-2 text-lg font-semibold text-gray-900">
          {product.name}
        </h4>
        <p className="mb-3 text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-green-600">
            {product.price}
          </span>
          <button
            type="button"
            onClick={() => {
              const cart = getCart()
              console.log("Cart:", cart)
            }}
            className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 transition"
          >
            Show Cart
          </button>
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
  )

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
            direction: "rtl",
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}
