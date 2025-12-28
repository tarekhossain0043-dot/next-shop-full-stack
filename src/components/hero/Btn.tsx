"use client";

import { ArrowBigRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function Btn() {
  return (
    <div>
      <div
        className={`flex items-center max-w-40 justify-center gap-2 bg-slate-200 hover:bg-[#FA8232] hover:text-white/80 px-4 py-4 text-[14px] leading-5 capitalize cursor-pointer transition-all duration-300 ease-in-out font-medium text-slate-900 `}
      >
        <span>all category</span>
        <span>
          <ChevronRight
            className={`w-5 h-5 transition-all font-normal duration-300 ease-in-out cursor-pointer`}
          />
        </span>
      </div>
    </div>
  );
}
