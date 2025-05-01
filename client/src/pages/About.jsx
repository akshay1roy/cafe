// src/data/teamData.js

import u1 from '../assets/u1.png'
import u2 from '../assets/u2.png'

import u3 from '../assets/u3.png'
import u4 from '../assets/u4.png'


 
const teamMembers = [
  {
    name: "Anjali",
    image: u1,
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in tech startups. Drives innovation and growth.",
  },
  {
    name: "Aman",
    image: u2,
    role: "CTO",
    bio: "Tech strategist with deep expertise in scalable web platforms and AI.",
  },
  {
    name: "Deepika",
    image: u3,
    role: "Lead Developer",
    bio: "Full-stack developer with a passion for crafting clean and efficient code.",
  },
  {
    name: "Raj",
    image: u4,
    role: "UI/UX Designer",
    bio: "Designs intuitive interfaces that combine beauty and usability.",
  },
];


import React from "react";

import aboutpg from "../assets/aboutpg.png";
import aboutbv from "../assets/aboutbv.png";

export default function About() {
  return (
    <div className="min-h-screen py-10 px-4">
      <div className="w-full max-w-6xl mx-auto p-8 rounded-xl ">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h2>
        <p className=" text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Welcome to our platform! We're on a mission to help people find and
          book the perfect cafe experience. Whether you're planning a meeting or
          just need a cozy corner, we're here to make that easy.
        </p>

        <h3 className="text-3xl font-semibold text-gray-700 mb-4 text-center">
          Our Mission
        </h3>
        <p className=" text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          To provide seamless cafe discovery and booking while supporting local
          businesses. We combine technology, design, and human touch to improve
          how people experience places.
        </p>

        <h3 className="text-2xl font-semibold text-yellow-500 mb-6 text-center">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:shadow-xl transition-shadow rounded-lg p-6 text-center shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-yellow-400"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Bottom Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={aboutpg} alt="Cafe environment" className="rounded-lg shadow-md" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">A Perfect Spot for Every Mood</h4>
            <p className="text-gray-600 text-sm">
              Whether you're catching up with friends, having a work meeting, or simply enjoying your coffee time,
              our partnered cafes provide the right ambiance for every moment. Discover hidden gems and top-rated spots all in one place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
          <div className="md:order-2">
            <img src={aboutbv} alt="Booking visual" className="rounded-lg shadow-md" />
          </div>
          <div className="md:order-1">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Seamless Booking Experience</h4>
            <p className="text-gray-600 text-sm">
              With just a few clicks, you can find and reserve a cafe that suits your needs. Our platform ensures a smooth and hassle-free booking process
              so you can focus on what truly matters — enjoying your time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
