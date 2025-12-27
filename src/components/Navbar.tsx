"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      {/* left area */}
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="tanvir-shop logo"
            width={30}
            height={30}
            className="w-6 h-6 md:w-10 md:h-10"
          />
        </Link>
      </div>
      {/* right area */}
      <div></div>
    </div>
  );
}
