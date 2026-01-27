const loadPlatforms = () => {
  const platforms = [
    { name: "google", link: "https://www.google.co.in/search", paramName: "q" },
    {
      name: "wiki",
      link: "https://en.wikipedia.org/wiki",
      paramName: null,
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/results",
      paramName: "search_query",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/explore/search/keyword/",
      paramName: "q",
    },
    {
      name: "LinkedIn", 
      link: "https://www.linkedin.com/search/results/all",
      paramName: "keywords",
    },
    {
      name: "spotify",
      link: "https://open.spotify.com/search",
      paramName: null,
    },
    {
      name: "flipkart",
      link: "https://www.flipkart.com/search",
      paramName: "q",
    },
    { name: "amazon", link: "https://www.amazon.in/s", paramName: "k" },
    { name: "blinkit", link: "https://blinkit.com/s", paramName: "q" },
    { name: "swiggy", link: "https://www.swiggy.com/search", paramName: "query" },
    { name: "instamart", link: "https://www.swiggy.com/instamart/search", paramName: "query" },
    {
      name: "Maps",
      link: "https://www.google.com/maps/place",
      paramName: null,
    },
  ];
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem("platforms", JSON.stringify(platforms));
    }
  } catch (e) {
    console.log(e);
  }
};

export default loadPlatforms;
