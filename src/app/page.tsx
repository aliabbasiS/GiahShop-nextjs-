import Image from "next/image";
import NextImage from "../../Components/imagemaker";

export default function Home() {
  return (
    <main className="bg-white flex px-8 lg:px-18   pt-14   h-full">
      <div className="flex justify-between w-full gap-5 flex-row-reverse">
        <div className="w-full h-full flex  justify-center xl:justify-end items-center flex-1/2">
          <img
            src="/main/bigmain.png"
            className="aspect-auto   lg:h-[558px] lg:w-[574px]"
            alt=""
          />
        </div>
        <aside className="flex order-1 flex-1/2  flex-col gap-8 ">
          <div className="flex " >
            <span className="flex flex-row-reverse justify-start  items-start font-bold text-5xl text-green-500">
              گیاه لند!
              <h1 className="mx-1 text-black">خرید راحت ‌با </h1>
            </span>
          </div>
          <article className=" text-lg">
          با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره بگیری.

          </article>
          <div className="h-[56] lg:w-[258px] w-full">
            <button>گیاهان تخفیف دار</button>

          </div>
        </aside>
      </div>
    </main>
  );
}
