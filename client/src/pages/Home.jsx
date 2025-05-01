import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import car from "../assets/car.jpg";
import first from "../assets/first.jpeg";
import fourth from "../assets/fourth.jpeg";
import third from "../assets/third.jpeg";
import Banner from "./banner";
import UserBooking from "./UserBooking"

const slidesData = [
  {
    image: fourth,
    title: "Luxury Cafe",
    description: "Enjoy world-class coffee and ambiance.",
  },
  {
    image: third,
    title: "Delicious Meals",
    description: "Savor the taste of gourmet dishes.",
  },
  {
    image: car,
    title: "Fast Delivery",
    description: "We deliver your orders on time, every time.",
  },
  {
    image: first,
    title: "Cozy Environment",
    description: "Relax in our peaceful and cozy settings.",
  },
];

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px]">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full rounded-lg shadow-lg object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                  <h2 className="text-3xl sm:text-6xl font-bold mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-sm text-yellow-500 sm:text-lg">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <UserBooking/>
      <Banner/>
    </>
  );
}
