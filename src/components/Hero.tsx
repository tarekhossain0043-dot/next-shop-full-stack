"use client";

import React from "react";
import Slider from "@/components/hero/Slider";
import TopSearchPro from "./hero/TopSearchPro";

export default function ComponentName() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 xl:grid-cols-[7fr_5fr] gap-5">
        {/* slider area  */}
        <div>
          <Slider />
        </div>
        {/* top searching product */}
        <div>
          <TopSearchPro />
        </div>
      </div>
    </div>
  );
}
