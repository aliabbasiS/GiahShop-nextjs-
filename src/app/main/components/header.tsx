'use client';

import Link from "next/link";
import Image from "next/image";
import searchicon from "../../public/header/search.svg";
import NextImage from "../../../../Components/imagemaker";
import HeaderDrawer from "./headerdrawer";
import { useState } from "react";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className="flex flex-col border">
      <article className="flex justify-between bg-white   items-center px-8 lg:px-18  py-6 ">
        <div className="flex gap-6">
            {/* burgermenu */}
          <button onClick={openDrawer} className="border flex lg:hidden p-2 rounded-lg bg-gray-200">
            <NextImage
              url="/header/menu.png"
              width={24}
              height={24}
              alt="search"
            />
          </button>
            <span className="mr-3 relative  text-2xl font-bold text-green-600">گیاه لند</span>
          <nav className=" items-center lg:flex hidden gap-10 ">
            <span className="text-lg font-semibold  text-green-600">
              صحفه ی اصلی
              <Link rel="stylesheet" href="/main" />
            </span>
            <span className="text-lg font-semibold text-black">
              گیاه پزشک
              <Link rel="stylesheet" href="/main/medical" />
            </span>
            <span className="text-lg  font-semibold text-black">
              وبلاگ <Link rel="stylesheet" href="/main/weblog" />
            </span>
            <button className="cursor-pointer">

            <span className="text-lg  font-semibold text-black">
              درباره ما <Link rel="stylesheet" href="/main/aboutus" />
            </span>
            </button>
          </nav>
            </div>
       <div className="flex gap-3">
        {/* sign in menu and search icon */}
          <button className="border hidden lg:inline p-2 rounded-lg border-green-700">
            <NextImage
              url="/header/search.svg"
              width={24}
              height={24}
              alt="search"
              />
          </button>
          <button className="border p-2 rounded-lg border-green-700">
            <NextImage
              url="/header/shopping_cart.svg"
              width={24}
              height={24}
              alt="search"
              />
          </button>
          
          <button className="border py-1 px-3 text-nowrap rounded-lg flex text-green-700 font-semibold items-center gap-1.5 border-green-700">
          <Link href="/SignIn"></Link>
            <NextImage
              url="/header/login.svg"
              width={20}
              height={18}
              alt="search"
              />
            <span className="hidden lg:inline ">ورود / ثبت نام</span>
          </button>
              </div>
      </article>
      {/* searchbar */}
      <div className=" w-full lg:hidden flex  py-2 pb-6 bg-white lg:px-16 px-6">
        <div className="border-none gap-2 flex items-center text-gray-700 px-6 text-lg outline-none h-12 rounded-2xl bg-gray-300 w-full">
          <img src="/header/search.png" alt="" />
          <input
            type="text"
            placeholder="جستجو گیاه "
            className=" border-none flex items-center text-gray-700  text-lg outline-none h-12 rounded-2xl bg-gray-300 w-full"
          />
        </div>
      </div>

      {/* Drawer */}
      <HeaderDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </header>
  );
}
