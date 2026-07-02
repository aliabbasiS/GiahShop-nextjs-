"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NextImage from "../../../../Components/imagemaker";
import HeaderDrawer from "./headerdrawer";
import Cookies from "js-cookie";

type HeaderProps = {
  classes?: string;
};

export default function Header({ classes }: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
    
      const loggedIn = localStorage.getItem("isLoggedIn") || Cookies.get("isLoggedIn");
      const user = localStorage.getItem("currentUser") || Cookies.get("currentUser");
      
      if (loggedIn === "true" && user) {
        setIsLoggedIn(true);
        try {
          const userData = JSON.parse(user);
          setUserName(userData.number || userData.email || "کاربر");
        } catch (error) {
          console.error("خطا در پارس اطلاعات کاربر:", error);
        }
      } else {
        setIsLoggedIn(false);
        setUserName("");
      }
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    // پاک کردن اطلاعات از localStorage و Cookie
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("user");
    Cookies.remove("isLoggedIn");
    Cookies.remove("currentUser");
    Cookies.remove("user");
    
    setIsLoggedIn(false);
    setUserName("");
    router.push("/auth/login");
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className={`flex flex-col border ${classes ?? ""}`}>
      <article className="flex justify-between bg-white items-center px-8 lg:px-18 py-6">
        <div className="flex gap-6">
          {/* burgermenu */}
          <button
            onClick={openDrawer}
            className="border flex lg:hidden p-2 rounded-lg bg-gray-200"
          >
            <NextImage
              url="/header/menu.png"
              width={24}
              height={24}
              alt="menu"
            />
          </button>
          <span className="mr-3 relative text-2xl font-bold text-green-600">
            گیاه لند
          </span>
          <nav className="items-center lg:flex hidden gap-10">
            <button className="text-lg font-semibold cursor-pointer text-green-600">
              صفحه ی اصلی
              <Link href="/main" />
            </button>
            <button className="text-lg font-semibold text-black">
              گیاه پزشک
              <Link href="/main/medical" />
            </button>
            <button className="text-lg font-semibold text-black">
              وبلاگ <Link href="/main/weblog" />
            </button>
            <button className="cursor-pointer">
              <button className="text-lg font-semibold text-black">
                درباره ما <Link href="/main/aboutus" />
              </button>
            </button>
          </nav>
        </div>
        
        <div className="flex gap-3">
          {/* search icon */}
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
              alt="cart"
            />
          </button>

          {isLoggedIn ? (
            <div className="relative group">
              <button className="border py-1 px-4 text-nowrap rounded-lg flex items-center gap-2 bg-green-600 text-white border-green-600 hover:bg-green-700 transition">
                <NextImage
                  url="/header/login.svg"
                  width={20}
                  height={18}
                  alt="profile"
                />
                <span className="hidden lg:inline font-semibold">
                  سلام {userName}
                </span>
              </button>
              
              {/* منوی dropdown */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block z-50 border">
                <div className="py-2">
                  <div className="px-4 py-2 border-b bg-gray-50">
                    <p className="text-sm text-gray-600">خوش آمدی</p>
                    <p className="font-bold text-green-600">{userName}</p>
                  </div>
                  <Link href="/dashboard">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                       داشبورد
                    </div>
                  </Link>
                  <Link href="/dashboard/profile">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      👤 پروفایل من
                    </div>
                  </Link>
                  <Link href="/dashboard/orders">
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      🛒 سفارشات من
                    </div>
                  </Link>
                  <hr className="my-1" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-right px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    🚪 خروج از حساب
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/auth/login">
              <button className="border py-1 px-3 text-nowrap rounded-lg flex text-green-700 font-semibold items-center gap-1.5 border-green-700 hover:bg-green-50 transition">
                <NextImage
                  url="/header/login.svg"
                  width={20}
                  height={18}
                  alt="login"
                />
                <span className="hidden lg:inline">ورود / ثبت نام</span>
              </button>
            </Link>
          )}
        </div>
      </article>
      
      {/* searchbar موبایل */}
      <div className="w-full lg:hidden flex py-2 pb-6 bg-white lg:px-16 px-6">
        <div className="border-none gap-2 flex items-center text-gray-700 px-6 text-lg outline-none h-12 rounded-2xl bg-gray-300 w-full">
          <img src="/header/search.png" alt="search" />
          <input
            type="text"
            placeholder="جستجو گیاه"
            className="border-none flex items-center text-gray-700 text-lg outline-none h-12 rounded-2xl bg-gray-300 w-full"
          />
        </div>
      </div>

      {/* Drawer */}
      <HeaderDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </header>
  );
}