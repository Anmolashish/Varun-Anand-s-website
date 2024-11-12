"use client";
import "../styles/globals.css";
import Head from "next/head";
import { Gowun_Batang } from "next/font/google";
import Navbar from "components/Navbar";
import { usePathname } from "next/navigation";
import NewsLetter from "components/NewsLetter";
import HomeFooter from "components/HomeFooter";
import { ShayariProvider } from "context/ShayariContext";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";

// Load the Gowun Batang font
const gowunBatang = Gowun_Batang({
  subsets: ["latin"], // Add the 'korean' subset as needed
  weight: ["400", "700"], // Specify the font weights
  variable: "--font-geist-mono", // Set your custom CSS variable if needed
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start the loading bar when the pathname changes
    setProgress(30);

    // Complete the loading bar after a short delay
    const timeout = setTimeout(() => {
      setProgress(100);
    }, 500); // Adjust the delay as needed

    // Clean up the timeout when the component unmounts or the pathname changes
    return () => clearTimeout(timeout);
  }, [pathname]);

  const hiddenPaths = [
    "/dashboard",
    "/dashboard/contact",
    "/dashboard/booking",
    "/dashboard/shayari/shayari-form",
    "/dashboard/shayari",
  ];
  const shouldHideComponents = hiddenPaths.includes(pathname);

  return (
    <html lang="en">
      <Head>
        <title>Varun Anand - Portfolio</title>
      </Head>
      <body className={`${gowunBatang.variable}`}>
        {/* Loading Bar */}
        <LoadingBar
          color="#af4c4c"
          progress={progress}
          onLoaderFinished={() => setProgress(0)} // Reset progress when finished
          height={3} // Customize the height of the bar
        />

        {/* Conditionally render Navbar, NewsLetter, and HomeFooter */}
        {!shouldHideComponents && <Navbar />}
        <ShayariProvider>{children}</ShayariProvider>
        {!shouldHideComponents && <NewsLetter />}
        {!shouldHideComponents && <HomeFooter />}
      </body>
    </html>
  );
}
