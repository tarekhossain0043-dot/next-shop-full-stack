"use client";

import Link from "next/link";
import React from "react";
import { FaHeadphonesAlt, FaMap } from "react-icons/fa";
import { FaCodeCompare, FaI } from "react-icons/fa6";

export default function OrderDetails() {
  return (
    <div className="hidden md:flex items-center gap-5">
      <Link
        href="/track-order"
        className="text-[14px] flex items-center gap-2 leading-5 text-[#5F6C72] hover:text-[#FA8232] cursor-pointer capitalize transition-all duration-300 ease-in-out "
      >
        <FaMap className="w-5 h-5" />
        <span className="font-normal text-[14px] leading-5">Track Order</span>
      </Link>
      <Link
        href="/compare"
        className="text-[14px] flex items-center gap-2 leading-5 text-[#5F6C72] hover:text-[#FA8232] cursor-pointer capitalize transition-all duration-300 ease-in-out "
      >
        <FaCodeCompare className="w-5 h-5" />
        <span className="font-normal text-[14px] leading-5">Compare</span>
      </Link>
      <Link
        href="/customer-support"
        className="text-[14px] flex items-center gap-2 leading-5 text-[#5F6C72] hover:text-[#FA8232] cursor-pointer capitalize transition-all duration-300 ease-in-out "
      >
        <FaHeadphonesAlt className="w-5 h-5" />
        <span className="font-normal text-[14px] leading-5">
          Customer support
        </span>
      </Link>
      <Link
        href="/track-order"
        className="text-[14px] flex items-center gap-2 leading-5 text-[#5F6C72] hover:text-[#FA8232] cursor-pointer capitalize transition-all duration-300 ease-in-out "
      >
        <FaI className="w-5 h-5" />
        <span className="font-normal text-[14px] leading-5">need help</span>
      </Link>
    </div>
  );
}
