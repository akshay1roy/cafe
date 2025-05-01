import React from 'react';
import { Coffee, Clock, MapPin, ShieldCheck, Star, Phone } from 'lucide-react';
import services from '../assets/services.png';

export default function Services() {
  const service = [
    {
      title: "Premium Cafes",
      description: "Book from a selection of top-rated cafes known for ambiance and quality.",
      icon: <Coffee className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Instant Booking",
      description: "Reserve your favorite cafe in real-time, without waiting.",
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Location-Based Search",
      description: "Easily discover cafes based on your current location.",
      icon: <MapPin className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Secure Payments",
      description: "Enjoy fast and safe payments with industry-grade encryption.",
      icon: <ShieldCheck className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Top Ratings",
      description: "Choose from cafes rated highly by hundreds of users.",
      icon: <Star className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "24/7 Support",
      description: "Need help? Our team is available round the clock for your service.",
      icon: <Phone className="w-8 h-8 text-yellow-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Experience the best way to explore, book, and enjoy cafes near you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((ser, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-left"
            >
              <div className="flex items-center justify-center mb-4">
                {ser.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
                {ser.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">{ser.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition">
            Explore Cafes
          </button>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">All-in-One Cafe Booking Platform</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're looking for a cozy spot to work, hang out with friends, or plan a meeting — our platform
            helps you find and reserve the perfect cafe in seconds. With secure payments, verified reviews, and
            location-based search, we make cafe booking effortless.
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
