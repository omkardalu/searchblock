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
  const handleSubmit = (e) => {
    const formObject = new FormData(e.target);
    if (formObject.get("o")) {
      e.target.action = currentplatform.link + "/" + formObject.get("o");
    }
  };
  if (!currentplatform) {
    return <div className="p-2">Loading...</div>;
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between py-1 px-2"
        target="_blank"
        action={currentplatform.link}
      >
        <input
          className="outline-0 w-full pl-3"
          type="text"
          autoFocus
          placeholder="Search here"
          name={currentplatform.paramName || "o"}
        />
        <button
          className="px-3 py-2 my-1 text-black cursor-pointer rounded-2xl shadow bg-white"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
