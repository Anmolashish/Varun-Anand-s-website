import "../styles/globals.css";
import Head from "next/head";
import { Gowun_Batang } from "next/font/google";
import Navbar from "components/Navbar";
import NewsLetter from "components/NewsLetter";
import HomeFooter from "components/HomeFooter";

// Load the Gowun Batang font
const gowunBatang = Gowun_Batang({
  subsets: ["latin"], // Add the 'korean' subset as needed
  weight: ["400", "700"], // Specify the font weights
  variable: "--font-geist-mono", // Set your custom CSS variable if needed
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gowunBatang.variable} `}>
        <Navbar />
        {children}
        <NewsLetter />
        <HomeFooter />
      </body>
    </html>
  );
}
