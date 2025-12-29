"use client";

import React from "react";
import CountDownTimers from "./top-deals/CountDownTimer";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";
import Top_Product from "./top-deals/Top_Product";


export default function TopDeals() {
  return (
    <div className="mt-18">
      <div className="flex items-center justify-between gap-5 mb-6">
        <div className="flex items-center">
          <h3 className="pr-4 text-[24px] leading-8 text-[#191C1F] mb-0 capitalize font-semibold">
            Today Best Deals
          </h3>
          <h4 className="font-normal text-[14px] leading-5 text-black mb-0 pr-3">
            Deals ends in:
          </h4>
          <CountDownTimers targetDate="2025-12-31T00:00:00" />
        </div>
        <Link href='#' className="group flex items-center gap-2">
            <span className="font-semibold text-[14px] text-[#2DA5F3] leading-5 capitalize cursor-pointer transition-all duration-300 ease-in-out hover:text-amber-300">Browse All Product</span>
            <span>
                <RxArrowTopRight className="w-5 h-5 text-[#2DA5F3] transition-all ease-in-out duration-300 font-normal group-hover:translate-x-0 -translate-x-4 scale-0 group-hover:scale-100 group-hover:text-amber-300 cursor-pointer" />
            </span>
        </Link>
      </div>
      <Top_Product />
    </div>
  );
}
