import NextImage from "../../../Components/imagemaker";
import { useEffect, useState } from "react";
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
  return (
    <main className="bg-white flex px-8 lg:px-18  flex-col  pt-14   h-full">
      {/* desktop verion */}
      <div className=" justify-between w-full gap-5 flex-row-reverse lg:flex hidden">
        <div className="w-full h-full flex  justify-end xl:justify-center items-center flex-1/2">
          <img
            src="/main/bigmain.png"
            className="aspect-auto   lg:h-[558px] lg:w-[574px] xl:h-[700px] xl:w-[800px]  "
            alt=""
          />
        </div>
        <aside className="flex order-1 flex-1/2  flex-col gap-8 ">
          <div className="flex ">
            <span className="flex flex-row-reverse justify-start  items-start font-extrabold text-5xl text-green-500">
              گیاه لند!
              <h1 className="mx-1 text-black">خرید راحت ‌با </h1>
            </span>
          </div>
          <article className=" text-lg lg:w-[539px]  text-gray-700 font-semibold">
            با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه
            استفاده کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت
            مشاوره بگیری.
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
          <div className="flex  gap-6  justify-between w-2/3">
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
      <div className="flex justify-between my-10">
        <div className="flex flex-col justify-center items-center gap-5 ">
          <div style={{background:'#E5F2E9'}} className="w-[80px] rounded-full h-[80px] flex justify-center items-center ">
            <NextImage url="/main/credit_card.png" width={40} height={40} />
          </div>
            <h2 className="font-semibold text-2xl">پرداخت درب منزل</h2>
            <span className=" flex text-center font-semibold text-gray-400"> برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت آنلاین امکان پرداخت درب منزل وجود دارد</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <div style={{background:'#E5F2E9'}} className="w-[80px] rounded-full h-[80px] flex justify-center items-center ">
            <NextImage url="/main/credit_card.png" width={40} height={40} />
          </div>
            <h2 className="font-semibold text-2xl"></h2>
            <span className=" flex text-center font-semibold text-gray-400"> برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت آنلاین امکان پرداخت درب منزل وجود دارد</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <div style={{background:'#E5F2E9'}} className="w-[80px] rounded-full h-[80px] flex justify-center items-center ">
            <NextImage url="/main/local_shipping.png" width={40} height={40} />
          </div>
            <h2 className="font-semibold text-2xl">تحویل درب</h2>
            <span className=" flex text-center font-semibold text-gray-400"> با ایجاد آدرس منزل خود در پروفایل کاربری،محصول خود را درب منزل تحویل بگیرید  </span>
        </div>
      </div>
    </main>
  );
};
export default Desktop;
