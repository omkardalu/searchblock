import PlatformButton from "../basic/PlatformButton.jsx";

const PlatformsContainer = ({
  selectedPlatformIndex,
  setSelectedPlatformIndex,
}) => {
  let platforms = [];
  try {
    if (typeof window !== "undefined") {
      platforms = JSON.parse(localStorage.getItem("platforms"));
    }
  } catch (e) {
    console.log(e);
  }

  const platformButtonContainer = platforms.map((platform, index) => {
    return (
      <PlatformButton
        key={index}
        index={index}
        selectedPlatformIndex={selectedPlatformIndex}
        setSelectedPlatformIndex={setSelectedPlatformIndex}
        name={platform.name}
      />
    );
  });

  return (
      <div className="border m-1 flex justify-between flex-wrap  bg-[#181818] border-gray-500 rounded-2xl overflow-hidden shadow">
      {platformButtonContainer}
    </div>
  );
};

export default PlatformsContainer;
