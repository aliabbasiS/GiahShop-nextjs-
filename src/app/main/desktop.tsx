"use client";
export const coursel1 = [
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی بابا آدم",
    description: "pachira",
    price: "555",
    image: "/shopescard/img1.png",
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی یوکا",
    description: "pachira",
    price: "250",
    image: "/shopescard/img2.png",
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی سانسوریا سبز",
    description: "pachira",
    price: "560",
    image: "/shopescard/img3.png",
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی ساکولنت",
    description: "pachira",
    price: "852",
    image: "/shopescard/img4.png",
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی ساکولنت",
    description: "pachira",
    price: "535",
    image: "/shopescard/img2.png",
  },
];
export const coursel2 = [
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی کراسولا",
    description: "pachira",
    price: "555",
    image: "/New folder/crosela.png",
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی یشم",
    description: "pachira",
    price: "250",
    image: "/New folder/yashm.png",
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی بونچیرا",
    description: "pachira",
    price: "560",
    image: "/New folder/bonchira.png",
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه کراسولای حرفه ایی",
    description: "pachira",
    price: "535",
    image: "/New folder/procrosel.png",
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه کراسولای حرفه ایی",
    description: "pachira",
    price: "535",
    image: "/New folder/procrosel.png",
  },
];
export const coursel3 = [
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی بنت قنسول گلیتال",
    description: "pachira",
    price: "176",
    image: p1,
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی آنتوریوم",
    description: "pachira",
    price: "459",
    image:p2,
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی بونسای پاچیرا",
    description: "pachira",
    price: "880",
    image: p3,
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی آنتوریوم",
    description: "pachira",
    price: "498",
    image:p4,
  },
  {
    id: crypto.randomUUID(),
    name: "گیاه طبیعی آنتوریوم",
    description: "pachira",
    price: "498",
    image:p4,
  },
];




export const imagesData1 = [
  { url: bonsaye.src, name: "بونسای" },
  { url: sansoriya.src, name: "سانسوریا" },
  { url: petos.src, name: "پتوس" },
  { url: pachira.src, name: "سانسوریا" },

  // add more here...
];
export const imagesData2 = [
  { url: rozmari.src, name: "رزماری" },
  { url: edniom.src, name: "آدنیوم" },
  { url: ashitsom.src, name: "آشیانتوس" },
  { url: annasi.src, name: "آناناسی" },

  // add more here...
];

import pachira from "/public/geradiantpictures/pachira.png";
import bonsaye from "/public/geradiantpictures/bonsaye.png";
import sansoriya from "/public/geradiantpictures/sansoriya.png";
import petos from "/public/geradiantpictures/petos.png";

import rozmari from "../../../public/geradiantpictures/rozmari.png";
import edniom from "../../../public/geradiantpictures/ednium.png";
import ashitsom from "../../../public/geradiantpictures/ashiyantos.png";
import annasi from "../../../public/geradiantpictures/ananasi.png";
import p1 from "../../../public/geradiantpictures/1.png";
import p2 from "../../../public/geradiantpictures/2.png";
import p3 from "../../../public/geradiantpictures/3.png";
import p4 from "../../../public/geradiantpictures/4.png";

import NextImage from "../../../Components/imagemaker";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import CarouselShopingcart from "./components/Carousele";
import Gerdiantshopcart from "./components/geradiantcart";
import Medicalservices from "./components/medicalservices";

// ---- images data ----

function useAnimatedCounter(targetNumber: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * targetNumber));
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [targetNumber, duration]);

  return count;
}

const Desktop = () => {
  const plantsCount = useAnimatedCounter(943, 1800);
  const customersCount = useAnimatedCounter(234, 5000);
  const ordersCount = useAnimatedCounter(128, 6000);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main className="bg-white px-8 lg:px-28 flex-col w-full pt-14 lg:flex hidden my-10 h-full">
      {/* desktop version */}
      <div className="justify-between w-full gap-5 flex-row-reverse lg:flex hidden">
        <div className="w-full h-full flex justify-end xl:justify-center items-center flex-1/2">
          <img
            src="/main/bigmain.png"
            className="aspect-auto hidden lg:flex lg:h-[558px] lg:w-[574px] xl:h-[700px] xl:w-[800px]"
            alt=""
          />
        </div>
        <aside className="flex order-1 flex-1/2 flex-col gap-8">
          <div className="flex">
            <span className="flex flex-row-reverse justify-start items-start font-extrabold text-5xl text-green-500">
              گیاه لند!
              <h1 className="mx-1 text-black">خرید راحت ‌با </h1>
            </span>
          </div>
          <article className="text-lg lg:w-[539px] text-gray-700 font-semibold">
            با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه
            استفاده کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت
            مشاوره بگیری.
          </article>
          <div className="h-[56px] lg:w-[539px] flex w-full gap-3">
            <button className="h-full w-1/2 lg:w-[258px] text-white bg-green-700 rounded-lg">
              گیاهان تخفیف دار
            </button>
            <button className="h-full cursor-pointer gap-2 justify-center w-1/2 lg:w-[258px] flex items-center bg-white border border-dashed border-green-800 rounded-lg text-green-700">
              مشاوره با گیاه پزشک
              <div className="relative top-[2px]">
                <NextImage width={16} height={16} url="/header/Vector.svg" />
              </div>
            </button>
          </div>
          <div className="flex gap-6 justify-between w-2/3">
            {/* Plants Counter */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold text-green-900">
                  {plantsCount}+
                </span>
                <span className="text-lg text-gray-700 font-semibold">
                  گیاه خانگی
                </span>
              </div>
            </div>

            {/* Customers Counter */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold text-green-900">
                  {customersCount}+
                </span>
                <span className="text-lg text-gray-700 font-semibold">
                  گیاه تزيینی
                </span>
              </div>
            </div>

            {/* Orders Counter */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold text-green-900">
                  {ordersCount}+
                </span>
                <span className="text-lg text-gray-700 font-semibold">
                  گیاه کادویی
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* payment at house */}
      <div className="lg:flex-row flex-col flex justify-between my-10 gap-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <div
            style={{ background: "#E5F2E9" }}
            className="w-[80px] rounded-full h-[80px] flex justify-center items-center"
          >
            <NextImage url="/main/credit_card.png" width={40} height={40} />
          </div>
          <h2 className="font-semibold text-2xl">پرداخت درب منزل</h2>
          <span className="flex text-center font-semibold text-gray-400">
            برای ایجاد اطمینان خاطر مشتریان، علاوه بر پرداخت آنلاین امکان پرداخت
            درب منزل وجود دارد
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div
            style={{ background: "#E5F2E9" }}
            className="w-[80px] rounded-full h-[80px] flex justify-center items-center"
          >
            <NextImage url="/main/validation.png" width={40} height={40} />
          </div>
          <h2 className="font-semibold text-2xl">ضمانت محصول</h2>
          <span className="flex text-center font-semibold text-gray-400">
            به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل میتوانید مرجوع
            کنید
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div
            style={{ background: "#E5F2E9" }}
            className="w-[80px] rounded-full h-[80px] flex justify-center items-center"
          >
            <NextImage url="/main/local_shipping.png" width={40} height={40} />
          </div>
          <h2 className="font-semibold text-2xl">تحویل درب</h2>
          <span className="flex text-center font-semibold text-gray-400">
            با ایجاد آدرس منزل خود در پروفایل کاربری، محصول خود را درب منزل
            تحویل بگیرید
          </span>
        </div>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-center gap-6 my-10">
        <NextImage url="/main/leaf1.png" height={240} classes="lg:w-1/2" />
        <NextImage url="/main/leaf2.png" height={240} classes="lg:w-1/2" />
      </div>

      {/* giah apartemani */}
      <div className="flex flex-col gap-7">
        <h3 className="font-bold text-xl my-9 text-nowrap text-green-800">
          گیاهان اپارتمانی
        </h3>
        <CarouselShopingcart products={coursel1} />
      </div>

      {/* shop cart */}
      <Gerdiantshopcart images={imagesData1} />
      {/* medical services */}
      <Medicalservices />
      <div className="flex flex-col gap-7 my-8">
        <h3 className="font-bold text-xl my-9 text-nowrap text-green-800">
          گیاهان تزيینی
        </h3>

        <CarouselShopingcart products={coursel2} />
      </div>

      <Gerdiantshopcart images={imagesData2} />
      <div className="flex flex-col gap-7 my-8">
        <h3 className="font-bold text-xl my-9 text-nowrap text-green-800">
        گیاهان کادویی
        </h3>

        <CarouselShopingcart products={coursel3} />
      </div>
    </main>
  );
};

export default Desktop;
