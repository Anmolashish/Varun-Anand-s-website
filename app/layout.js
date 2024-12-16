import "../styles/globals.css";
import { Gowun_Batang } from "next/font/google";
import { ShayariProvider } from "context/ShayariContext";
import Loader from "components/Loader";
import Head from "next/head";
import ReactQueryProvider from "@/utils/Provider";

// Load the Gowun Batang font
const gowunBatang = Gowun_Batang({
  subsets: ["latin"], // Add the 'korean' subset as needed
  weight: ["400", "700"], // Specify the font weights
  variable: "--font-geist-mono", // Set your custom CSS variable if needed
});

export const metadata = {
  title: "Varun Anand - Portfolio",
  description:
    "Explore the portfolio of Varun Anand, featuring a showcase of his poetic works, creative expressions, and event performances. Discover the artistic journey of a talented shayar through his literary achievements.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/android-chrome-192x192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${gowunBatang.variable}`}>
        {/* Loading Bar */}
        <Loader />

        {/* Context Provider */}
        <ReactQueryProvider>
          <ShayariProvider>{children}</ShayariProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
