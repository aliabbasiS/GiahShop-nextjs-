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
    <main className="flex-col px-8 lg:hidden flex">
      {/* mainphoto with starts */}
      <div className="flex flex-col">
        {/* picture */}
        <div className="w-full flex  lg:hidden ">
          <div className="rounded-full flex justify-center ">
            {/* stars */}
            <div className="flex py-10  justify-start items-start">
              <div className="py-6">
                <NextImage url="/mainphone/starbig.svg" width={30} />
              </div>
              <div>
                <NextImage url="/mainphone/starbig.svg" width={20} />
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
                <NextImage url="/mainphone/starbig.svg" width={30} />
              </div>
              <div>
                <NextImage url="/mainphone/starbig.svg" width={20} />
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
      <div className="flex w-full  gap-6  justify-between ">
            {/* Plants Counter */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold text-green-900">
                  {plantsCount}+
                </span>
                <span className="text-lg text-gray-700 font-semibold">گیاه خانگی</span>
              </div>
            </div>

            {/* Customers Counter */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold text-green-900">
                  {customersCount}+
                </span>
                <span className="text-lg text-gray-700 font-semibold">گیاه تزيینی</span>
              </div>
            </div>

            {/* Orders Counter */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold text-green-900">
                  {ordersCount}+
                </span>
                <span className="text-lg text-gray-700 font-semibold">گیاه کادویی</span>
              </div>
            </div>
          </div>
    </main>
  );
};
export default Mobile;
