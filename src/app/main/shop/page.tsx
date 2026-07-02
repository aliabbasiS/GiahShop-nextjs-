"use client"
import NextImage from "../../../../Components/imagemaker";
import houseicon from "/public/shopingcart/Bokta/houseicon.png";

import bigplant from "../../../../public/shopingcart/Bokta/bigpicture.png";

import littlepic from "../../../../public/shopingcart/Bokta/m1.svg";

import littlepic2 from "../../../../public/shopingcart/Bokta/m2.svg";
import littlepic3 from "../../../../public/shopingcart/Bokta/m3.svg";

import littlepic4 from "../../../../public/shopingcart/Bokta/m4.svg";

import dash from "../../../../public/shopingcart/Bokta/keyboard_arrow_left.png";
import { useState } from "react";












const Shops = () => {
  const [BaseUrl,changeBaseUrl]=useState('')




  return (
    <div className="bg-white px-8 lg:px-28 flex-col w-full pt-14 lg:flex hidden my-10 h-full">
      {/* arrow key adressing */}
      <div
        style={{ color: "#417F56" }}
        className="flex gap-2 text-center items-center gap3 font-bold"
      >
        <NextImage url={houseicon} width={33} height={34} />
        <span>خانه</span>

        <NextImage url={dash} width={24} height={24} />

        <span>گیاه طبیعی</span>
        <NextImage url={dash} width={24} height={24} />
        <span>گیاه یوکا </span>
      </div>

    <div className='w-full flex'>
      <div className='w-1/3 flex flex-col'>
        <NextImage url={bigplant}/>
        <div className="flex lg:flex-row flex-col mt-5 gap-3 ">
          

          <NextImage url={littlepic} width={100} height={100} />
          
          <NextImage url={littlepic2} width={100} height={100}   />

          <NextImage url={littlepic3} width={100} height={100}   />

          <NextImage url={littlepic4} width={100} height={100}   />

        </div>
      </div>


    </div>

    </div>
  );
};

export default Shops;
