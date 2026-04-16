"use client";

import { useState } from "react";
import Link from "next/link";
import "swiper/css";
import { MoveRight, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonial } from "@/constant/constant";
import { Autoplay } from "swiper/modules";

export default function ClientReview() {
  const [activeSlide, setActiveSlide] = useState<number>(1);

  return (
    <div className=" p-5 sm:p-15 flex justify-between items-center flex-wrap">
      <div className="sm:w-[45%]  mb-5">
        <h2 className="highlightFont text-white text-6xl lg:text-9xl font-bold mb-2">
          CLIENT <br /> REVIEWS
          <span className="text-(--highlightColor)">.</span>
        </h2>
        <p className="text-2xl">What our happy clients say </p>
        <Link
          href={`/contact`}
          className="buttonHover w-50 h-10 font-medium p-5 my-5 text-black bg-white flex items-center  rounded-4xl"
        >
          <div className=" flex items-center ">
            <p className="mr-1">Send a message</p>
            <MoveRight />
          </div>
        </Link>
      </div>
      <div className="  ">
        <Swiper
          className="sm:w-60 md:w-100 md:h-120   overflow-visible"
          modules={[Autoplay]}
          // direction={WindowWidth() ? "horizontal" : "vertical"}
          spaceBetween={10}
          // slidesPerView={WindowWidth() ? 1 : 3}
          centeredSlides={true}
          // centeredSlidesBounds={true}
          // loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={700}
          breakpoints={{
            0: {
              slidesPerView: 1,
              direction: "horizontal",
            },
            768: {
              slidesPerView: 3,
              direction: "vertical",
            },
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          onSwiper={(swiper) => setActiveSlide(swiper.activeIndex)}
        >
          {[...testimonial, ...testimonial].map((review, index) => {
            return (
              <SwiperSlide
                key={index}
                className={` border p-5 pr-10 rounded-lg  boxShadow relative'
              ${
                activeSlide == index
                  ? "scale-90 sm:scale-100 z-10 opacity-100"
                  : "scale-80 opacity-50"
              }
              `}
              >
                <p className="text-xl text-white font-bold mb-2">
                  {review.client}
                </p>
                <p className="text-white">{`"${review.review} "`}</p>
                <div
                  className={`w-2 h-full   rounded-4xl absolute top-0 left-0  transition-all duration-500
                         ${
                           activeSlide == index
                             ? "bg-(--highlightColor)"
                             : "bg-white/30 "
                         }
                  `}
                ></div>
                <div>
                  <Quote
                    className={`absolute top-5 right-5 transition-all duration-500
                    ${activeSlide == index ? "text-(--highlightColor)" : "text-white"}
                    `}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
