import React from "react";

import services from "../assets/services.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

// import { useContext } from "react";
// import CafeAppContextProvider from "../context/AuthContext";

export default function Banner() {

    // 
  const banners = [
    {
      image: services,
      title: "Welcome to Our Cafe",
      subtitle: "Experience the best food and ambiance",
      description:
        "Step into a cozy space where comfort meets flavor. Whether you’re here for a quick coffee or a long conversation over brunch, we’ve crafted every detail to feel like home.",
      buttonText: "Explore Menu",
    },
    {
      image: banner2,
      title: "Fresh Ingredients",
      subtitle: "Only the best for your taste buds",
      description:
        "We believe great meals start with great ingredients. That’s why we use locally-sourced, organic produce and high-quality grains, dairy, and meat to bring you the best.",
      buttonText: "Our Ingredients",
    },
    {
      image: banner3,
      title: "Book a Table Now",
      subtitle: "Your table is waiting",
      description:
        "Avoid the wait — reserve your seat in advance and enjoy a seamless dining experience. Whether it’s a romantic dinner or a family get-together, we’re ready for you.",
      buttonText: "Reserve Now",
    },
  ];

  return (
    <div className="w-full px-6 py-12 md:px-[5%] space-y-16">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
        <span className="text-yellow-500">Discover</span> Our Cafe
      </h2>
      <p className="text-gray-600 mx-auto w-3/4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vero
        reprehenderit maxime, mollitia hic aliquam rem accusamus, odio delectus,
        esse iste suscipit expedita!
      </p>
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-10`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">
              {banner.title}
            </h2>
            <h3 className="text-lg text-gray-600 mb-4 font-medium">
              {banner.subtitle}
            </h3>
            <p className="text-base  text-gray-700 mb-6 leading-relaxed">
              {banner.description}
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300">
              {banner.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
