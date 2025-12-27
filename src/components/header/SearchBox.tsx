"use client";

import { Search } from "lucide-react";
import React from "react";

export default function SearchBox() {
  return (
    <div className="max-w-lg flex-1 w-full hidden md:block relative cursor-pointer transition-all ease-in-out">
      <form action="#">
        <input
          type="text"
          className="w-full px-3 pl-10 outline-none py-2 rounded-sm cursor-pointer transition-all duration-500 ease-in-out focus:ring-indigo-300 ring-slate-100 ring-1 shadow-sm text-slate-600 capitalize tracking-wide"
          name="search"
          placeholder="search"
          id="search"
        />
        <label
          htmlFor="search"
          className="absolute top-1/2 left-3 transform -translate-y-1/2"
        >
          <Search className="w-4 h-4 stroke-slate-300 cursor-pointer transition-all duration-300 ease-in-out hover:stroke-amber-200" />
        </label>
      </form>
    </div>
  );
}
