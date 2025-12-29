"use client";

import { features } from "@/assets/all_data";
import React from "react";

export default function Features() {
  return (
    <div className="border border-slate-300 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4 rounded-md mt-5">
      {features.map((feature) => {
        return (
        <div key={feature.id} className="p-4 border-r border-slate-200 last-of-type:border-none flex items-center gap-4">
            <span>
                <feature.icon className="w-10 h-10 stroke-amber-100"/>
            </span>
            <p>{feature.title} <span className="block">{feature.subTitle}</span></p>
        </div>
        )
      })}
    </div>
  );
}
