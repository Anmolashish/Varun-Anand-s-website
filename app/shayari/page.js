import Shayar from "@/shayarComponents/Shayar";
import React from "react";
import Navbar from "components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import HomeFooter from "@/components/HomeFooter";

export const metadata = {
  title: "Varun Anand - Shayari Categories",
  description:
    "Explore a diverse collection of shayari categories by Varun Anand. Whether you're looking for romantic, sad, or inspirational shayari, find the perfect words to express your emotions and connect with others.",
};

export default function shayarisec() {
  return (
    <div>
      <Navbar />
      <Shayar />
      <NewsLetter />
      <HomeFooter />
    </div>
  );
}
