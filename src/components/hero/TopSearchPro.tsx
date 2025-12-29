"use client";

import { top_search_Pro } from "@/assets/all_data";
import React from "react";
import Btn from "./Btn";
import Image from "next/image";

export default function TopSearchPro() {
  const searchData2 = [
    {
        id : 2,
        title_1 : 'Xiaomi',
        title_2 : 'FlipBuds Pro',
        price : '$299 USD',
        img :'/top-search-pro/top-search-2.png'
    }
  ]
  return (
    <div className="flex flex-col gap-5">
      {top_search_Pro.map((searchPro) => (
        <div key={searchPro.id} className="rounded-md overflow-hidden relative z-99 bg-slate-900 shadow-sm p-10">
          <p className="text-[14px] font-medium leading-[1.05rem] text-[#EBC80C] mb-1.5">{searchPro.subtitle}</p>
          <h4 className="text-[24px] leading-8 text-white/80 mb-4.5">{searchPro.title1} <br /> {searchPro.title2}</h4>
          <Btn />
          <div className="bg-amber-300 absolute top-5 right-5 rounded-md p-3 text-slate-600 font-medium uppercase">
            {searchPro.off_Num}
          </div>
          <div className="max-w-48.5 w-full -z-1 absolute bottom-0 right-0">
            <Image src={searchPro.img} alt="search-pro-1" className="w-full h-full" width={400} height={500} />
          </div>
        </div>
      ))}
      {searchData2.map((searchPro2) => (
      <div key={searchPro2.id} className="flex items-center overflow-hidden relative z-99 hover:bg-slate-900 hover:text-white/80 text-slate-900 shadow-sm justify-center gap-5 px-8 py-9 bg-[#F2F4F5] rounded-md">
        <div className="w-40 h-40">
          <Image src={searchPro2.img} alt="search-product-2" className="w-full h-full" width={160} height={160} />
        </div>
        <div className="whitespace-nowrap">
          <h4 className="text-[24px] leading-8 whitespace-nowrap mb-4.5">{searchPro2.title_1} <br /> {searchPro2.title_2}</h4>
          <span className="text-[18px] block leading-6 font-semibold mb-5">{searchPro2.price}</span>
          <Btn />
        </div>
      </div>
      ))}
    </div>
  );
}
