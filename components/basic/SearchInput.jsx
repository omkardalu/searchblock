const SearchInput = ({selectedPlatformIndex}) => {
  try{
    const platforms = JSON.parse(localStorage.getItem("platforms"));
  }catch(e){
    console.log(e);

  }
    const currentplatform = platforms[selectedPlatformIndex];
  return (
    <div className='p-2'>
      <form target="_blank" action={currentplatform.link}>
      <input className="outline-0" type="text" name={currentplatform.paramName} />
      <button className='p-2 bg-gray-900 rounded shadow-2xl' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchInput