"use client";

import React from "react";
import Btn from "./Btn";
import Image from "next/image";
import { hero_slider } from "@/assets/all_data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/swiper.css';
import 'swiper/css/pagination'
import { disconnect } from "process";

export default function Slider() {

  return (
    <div className="bg-slate-100 relative max-w-4xl max-h-128 overflow-hidden rounded-md">
      <Swiper
        modules={[Pagination,Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true,dynamicBullets :true,dynamicMainBullets : 3 }}
        speed={2000}
        loop = {true}
        autoplay={{ delay: 2000,disableOnInteraction: true }}
      >
        {hero_slider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="flex items-center justify-between p-14 rounded-sm shadow-sm">
              {/* left area */}
              <div>
                <p className="text-[14px] whitespace-nowrap max-[370px]:whitespace-normal mb-0 font-semibold text-[20px] text-[#2484C2] uppercase relative after:absolute after:content-[''] after:top-1/2 after:left-0 after:w-10 after:h-0.5 pl-12 after:bg-[#2484C2] after:transform -after:translate-y-1/2 after:pr-1 text-[#2484C2]">
                  {slider.subTitle}
                </p>
                <h3 className="text-[48px] mb-4 leading-14 font-semibold text-[#191C1F] capitalize">
                  {slider.title}
                </h3>
                <p className="text-[18px] max-w-89 w-full leading-6 text-[#475156] mb-6 font-normal">
                  {slider.desc}
                </p>
                <Btn />
              </div>
              <div className="relative">
                <div className="w-15 h-15 flex absolute right-0 top-0 hidden min-[350px]:flex bg-[#2DA5F3] ring-4 ring-white/80 shadow-sm rounded-full items-center justify-center text-white font-medium">
                  {slider.number}
                </div>
                <Image
                  src={slider.img}
                  alt="slider-img"
                  objectFit="cover"
                  width={400}
                  height={400}
                  priority = {true}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
