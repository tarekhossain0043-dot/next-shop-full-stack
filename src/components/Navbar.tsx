"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./header/SearchBox";
import SocalBox from "./header/SocalBox";
import Btn from "./header/Btn";
import { motion } from "motion/react";
import MainNav from "./MainNav";

export default function Navbar() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-3 w-full border-b border-slate-100"
      >
        <div className="container flex items-center justify-between">
          {/* left area */}
          <div className="flex items-center gap-1">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="tanvir-shop logo"
                width={30}
                height={30}
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </Link>
            <p className="mb-0 hidden min-[480px]:block text-[20px] font-medium cursor-pointer transition-colors duration-500 ease-in-out hover:text-transparent hover:bg-clip-text text-slate-700 hover:bg-linear-to-r from-indigo-400 to-purple-400 uppercase tracking-wider">
              trendlama.
            </p>
          </div>
          {/* right area */}
          <div className="flex flex-1 max-w-2xl justify-end w-full items-center gap-5">
            <SearchBox />
            <SocalBox />
            <Btn />
          </div>
        </div>
      </motion.div>
      <MainNav />
    </>
  );
}
