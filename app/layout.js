import "./globals.css";
import ServiceWorkerRegister from "./ServiceWorkerRegister.js";

export const metadata = {
  title: "SearchBlock",
  description: "Single search space for all apps",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
