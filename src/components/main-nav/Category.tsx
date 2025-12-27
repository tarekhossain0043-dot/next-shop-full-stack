"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function Category() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  return (
    <div>
      {/* head */}
      <div
        className={`flex items-center max-w-40 justify-center px-4 py-4 text-[14px] leading-5 capitalize cursor-pointer transition-all duration-300 ease-in-out font-medium text-slate-900 ${
          categoryOpen ? "text-white/80 bg-[#FA8232]" : "bg-slate-100"
        } gap-2`}
        onClick={() => setCategoryOpen((prev) => !prev)}
      >
        <span>all category</span>
        <span>
          <ChevronDown
            className={`w-5 h-5 transition-all duration-300 ease-in-out ${
              categoryOpen ? "rotate-180 text-white/80" : "text-slate-900"
            } cursor-pointer`}
          />
        </span>
      </div>
    </div>
  );
}
