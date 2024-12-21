"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [Url, setUrl] = useState("");
  const [shortUrl, setshortUrl] = useState("");
  const [Generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      Url: Url,
      shortUrl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("");
        setshortUrl("");
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        console.log(result.message);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="min-h-screen bg-gray-100 pt-20 px-4 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl text-center">
        <h1 className="text-2xl font-bold text-emerald-800 mb-6">
          Generate Your Short URLs Here ✂️🔗
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            value={Url}
            placeholder="Enter your URL"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="text"
            value={shortUrl}
            placeholder="Enter your preferred short URL text"
            onChange={(e) => {
              setshortUrl(e.target.value);
            }}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            onClick={generate}
            className="w-full bg-emerald-700 text-white py-2 px-4 rounded-md hover:bg-emerald-800 transition duration-300"
          >
            Generate
          </button>
        </div>
        {Generated && (
          <div className="mt-6">
            <p className="text-gray-600 font-semibold">Your link:</p>
            <Link
              target="_blank"
              href={Generated}
              className="text-emerald-700 font-bold hover:underline"
            >
              {Generated}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shorten;
