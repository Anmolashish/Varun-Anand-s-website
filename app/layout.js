"use client";
import "../styles/globals.css";
import Head from "next/head";
import { Gowun_Batang } from "next/font/google";
import Navbar from "components/Navbar";
import { usePathname } from "next/navigation";
import NewsLetter from "components/NewsLetter";
import HomeFooter from "components/HomeFooter";
import { ShayariProvider } from "context/ShayariContext";

// Load the Gowun Batang font
const gowunBatang = Gowun_Batang({
  subsets: ["latin"], // Add the 'korean' subset as needed
  weight: ["400", "700"], // Specify the font weights
  variable: "--font-geist-mono", // Set your custom CSS variable if needed
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hiddenPaths = ["/dashboard", "/dashboard/contact"];
  const shouldHideComponents = hiddenPaths.includes(pathname);

  return (
    <html lang="en">
      <Head>
        <title>Varun Anand - Portfolio</title>
      </Head>
      <body className={`${gowunBatang.variable}`}>
        {/* Conditionally render Navbar, NewsLetter, and HomeFooter */}
        {!shouldHideComponents && <Navbar />}
        <ShayariProvider>{children}</ShayariProvider>
        {!shouldHideComponents && <NewsLetter />}
        {!shouldHideComponents && <HomeFooter />}
      </body>
    </html>
  );
}
