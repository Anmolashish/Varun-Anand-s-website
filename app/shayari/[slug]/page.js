import ShayarPage3 from "@/shayarSection/ShayarPage3";
import React from "react";
import Navbar from "components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import HomeFooter from "@/components/HomeFooter";

export async function generateMetadata({ params }) {
  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return {
    title: `Varun Anand - ${capitalizeFirstLetter(params.slug)} Shayari`,
    description: `Explore the ${capitalizeFirstLetter(
      params.slug
    )} shayari collection by Varun Anand. Dive into heartfelt and expressive poetry on themes like love, heartbreak, and life.`,
  };
}

export default function page({ params }) {
  return (
    <>
      <Navbar />
      <div>
        <ShayarPage3 heading={params.slug} />
      </div>
      <NewsLetter />
      <HomeFooter />
    </>
  );
}
