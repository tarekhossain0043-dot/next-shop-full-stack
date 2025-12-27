"use client";

import { PhoneCall } from "lucide-react";
import React from "react";

export default function ContactPhone() {
  return (
    <div className="hidden min-[350px]:block">
      <a
        href="tel:+1-202-555-0104"
        className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-[#FA8232]"
      >
        <PhoneCall className="w-6 h-6 text-slate-900 cursor-pointer" />
        <span className="text-xl font-medium">+1-202-555-0104</span>
      </a>
    </div>
  );
}
