import Image from "next/image";
import React from "react";
import Navbar from "components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import HomeFooter from "@/components/HomeFooter";

// Import images statically
import scrollImage1 from "/public/Images/scroll-image1.jpg";
import scrollImage2 from "/public/Images/scroll-image2.jpg";
import scrollImage3 from "/public/Images/scroll-image3.jpg";
import scrollImage4 from "/public/Images/scroll-image4.jpg";
import scrollImage5 from "/public/Images/scroll-image5.jpg";
import scrollImage6 from "/public/Images/scroll-image6.jpg";
import scrollImage7 from "/public/Images/scroll-image7.jpg";
import gal12 from "/public/Images/gal-12.jpg";
import gal1 from "/public/Images/gal-1.jpg";
import gal13 from "/public/Images/gal13.jpg";
import gal3 from "/public/Images/gal-3.jpg";
import gal4 from "/public/Images/gal-4.jpg";
import gal5 from "/public/Images/gal-5.jpg";
import gal15 from "/public/Images/gal15.jpg";
import gal7 from "/public/Images/gal-7.jpg";
import gal8 from "/public/Images/gal-8.jpg";
import gal10 from "/public/Images/gal-10.jpg";
import gal11 from "/public/Images/gal-11.jpg";
import gal16 from "/public/Images/gal16.jpg";
import gal17 from "/public/Images/gal17.jpg";
import gal18 from "/public/Images/gal18.jpg";
import gal19 from "/public/Images/gal19.jpg";
import gal20 from "/public/Images/gal20.jpg";
import gal21 from "/public/Images/gal21.jpg";
import gal22 from "/public/Images/gal22.jpg";
import gal23 from "/public/Images/gal23.jpg";
import gal24 from "/public/Images/gal24.jpg";
import gal25 from "/public/Images/gal25.jpg";

// Metadata for the page
export const metadata = {
  title: "Varun Anand - Gallery",
  description:
    "Explore the gallery of Varun Anand, showcasing a captivating collection of his poetic expressions, event highlights, and heartfelt recitations. Dive into a visual journey celebrating his artistry as a shayar.",
};

export default function Gallery() {
  const imgSrc = [
    {
      id: 1,
      src: scrollImage1,
      alt: "Image 1",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 2,
      src: scrollImage2,
      alt: "Image 2",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 3,
      src: scrollImage3,
      alt: "Image 3",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 4,
      src: scrollImage4,
      alt: "Image 4",
      text: "Jaipur event: 'KHUSHBU KA SAFAR",
    },
    {
      id: 5,
      src: scrollImage5,
      alt: "Image 5",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 6,
      src: scrollImage6,
      alt: "Image 6",
      text: "Jaipur event: 'KHUSHBU KA SAFAR",
    },
    {
      id: 7,
      src: scrollImage7,
      alt: "Image 7",
      text: "Jaipur event: 'KHUSHBU KA SAFAR",
    },
    { id: 8, src: gal12, alt: "Image 8", text: "Merut all India Mushaira" },
    {
      id: 9,
      src: gal1,
      alt: "Image 9",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 10,
      src: gal13,
      alt: "Image 10",
      text: "Dubai Andaz-E-Bayan Aur Event",
    },
    {
      id: 11,
      src: gal3,
      alt: "Image 11",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 12,
      src: gal4,
      alt: "Image 12",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 13,
      src: gal5,
      alt: "Image 13",
      text: "Jaipur event: 'KHUSHBU KA SAFAR",
    },
    { id: 14, src: gal15, alt: "Image 14", text: "IIT Khadagur West Bengal" },
    { id: 15, src: gal7, alt: "Image 15", text: "IIT Ropar" },
    { id: 16, src: gal8, alt: "Image 16", text: "IIT Ropar" },
    { id: 17, src: gal10, alt: "Image 17", text: "Merut all India Mushaira" },
    { id: 18, src: gal11, alt: "Image 18", text: "IIT Ropar" },
    { id: 19, src: gal16, alt: "Image 19", text: "Banaras BHU Event" },
    { id: 20, src: gal17, alt: "Image 20", text: "Adabi Baithak Moradabaad" },
    { id: 21, src: gal18, alt: "Image 21", text: "Adabi Baithak Moradabaad" },
    { id: 22, src: gal19, alt: "Image 22", text: "Adabi Baithak Moradabaad" },
    {
      id: 23,
      src: gal20,
      alt: "Image 23",
      text: "Lovely Profesional University",
    },
    {
      id: 24,
      src: gal21,
      alt: "Image 24",
      text: "Lovely Profesional University",
    },
    { id: 25, src: gal22, alt: "Image 25", text: "Jashan-E-Rekhta Delhi" },
    {
      id: 26,
      src: gal23,
      alt: "Image 26",
      text: "Lovely Profesional University",
    },
    { id: 27, src: gal24, alt: "Image 27", text: "Mumbai Mushaira" },
    { id: 28, src: gal25, alt: "Image 28", text: "Jashan-E-Rekhta Delhi" },
  ];

  return (
    <>
      <Navbar />
      <div>
        <div className="gallery-container">
          <div className="intro-gallery text-center">
            <h1>Gallery</h1>
          </div>

          <div className="gallery">
            {imgSrc.map((img) => (
              <figure className="gallery__thumb" key={img.id}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="gallery__image"
                  width={500}
                  height={500}
                  placeholder="blur"
                />
                <figcaption className="gallery__caption">{img.text}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <NewsLetter />
      <HomeFooter />
    </>
  );
}
