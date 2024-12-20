import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-emerald-950 text-white p-4 lg:px-8 m-4 rounded-xl">
        <div className="logo">
          {" "}
          <h1>LinkBytes</h1>
        </div>

        <ul className="flex items-center justify-center gap-2">
          <Link href="/">
            <li className="mx-2 lg:hover:text-gray-300">Home</li>
          </Link>
          <Link href="/mainApp">
            <li className="mx-2 lg:hover:text-gray-300">Shortner</li>
          </Link>
          <Link href="/about">
            {" "}
            <li className="mx-2 lg:hover:text-gray-300">About Us</li>
          </Link>
          <li className="flex gap-3">
            <Link href="#">
              <button className=" bg-emerald-700 lg:hover:bg-emerald-900 lg:hover:text-gray-300 shadow-lg rounded-xl px-4 py-1">
                Try Now
              </button>
            </Link>
            <Link href="#">
              <button className=" bg-emerald-700 lg:hover:bg-emerald-900 lg:hover:text-gray-300  shadow-lg rounded-xl px-4 py-1">
                Github
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
