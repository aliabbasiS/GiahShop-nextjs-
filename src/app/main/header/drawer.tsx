"use client"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { useState } from "react"

const CategoryMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative flex items-center mx-10 gap-12"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={false}>
        <DropdownMenu.Trigger asChild>
          <span className="text-base font-semibold flex items-center cursor-pointer">
            دسته بندی
          </span>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            side="bottom"
            align="start"
            className="-ml-36  my-4 translate-x-[-20px] text-right flex flex-row-reverse gap-6 bg-white border p-4 rounded-md shadow-lg z-50 rtl"
          >
            <div>
              <DropdownMenu.Label className="font-bold mb-1">شلوار</DropdownMenu.Label>
              {["مام استایل", "نیم بگ", "بوت کات", "اسکینی", "بگ", "جاگر", "کارگو"].map((item) => (
                <DropdownMenu.Item
                  key={item}
                  className="justify-end text-gray-600 hover:text-black cursor-pointer text-sm py-1"
                >
                  {item}
                </DropdownMenu.Item>
              ))}
            </div>

            <div>
              <DropdownMenu.Label className="font-bold mb-1">شومیز</DropdownMenu.Label>
              {["ساده", "دکمه دار", "مجلسی", "بارداری"].map((item) => (
                <DropdownMenu.Item
                  key={item}
                  className="justify-end text-gray-600 hover:text-black cursor-pointer text-sm py-1"
                >
                  {item}
                </DropdownMenu.Item>
              ))}

              <DropdownMenu.Label className="font-bold mt-3 mb-1">ست ها</DropdownMenu.Label>
              {["هودی و شلوار", "شومیز وشلوار"].map((item) => (
                <DropdownMenu.Item
                  key={item}
                  className="justify-end text-gray-600 hover:text-black cursor-pointer text-sm py-1"
                >
                  {item}
                </DropdownMenu.Item>
              ))}
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      <span className="font-semibold "> فروشگاه</span>
          <span className="font-semibold ">ارتباط با ما</span>
    </div>
    
  )
}

export default CategoryMenu
