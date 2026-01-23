"use client";
import { useState } from "react";
import PlatformsContainer from "../basic/PlatformsContainer.jsx";
import SearchInput from "../basic/SearchInput.jsx";
import loadPlatforms from "./loadPlatforms.js";

const SearchBlock = () => {
  loadPlatforms();
  const [selectedPlatformIndex, setSelectedPlatformIndex] = useState(0);

  return (
    <section className="border w-fit mx-auto flex flex-col items-center">
      <PlatformsContainer selectedPlatformIndex={selectedPlatformIndex} setSelectedPlatformIndex={setSelectedPlatformIndex} />
      <SearchInput  selectedPlatformIndex={selectedPlatformIndex} setSelectedPlatformIndex={setSelectedPlatformIndex} />
    </section>
  );
};

export default SearchBlock;
