import About from "aboutComponents/About";
import Navbar from "components/Navbar";
import React from "react";
import NewsLetter from "@/components/NewsLetter";
import HomeFooter from "@/components/HomeFooter";

export const metadata = {
  title: "About Varun Anand",
  description:
    "Learn about the journey of Varun Anand, a talented shayar who weaves emotions into captivating poetry. Explore the inspirations and stories behind his verses.",
};

export default function about() {
  return (
    <div>
      <Navbar />

      <About />
      <NewsLetter />
      <HomeFooter />
    </div>
  );
}
