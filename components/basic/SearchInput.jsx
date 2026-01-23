"use client";

import { useEffect, useState } from "react";

const SearchInput = ({ selectedPlatformIndex }) => {
  const [currentplatform, setCurrentplatform] = useState(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const platforms = JSON.parse(localStorage.getItem("platforms"));
        if (platforms && platforms[selectedPlatformIndex]) {
          setCurrentplatform(platforms[selectedPlatformIndex]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, [selectedPlatformIndex]);

  if (!currentplatform) {
    return <div className="p-2">Loading...</div>;
  }

  return (
    <div className="p-2">
      <form target="_blank" action={currentplatform.link}>
        <input
          className="outline-0"
          type="text"
          name={currentplatform.paramName}
        />
        <button className="p-2 bg-gray-900 rounded shadow-2xl" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
