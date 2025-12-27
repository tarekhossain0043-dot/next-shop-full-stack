"use client";

import { LucideRefreshCw } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CiCircleAlert, CiCircleInfo } from "react-icons/ci";
import { FaHeadphonesAlt, FaMap } from "react-icons/fa";
import { FaCodeCompare, FaHeadphonesSimple, FaI } from "react-icons/fa6";
import { PiHeadphones, PiMapPinLine } from "react-icons/pi";
import { SlRefresh } from "react-icons/sl";

export default function OrderDetails() {
  return (
    <div className="hidden md:flex items-center gap-5">
      <Link
        href="/track-order"
        className="text-[14px] flex items-center gap-2 leading-5 text-[#5F6C72] hover:text-[#FA8232] cursor-pointer capitalize transition-all duration-300 ease-in-out "
      >
        <PiMapPinLine className="w-5 h-5" />
        <span className="font-normal text-[14px] leading-5">Track Order</span>
      </Link>
      <Link
        href="/compare"
        className="text-[14px] flex items-center gap-2 leading-5 text-[#5F6C72] hover:text-[#FA8232] cursor-pointer capitalize transition-all duration-300 ease-in-out "
      >
        <SlRefresh className="w-5 h-5" />
        <span className="font-normal text-[14px] leading-5">Compare</span>
      </Link>
      <Link
        href="/customer-support"
        className="text-[14px] flex items-center gap-2 leading-5 text-[#5F6C72] hover:text-[#FA8232] cursor-pointer capitalize transition-all duration-300 ease-in-out "
      >
        <PiHeadphones className="w-5 h-5" />
        <span className="font-normal text-[14px] leading-5">
          Customer support
        </span>
      </Link>
      <Link
        href="/track-order"
        className="text-[14px] flex items-center gap-2 leading-5 text-[#5F6C72] hover:text-[#FA8232] cursor-pointer capitalize transition-all duration-300 ease-in-out "
      >
        <CiCircleInfo className="w-5 h-5" />
        <span className="font-normal text-[14px] leading-5">need help</span>
      </Link>
    </div>
  );
}
