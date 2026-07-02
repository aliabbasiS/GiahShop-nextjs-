import Link from "next/link";
import NextImage from "../../Components/imagemaker";

import notfound from "/public/404/Mountain.png";
import notfoundtrees from "/public/404/Trees.png";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gray-50 px-4">
      <div className="relative w-[610px] h-[640px]">
        <NextImage
          url={notfound}
          width={610}
          height={640}
          classes="absolute inset-0"
        />

        <NextImage
          url={notfoundtrees}
          width={610}
          height={640}
          classes="absolute top-[316px]"
        />
      </div>

      <h2 className="mt-6 text-2xl font-semibold">
        صفحه مورد نظر شما یافت نشد!
      </h2>

     

      <Link
        href="/"
        className="mt-8 rounded-lg bg-green-600 px-6 py-3 text-white transition hover:bg-green-700"
      >
        بریم صحفه اصلی
      </Link>
    </div>
  );
}