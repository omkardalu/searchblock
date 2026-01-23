export default function manifest() {
  return {
    name: "SearchBlock",
    short_name: "searchBlock",
    description: "Single search space for all apps",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192.svg",
        sizes: "192x192",
        type: "image/svg",
      },
      {
        src: "/icon-512.svg",
        sizes: "512x512",
        type: "image/svg",
      },
    ],
  };
}
