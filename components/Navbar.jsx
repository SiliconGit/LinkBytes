"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import Image from "next/image";
import "../fonts/fonts.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("Component mounted"); // Check if client-side
  }, []);

  return (
    <nav className="bg-emerald-950 text-white p-4 lg:px-8 m-4 rounded-xl sticky top-4 z-20">
      <div className="flex items-center justify-between ">
        <div className="logo flex justify-center items-center gap-2">
          <Image
            src="/LinkedBytesLogoPNG.png"
            width={150}
            height={150}
            alt=""
            className="invert brightness-150 h-5 w-6"
          />
          <h1 className="text-xl font-bold ">LinkBytes</h1>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl cursor-pointer"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`lg:flex items-center text-center poppins-regular ${
            isOpen ? "block" : "hidden"
          } lg:static absolute top-16 left-0 w-full bg-emerald-950 lg:w-auto lg:bg-transparent lg:opacity-100 transition-all duration-300 ease-in-out z-10 rounded-lg lg:rounded-none p-4 lg:p-0 my-4 lg:my-0`}
        >
          <Link href="/">
            <li className="mx-2 py-2 lg:hover:text-gray-300 transition duration-300 cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="/shorten">
            <li className="mx-2 py-2 lg:hover:text-gray-300 transition duration-300 cursor-pointer">
              Shortener
            </li>
          </Link>
          <Link href="/about">
            <li className="mx-2 py-2 lg:hover:text-gray-300 transition duration-300 cursor-pointer">
              About Us
            </li>
          </Link>
          <li className="flex justify-center items-center lg:flex-row gap-3 py-2 lg:py-0 mx-1">
            <Link href="#">
              <button className="bg-emerald-700 lg:hover:bg-emerald-900 lg:hover:text-gray-300 shadow-lg rounded-xl px-4 py-1 transition duration-300 text-sm">
                Try it
              </button>
            </Link>
            <Link href="#">
              <button className="bg-emerald-700 lg:hover:bg-emerald-900 lg:hover:text-gray-300 shadow-lg rounded-xl px-4 py-1 transition duration-300 text-xs">
                <FaGithub className="text-xl" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
