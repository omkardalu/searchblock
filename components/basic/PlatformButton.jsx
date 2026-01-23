const PlatformButton = ({name,index, selectedPlatformIndex, setSelectedPlatformIndex}) => {
  const handleClick = () => {
    setSelectedPlatformIndex(index);
  }
  
  return (
    <button target="_blank" onClick={handleClick} className={`p-2 ${selectedPlatformIndex === index && "bg-blue-950"} rounded capitalize cursor-pointer`}>{name}</button>
  )
}

export default PlatformButton;