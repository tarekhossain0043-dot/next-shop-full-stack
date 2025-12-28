"use client";

import React from "react";
import Slider from "@/components/hero/Slider";

export default function ComponentName() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[8fr_4fr] gap-5">
        {/* slider area  */}
        <div>
          <Slider />
        </div>
        {/* top searching product */}
        <div className="flex flex-col gap-5 w-full">top searching product</div>
      </div>
    </div>
  );
}
