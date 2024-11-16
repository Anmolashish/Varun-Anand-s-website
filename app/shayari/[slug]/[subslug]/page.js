import ShayarPage4 from "@/shayarSection/ShayarPage4";
import React from "react";
import Navbar from "components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import HomeFooter from "@/components/HomeFooter";
import { ShayariData } from "context/ShayariContext";

const formatAndCapitalize = (str) => {
  // Replace hyphens with spaces and capitalize the first letter of the result
  const formattedStr = str.replace(/-/g, " ");
  return formattedStr.charAt(0).toUpperCase() + formattedStr.slice(1);
};

export async function generateMetadata({ params }) {
  return {
    title: `Varun Anand - ${formatAndCapitalize(params.subslug)}`,
    description: "Read the newest shayari of Varun Anand here",
  };
}

export default function page({ params }) {
  return (
    <>
      <Navbar />
      <div>
        <ShayarPage4 heading={params.subslug} />
      </div>
      <NewsLetter />
      <HomeFooter />
    </>
  );
}
