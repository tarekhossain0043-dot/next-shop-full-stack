"use client";

import Link from "next/link";
import React from "react";

export default function Btn() {
  return (
    <button className="capitalize font-medium whitespace-nowrap inline-block cursor-pointer transition-all duration-500 ease-in-out hover:text-transparent hover:bg-clip-text text-slate-700 hover:bg-linear-to-r from-indigo-400 to-purple-400 ">
      <Link href="/signup">sign in</Link>
    </button>
  );
}
