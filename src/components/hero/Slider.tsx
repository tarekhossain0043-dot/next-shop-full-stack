"use client";

import React from "react";
import Btn from "./Btn";
import Image from "next/image";

export default function ComponentName() {
  return (
    <div>
    <div className="flex items-center justify-between p-14 rounded-sm shadow-sm">
      {/* left area */}
      <div>
        <p className="text-[14px] mb-0 font-semibold text-[20px] text-[#2484C2] uppercase relative after:absolute after:content-[''] after:top-1/2 after:left-0 after:w-10 after:h-0.5 pl-12 after:bg-[#2484C2] after:transform -after:translate-y-1/2 after:pr-1 text-[#2484C2]">
          THE BEST PLACE TO PLAY
        </p>
        <h3 className="text-[48px] mb-4 leading-14 font-semibold text-[#191C1F] capitalize">
          Xbox Consoles
        </h3>
        <p className="text-[18px] max-w-89 w-full leading-6 text-[#475156] mb-6 font-normal">
          Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for
          $2 USD.
        </p>
        <Btn />
      </div>
      <div className="relative">
        <div className="w-25 h-25 flex absolute right-0 top-0 bg-[#2DA5F3] ring-4 ring-white/80 shadow-sm rounded-full items-center justify-center text-white font-medium">
          $299
        </div>
        <Image
          src="/slider/slider-1.png"
          alt="slider-img"
          width={400}
          height={400}
        />
      </div>
    </div>
    </div>
  );
}
