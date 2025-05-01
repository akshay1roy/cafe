import React from "react";
import { MapPin, Clock, User2, Car, ArrowRight } from "lucide-react";
import services from "../assets/services.png";

export default function Services() {
  const schedules = [
    {
      driver: "Ravi Kumar",
      time: "8:00 AM - 12:00 PM",
      from: "Connaught Place",
      to: "South Extension",
      vehicle: "Honda City",
    },
    {
      driver: "Neha Sharma",
      time: "12:30 PM - 4:30 PM",
      from: "Rajouri Garden",
      to: "Saket",
      vehicle: "Maruti Swift",
    },
    {
      driver: "Aman Verma",
      time: "5:00 PM - 9:00 PM",
      from: "Karol Bagh",
      to: "Cyber Hub",
      vehicle: "Hyundai Creta",
    },
    {
      driver: "Priya Mehta",
      time: "7:00 AM - 11:00 AM",
      from: "Janakpuri",
      to: "Noida Sector 62",
      vehicle: "Toyota Glanza",
    },
    {
      driver: "Vikram Chauhan",
      time: "1:00 PM - 5:00 PM",
      from: "Dwarka",
      to: "Gurgaon Phase 3",
      vehicle: "Kia Seltos",
    },
    {
      driver: "Sneha Rathi",
      time: "3:30 PM - 8:30 PM",
      from: "Vasant Kunj",
      to: "Connaught Place",
      vehicle: "Hyundai i20",
    },
    {
      driver: "Karan yadav",
      time: "9:00 AM - 1:00 PM",
      from: "East of Kailash",
      to: "Lajpat Nagar",
      vehicle: "Maruti Baleno",
    },
    {
      driver: "Divya Kapoor",
      time: "10:30 AM - 2:30 PM",
      from: "Ashok Vihar",
      to: "Green Park",
      vehicle: "Honda Amaze",
    },
    {
      driver: "Rohit ram",
      time: "6:00 PM - 10:00 PM",
      from: "Sarai Kale Khan",
      to: "Dwarka Mor",
      vehicle: "Tata Punch",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Experience the best way to explore, book, and enjoy cafes near you.
        </p>

        {/* 🔥 Driver Schedules */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
             Today's Driver Schedules
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {schedules.map((schedule, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <User2 size={20} />
                  <span className="font-semibold text-yellow-600">{schedule.driver}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <Clock size={18} />
                  <span>{schedule.time}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 mb-1">
                  <MapPin size={18} />
                  <span>
                    {schedule.from}{" "}
                    <ArrowRight className="inline-block mx-1" size={16} />{" "}
                    {schedule.to}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-pink-600">
                  <Car size={18} />
                  <span>{schedule.vehicle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition">
            Explore Cafes
          </button>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            All-in-One Cafe Booking Platform
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're looking for a cozy spot to work, hang out with
            friends, or plan a meeting — our platform helps you find and reserve
            the perfect cafe in seconds. With secure payments, verified reviews,
            and location-based search, we make cafe booking effortless.
          </p>
          <img
            src={services}
            alt="Services Illustration"
            className="mx-auto w-full max-w-4xl rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
