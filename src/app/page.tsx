"use client";
import NextImage from "../../Components/imagemaker";
import Image from "next/image";
import Desktop from "./main/desktop";

import { useEffect, useState } from "react";
import Mobile from "./main/mobile";

// Custom hook for animated counter
function useAnimatedCounter(targetNumber: number, duration: number ) {
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

export default function Home() {
  // Use the animated counter hook for multiple statistics with 15 second duration
  const plantsCount = useAnimatedCounter(943, 0.15);
  const customersCount = useAnimatedCounter(234, 1500);
  const ordersCount = useAnimatedCounter(128, 1500);

  return (
    // <main className="bg-white flex px-8 lg:px-18   pt-14   h-full">
    //   <div className="flex flex-col">
    //     {/* picture */}
    //     <div className="w-full flex  lg:hidden ">
    //       <div className="rounded-full flex ">
    //         <div className="">
    //           <NextImage url="/mainphone/giah.jpg" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* desktop verion */}
    //   <div className=" justify-between w-full gap-5 flex-row-reverse lg:flex hidden">
    //     <div className="w-full h-full flex  justify-end xl:justify-center items-center flex-1/2">
    //       <img
    //         src="/main/bigmain.png"
    //         className="aspect-auto   lg:h-[558px] lg:w-[574px] xl:h-[700px] xl:w-[800px]  "
    //         alt=""
    //       />
    //     </div>
    //     <aside className="flex order-1 flex-1/2  flex-col gap-8 ">
    //       <div className="flex ">
    //         <span className="flex flex-row-reverse justify-start  items-start font-extrabold text-5xl text-green-500">
    //           گیاه لند!
    //           <h1 className="mx-1 text-black">خرید راحت ‌با </h1>
    //         </span>
    //       </div>
    //       <article className=" text-lg lg:w-[539px]  text-gray-700 font-semibold">
    //         با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه
    //         استفاده کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت
    //         مشاوره بگیری.
    //       </article>
    //       <div className="h-[56px] lg:w-[539px] flex w-full gap-3">
    //         <button className="h-full w-1/2 lg:w-[258px] text-white bg-green-700 rounded-lg">
    //           گیاهان تخفیف دار
    //         </button>
    //         <button className="h-full cursor-pointer gap-2 justify-center w-1/2 lg:w-[258px] flex items-center  bg-white border  border-dashed border-green-800 rounded-lg text-green-700 ">
    //           مشاوره با گیاه پزشک
    //           <div className=" relative top-[2px]">
    //             <NextImage width={16} height={16} url="/header/Vector.svg" />
    //           </div>
    //         </button>
    //       </div>
    //       <div className="flex  gap-6  justify-between w-2/3">
    //         {/* Plants Counter */}
    //         <div className="flex items-center gap-4">
    //           <div className="flex flex-col gap-1">
    //             <span className="text-4xl font-semibold text-green-900">
    //               {plantsCount}+
    //             </span>
    //             <span className="text-lg text-gray-700">گیاه خانگی</span>
    //           </div>
    //         </div>

    //         {/* Customers Counter */}
    //         <div className="flex items-center gap-4">
    //           <div className="flex flex-col gap-1">
    //             <span className="text-4xl font-semibold text-green-900">
    //               {customersCount}+
    //             </span>
    //             <span className="text-lg text-gray-700">گیاه تزيینی</span>
    //           </div>
    //         </div>

    //         {/* Orders Counter */}
    //         <div className="flex items-center gap-4">
    //           <div className="flex flex-col gap-1">
    //             <span className="text-4xl font-semibold text-green-900">
    //               {ordersCount}+
    //             </span>
    //             <span className="text-lg text-gray-700">گیاه کادویی</span>
    //           </div>
    //         </div>
    //       </div>
    //     </aside>
    //   </div>
    // </main>
    <>
    <Desktop/>
    <Mobile/>
    </>
  );
}
