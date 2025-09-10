import React, { useState } from "react";
// Make sure you import all the necessary data arrays
import { Alumini2024, Alumini2023, Alumini2022 } from "../Constants/team";
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Alumini = () => {
  const [activeYear, setActiveYear] = useState("2024");

  const alumniData = {
    2024: Alumini2024,
    2023: Alumini2023,
    2022: Alumini2022,
  };

  return (
    <div className="w-full min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Alumni Gallery
        </h1>

        {/* Year Selection Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setActiveYear("2022")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
              activeYear === "2022"
                ? "bg-white text-black"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            2022
          </button>
          <button
            onClick={() => setActiveYear("2023")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
              activeYear === "2023"
                ? "bg-white text-black"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            2023
          </button>
          <button
            onClick={() => setActiveYear("2024")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
              activeYear === "2024"
                ? "bg-white text-black"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            2024
          </button>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {alumniData[activeYear].map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-cyan-500/50 group"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold mb-1 text-gray-100 group-hover:text-blue-300 transition-colors duration-300">
                  {member.name}
                </h2>
                <p className="text-lg font-semibold mb-4 text-green-400">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-6 mt-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={28} />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={28} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                      aria-label="Email"
                    >
                      <FaEnvelope size={28} />
                    </a>
                  )}
                  {member.phonenumber && (
                    <a
                      href={`tel:${member.phonenumber}`}
                      className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                      aria-label="Phone Number"
                    >
                      <FaPhone size={28} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumini;
