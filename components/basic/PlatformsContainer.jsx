import PlatformButton from "../basic/PlatformButton.jsx";

const PlatformsContainer = ({ selectedPlatformIndex, setSelectedPlatformIndex }) => {
  try{
    const platforms = JSON.parse(localStorage.getItem("platforms"));
  }catch(e){
    console.log(e);
  }
  
  const platformButtonContainer = platforms.map((platform,index) => {
    return <PlatformButton key={index} index={index} selectedPlatformIndex={selectedPlatformIndex} setSelectedPlatformIndex={setSelectedPlatformIndex} name={platform.name} />;
  });

  return <div className="border border-gray-700 rounded">{platformButtonContainer}</div>;
};

export default PlatformsContainer;
