"use client";
import React from "react";
import { engToFarsiNumber } from "./Carousele";
import NextImage from '../../../../Components/imagemaker';
import instagram from '../../../../public/Footersvg/instagram.svg'
import linkdin from '../../../../public/Footersvg/linkdin.svg'
import namad from '../../../../public/Footersvg/namad.svg'
import  telegram from '../../../../public/Footersvg/telegram.svg'


 const Footer: React.FC = () => {
  return (
    <footer className="w-full h-fit lg:h-[352px] px-8 gap-10 lg:px-18  py-6  bg-gray-100 justify-between flex-col-reverse lg:flex-row flex  p-4">
      <div className="flex flex-col w-full  lg:w-1/3 gap-4 justify-between  h-full ">
        <div className="flex gap-3 flex-col">
          <span className="  relative  text-2xl font-bold text-green-600">
            گیاه لند
          </span>

          <p className="font-semibold text-gray-600  ">
            گیاه لند سعی بر این دارد با ارائه خدمات نوین در حوزه فروش گیاهان
            باعث راحتی شما در خرید انواع گیاه شود.تنوع گیاهان و همچنین ایجاد
            بستری مناسب برای مشاوره با گیاه پزشک از دیگر مزیت های گیاه لند
            میباشد.
          </p>
        </div>
        <div className="flex justify-between ">
          <div className="flex flex-col font-semibold text-gray-600">
            <span>تلفن پشتیبانی: {engToFarsiNumber("0212444")}</span>
			<div className="flex gap-4 mt-6">
				<NextImage width={24} height={24}  url={instagram}/>
				<NextImage width={24} height={24}  url={telegram}/>

				<NextImage width={24} height={24}  url={linkdin}/>

			</div>
          </div>
          <NextImage url={namad} width={56} height={102}/>
        </div>
      </div> 
	  <div className=" grid grid-cols-3 grid-rows-1 gap-5 justify-center mt-5 text-gray-600 w-full lg:w-3/5  ">
	  <div>
		<h2 className="font-bold  border-b-2">اپارتمانی</h2>
		<ul className="flex flex-col gap-3 mt-5 font-semibold">
			<li>بابا آدم</li>
			<li>یوکا</li>
			<li>سانسوریا</li>
		</ul>
	  </div>
	  <div>
		<h2 className="font-bold  border-b-2">تزيينی</h2>
		<ul className="flex flex-col gap-3 mt-5 font-semibold">
			<li> یشم</li>
			<li>کراسولا</li>
			<li>کراسولا حرفه ایی</li>
		</ul>
	  </div>
	  <div>
		<h2 className="font-bold  border-b-2">کادویی</h2>
		<ul className="flex flex-col gap-3 mt-5 font-semibold">
			<li> آنتوریوم</li>
			<li>بونسای</li>
			<li>بنت قنسول</li>
		</ul>
	  </div>
		
	  </div>
    </footer>
  );
};

export default Footer;
