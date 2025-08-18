"use client";
import { useEffect, useState } from "react";
import NextImage from "../../../Components/imagemaker";
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

const Mobile = () => {
  const plantsCount = useAnimatedCounter(943, 1800);
  const customersCount = useAnimatedCounter(234, 5000);
  const ordersCount = useAnimatedCounter(128, 6000);
  return (
    <main className="flex-col px-8 my-10 lg:hidden flex">
      {/* mainphoto with starts */}
      <div className="flex flex-col">
        {/* picture */}
        <div className="w-full flex  lg:hidden ">
          <div className="rounded-full flex justify-center ">
            {/* stars */}
            <div className="flex py-10  justify-start items-start">
              <div className="py-6">
                <NextImage url="/mainphone/Starbig.svg" width={30} />
              </div>
              <div>
                <NextImage url="/mainphone/Starlittle.svg" width={20} />
              </div>
            </div>
            {/* main image */}
            <img
              className="rounded-full  aspect-square w-2/3 "
              src="/mainphone/giah.jpg"
              alt=""
            />
            {/* stars */}
            <div className="flex py-10 flex-row-reverse justify-end items-end">
              <div className="py-6">
                <NextImage url="/mainphone/Starbig.svg" width={30} />
              </div>
              <div>
                <NextImage url="/mainphone/Starlittle.svg" width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main span and article with two buttons */}
      <div className="flex flex-col my-14 gap-8 items-center justify-center">
        <div className="flex ">
          <span className="flex text-nowrap flex-row-reverse justify-start  items-start font-extrabold text-5xl text-green-500">
            گیاه لند!
            <h1 className="mx-1 text-black">خرید راحت ‌با </h1>
          </span>
        </div>
        <article className=" text-lg lg:w-[539px]  text-gray-700 font-semibold">
          با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده
          کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره
          بگیری.
        </article>
        {/* two buttons */}
        <div className="h-[56px] lg:w-[539px] flex w-full gap-3">
          <button className="h-full w-1/2 lg:w-[258px] text-white bg-green-700 rounded-lg">
            گیاهان تخفیف دار
          </button>
          <button className="h-full cursor-pointer gap-2 justify-center w-1/2 lg:w-[258px] flex items-center  bg-white border  border-dashed border-green-800 rounded-lg text-green-700 ">
            مشاوره با گیاه پزشک
            <div className=" relative top-[2px]">
              <NextImage width={16} height={16} url="/header/Vector.svg" />
            </div>
          </button>
        </div>
      </div>
      {/* Plants Counter */}
      <div className="flex w-full  gap-6  justify-between ">
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
      {/* payment at your house */}
      <div className="lg:flex-row  flex-col flex  justify-between my-20 gap-10 ">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <div
            style={{ background: "#E5F2E9" }}
            className="w-[80px] rounded-full h-[80px] flex justify-center items-center "
          >
            <NextImage url="/main/credit_card.png" width={40} height={40} />
          </div>
          <h2 className="font-semibold text-2xl">پرداخت درب منزل</h2>
          <span className=" flex text-center font-semibold text-gray-400">
            {" "}
            برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت آنلاین امکان پرداخت
            درب منزل وجود دارد
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <div
            style={{ background: "#E5F2E9" }}
            className="w-[80px] rounded-full h-[80px] flex justify-center items-center "
          >
            <NextImage url="/main/validation.png" width={40} height={40} />
          </div>
          <h2 className="font-semibold text-2xl">ضمانت محصول</h2>
          <span className=" flex text-center font-semibold text-gray-400">
            به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل میتوانید مرجوع
            کنید
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <div
            style={{ background: "#E5F2E9" }}
            className="w-[80px] rounded-full h-[80px] flex justify-center items-center "
          >
            <NextImage url="/main/local_shipping.png" width={40} height={40} />
          </div>
          <h2 className="font-semibold text-2xl">تحویل درب</h2>
          <span className=" flex text-center font-semibold text-gray-400">
            {" "}
            با ایجاد آدرس منزل خود در پروفایل کاربری،محصول خود را درب منزل تحویل
            بگیرید{" "}
          </span>
        </div>
      </div>
      {/* two planets leafs */}
      <div className="w-full flex flex-wrap justify-center gap-6 ">
        <NextImage url="/main/leaf1.png" height={240} classes="w-full" />
        <NextImage url="/main/leaf2.png" height={240} classes="w-full" />
      </div>
    </main>
  );
};
export default Mobile;
