"use client";
import { useState } from "react";
import PlatformsContainer from "../basic/PlatformsContainer.jsx";
import SearchInput from "../basic/SearchInput.jsx";
import loadPlatforms from "./loadPlatforms.js";

const SearchBlock = () => {
  loadPlatforms();
  const [selectedPlatformIndex, setSelectedPlatformIndex] = useState(0);

  return (
    <section className="border w-full text-xl border-gray-500 shadow-blue-400 bg-[#303030] mx-auto rounded-2xl overflow-hidden flex flex-col items-center">
      <PlatformsContainer selectedPlatformIndex={selectedPlatformIndex} setSelectedPlatformIndex={setSelectedPlatformIndex} />
      <SearchInput  selectedPlatformIndex={selectedPlatformIndex} setSelectedPlatformIndex={setSelectedPlatformIndex} />
    </section>
  );
};

export default SearchBlock;
