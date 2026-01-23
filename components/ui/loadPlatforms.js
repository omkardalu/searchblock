const loadPlatforms = () => {
    const platforms = [
    { name: "google", link: "https://www.google.co.in/search", paramName: "q" },
    { name: "flipkart", link: "https://www.flipkart.com/search", paramName: "q" },
    { name: "amazon", link: "https://www.amazon.in/s", paramName: "k" },
    {
      name: "youtube",
      link: "https://www.youtube.com/results",
      paramName: "search_query",
    },
  ];
  
  try{
    localStorage.setItem("platforms", JSON.stringify(platforms));
  }catch(e) {
    console.log(e);
  }

}

export default loadPlatforms;