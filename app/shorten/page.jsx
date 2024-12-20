"use client";
import React from "react";
import { useState } from "react";
const shorten = () => {
  const [Url, setUrl] = useState("");
  const [ShortUrl, setShortUrl] = useState("");
  const [Generated, setGenerated] = useState(false);
  return (
    <section>
      <h1>Generate your Short URLs Here</h1>
      <div>
        <input
          type="text"
          value={Url}
          placeholder="Enter your URL"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          type="text"
          value={ShortUrl}
          placeholder="Enter your preferred short URL text"
          onChange={(e) => {
            setShortUrl(e.target.value);
          }}
        />
        <button>Generated</button>
      </div>
    </section>
  );
};

export default shorten;
