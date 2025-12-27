"use client";

import { Home, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { IoNotifications } from "react-icons/io5";

export default function SocalBox() {
  return (
    <div className="flex items-center gap-5">
      <span className="w-10 h-10 hidden min-[290px]:block bg-slate-100 rounded-full ring-1 ring-slate-300 flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-slate-200 hover:ring-slate-400 hover:stroke-amber-300-300">
        <Home
          className="w-full h-full p-3 transition-all duration-500 ease-in-out cursor-pointer stroke-slate-300 hover:stroke-amber-300"
          size={30}
        />
      </span>
      <span className="w-10 h-10 hidden min-[290px]:block bg-slate-100 rounded-full ring-1 ring-slate-300 flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-slate-200 hover:ring-slate-400 hover:stroke-amber-300-300">
        <IoNotifications
          className="w-full hover:fill-amber-300 fill-slate-300 h-full p-3 transition-all duration-500 ease-in-out cursor-pointer stroke-slate-300 hover:stroke-amber-300"
          size={30}
        />
      </span>
      <span className="w-10 h-10 relative bg-slate-100 rounded-full ring-1 ring-slate-300 flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-slate-200 hover:ring-slate-400 hover:stroke-amber-300-300">
        <ShoppingCart
          className="w-full h-full p-3 transition-all duration-500 ease-in-out cursor-pointer stroke-slate-300 hover:stroke-amber-300"
          size={30}
        />
        <Link
          href="/cart"
          className="mb-0 absolute -top-2 right-0 w-5 h-5 rounded-full bg-amber-300 ring-1 ring-slate-400 cursor-pointer flex items-center justify-center p-2"
        >
          <span className="font-medium text-xs text-white/70">0</span>
        </Link>
      </span>
    </div>
  );
}
