import ShayarPage3 from "@/shayarSection/ShayarPage3";
import React from "react";
import Navbar from "components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import HomeFooter from "@/components/HomeFooter";

export async function generateMetadata({ params }) {
  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  // Custom descriptions for each category
  const categoryDescriptions = {
    signature:
      "Discover signature shayaris by Varun Anand that carry his unique poetic style and captivating expressions.",
    sad: "Explore the saddest and most heart-touching shayaris that resonate with sorrow, loss, and unspoken feelings.",
    romantic:
      "Indulge in heartfelt romantic shayaris that beautifully express love, longing, and affection.",
    breakup:
      "Find shayaris about heartbreak and breakups, capturing the pain, emotions, and healing of broken relationships.",
    motivational:
      "Get inspired with motivational shayaris that uplift your spirits and encourage you to chase your dreams.",
    social:
      "Read thought-provoking social shayaris addressing societal issues, values, and collective emotions.",
    politic:
      "Dive into powerful political shayaris that reflect ideas, struggles, and perspectives on governance and leadership.",
    latest:
      "Stay updated with the latest shayari collection featuring fresh, trending, and new poetic creations.",
  };

  // Fetch the description based on the slug
  const category = params.slug;
  const description =
    categoryDescriptions[category] ||
    `Explore the ${capitalizeFirstLetter(
      category
    )} shayari collection by Varun Anand. Dive into heartfelt and expressive poetry on various themes.`;

  return {
    title: `Varun Anand - ${capitalizeFirstLetter(category)} Shayari`,
    description: description,
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
