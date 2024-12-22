"use client";
import React from "react";
import { FaBolt, FaLink, FaStar } from "react-icons/fa";

const metadata = {
  title: "About LinkBytes",
  description: "Its Origin and Purpose",
};

const About = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-50 to-gray-200 min-h-screen flex items-center justify-center py-16 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl text-center space-y-6">
        {/* Heading Section */}
        <h1 className="text-4xl font-semibold text-emerald-900 leading-tight">
          About LinkBytes
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          LinkBytes was created to simplify the way we share links—no more
          cluttered, long URLs. Built from scratch with a clear vision: make
          digital life simpler, one link at a time.
        </p>

        {/* The Journey Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-emerald-800">The Journey</h2>
          <p className="text-gray-700 text-base">
            Frustrated by long and confusing URLs, I created LinkBytes to make
            sharing links as effortless as possible. Hours of learning and
            coding led to this simple yet powerful tool.
          </p>
        </div>

        {/* What I Stand For Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-emerald-800">
            What I Stand For
          </h2>
          <ul className="space-y-4 flex justify-center items-center flex-col">
            <li className="flex items-center justify-start space-x-3 text-gray-700 hover:text-emerald-700 transition duration-300">
              <FaBolt className="text-2xl text-emerald-700" />
              <span>
                Simplicity: Making link sharing seamless and quick. ⚡
              </span>
            </li>
            <li className="flex items-center justify-start space-x-3 text-gray-700 hover:text-emerald-700 transition duration-300">
              <FaLink className="text-2xl text-emerald-700" />
              <span>Reliability: Ensuring every link works smoothly. 🔗</span>
            </li>
            <li className="flex items-center justify-start space-x-3 text-gray-700 hover:text-emerald-700 transition duration-300">
              <FaStar className="text-2xl text-emerald-700" />
              <span>
                Dedication: Building LinkBytes with passion and purpose. 🌟
              </span>
            </li>
          </ul>
        </div>

        {/* Final Thoughts */}
        <p className="text-lg text-gray-700">
          LinkBytes isn’t just a tool; it’s a symbol of what can be achieved
          through dedication and perseverance. Join me in simplifying the web!
        </p>
        <a
          href="#"
          className="text-lg font-semibold text-emerald-700 hover:text-emerald-900 transition duration-300"
        >
          Join the Movement 🌍
        </a>
      </div>
    </section>
  );
};

export default About;
