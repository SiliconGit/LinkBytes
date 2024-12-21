"use client";
import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-4xl text-center space-y-8">
        <h1 className="text-4xl font-bold text-emerald-900">
          About LinkBytes 🌟
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-emerald-700">LinkBytes</span>, a
          platform born from sheer determination and the belief in making
          digital experiences smoother. No handouts, no shortcuts—just pure
          effort and passion. This is my story. 🚀
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-emerald-800">
            The Journey 🛠️
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            It all started with a challenge: long, cumbersome URLs making life
            online frustrating. I took it upon myself to create a solution. With
            no external support, I poured my time, energy, and heart into
            building
            <span className="font-semibold text-emerald-700"> LinkBytes</span>.
            Every line of code, every design choice reflects my vision of
            simplicity and functionality. ✂️🔗
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Through long nights and endless problem-solving, I transformed an
            idea into reality.{" "}
            <span className="font-semibold text-emerald-700">LinkBytes</span>
            isn’t just a project; it’s a testament to what dedication and hard
            work can achieve. 💻✨
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-emerald-800">
            What I Stand For 💡
          </h2>
          <ul className="text-gray-700 text-base leading-relaxed list-disc list-inside">
            <li>Simplifying the way we share and manage links. ⚡</li>
            <li>Offering a sleek, fast, and reliable user experience. 🔗</li>
            <li>Proving that with determination, anything is possible. 🌟</li>
          </ul>
        </div>

        <p className="text-gray-700 text-lg">
          <span className="font-semibold text-emerald-700">LinkBytes</span> is
          more than a tool—it's a symbol of perseverance. Thank you for being
          part of this journey. Together, let’s create a better web! 🌍✨
        </p>
      </div>
    </section>
  );
};

export default About;
