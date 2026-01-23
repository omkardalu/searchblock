import PlatformButton from "../basic/PlatformButton.jsx";

const PlatformsContainer = ({ selectedPlatformIndex, setSelectedPlatformIndex }) => {
  const platforms = JSON.parse(localStorage.getItem("platforms"));
  console.log(platforms);
  
  const platformButtonContainer = platforms.map((platform,index) => {
    return <PlatformButton key={index} index={index} selectedPlatformIndex={selectedPlatformIndex} setSelectedPlatformIndex={setSelectedPlatformIndex} name={platform.name} />;
  });

  return <div className="border border-gray-700 rounded">{platformButtonContainer}</div>;
};

export default PlatformsContainer;
