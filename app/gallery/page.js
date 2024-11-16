import Image from "next/image";
import React from "react";
import Navbar from "components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import HomeFooter from "@/components/HomeFooter";

export const metadata = {
  title: "Varun Anand - Gallery",
  description:
    "Explore the gallery of Varun Anand, showcasing a captivating collection of his poetic expressions, event highlights, and heartfelt recitations. Dive into a visual journey celebrating his artistry as a shayar.",
};

export default function Gallery() {
  const imgSrc = [
    {
      id: 1,
      src: "scroll-image1.jpg",
      alt: "Image 1",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 2,
      src: "scroll-image2.jpg",
      alt: "Image 1",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 3,
      src: "scroll-image3.jpg",
      alt: "Image 1",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 4,
      src: "scroll-image4.jpg",
      alt: "Image 1",
      text: "Jaipur event: 'KHUSHBU KA SAFAR",
    },
    {
      id: 5,
      src: "scroll-image5.jpg",
      alt: "Image 1",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 6,
      src: "scroll-image6.jpg",
      alt: "Image 1",
      text: "Jaipur event: 'KHUSHBU KA SAFAR",
    },
    {
      id: 7,
      src: "scroll-image7.jpg",
      alt: "Image 1",
      text: "Jaipur event: 'KHUSHBU KA SAFAR",
    },
    {
      id: 8,
      src: "gal-12.jpg",
      alt: "Image 1",
      text: "Merut all India Mushaira",
    },
    {
      id: 9,
      src: "gal-1.jpg",
      alt: "Image 1",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 10,
      src: "gal13.jpg",
      alt: "Image 1",
      text: "Dubai Andaz-E-Bayan Aur Event",
    },
    {
      id: 11,
      src: "gal-3.jpg",
      alt: "Image 1",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 12,
      src: "gal-4.jpg",
      alt: "Image 1",
      text: "Indore event: ' ADAB KI MEHFIL '",
    },
    {
      id: 13,
      src: "gal-5.jpg",
      alt: "Image 1",
      text: "Jaipur event: 'KHUSHBU KA SAFAR",
    },

    {
      id: 14,
      src: "gal15.jpg",
      alt: "Image 1",
      text: "IIT Khadagur West Bengal",
    },
    {
      id: 15,
      src: "gal-7.jpg",
      alt: "Image 1",
      text: "IIT Ropar",
    },
    {
      id: 16,
      src: "gal-8.jpg",
      alt: "Image 1",
      text: "IIT Ropar",
    },
    {
      id: 17,
      src: "gal-10.jpg",
      alt: "Image 1",
      text: "Merut all India Mushaira",
    },
    {
      id: 18,
      src: "gal-11.jpg",
      alt: "Image 1",
      text: "IIT Ropar",
    },
    {
      id: 19,
      src: "gal16.jpg",
      alt: "Image 1",
      text: "Banaras BHU Event",
    },
    {
      id: 20,
      src: "gal17.jpg",
      alt: "Image 1",
      text: "Adabi Baithak Moradabaad",
    },
    {
      id: 21,
      src: "gal18.jpg",
      alt: "Image 1",
      text: "Adabi Baithak Moradabaad",
    },
    {
      id: 22,
      src: "gal19.jpg",
      alt: "Image 1",
      text: "Adabi Baithak Moradabaad",
    },
    {
      id: 23,
      src: "gal20.jpg",
      alt: "Image 1",
      text: "Lovely Profesional University",
    },
    {
      id: 24,
      src: "gal21.jpg",
      alt: "Image 1",
      text: "Lovely Profesional University",
    },
    {
      id: 25,
      src: "gal22.jpg",
      alt: "Image 1",
      text: "Jashan-E-Rekhta Delhi",
    },
    {
      id: 26,
      src: "gal23.jpg",
      alt: "Image 1",
      text: "Lovely Profesional University",
    },
    {
      id: 27,
      src: "gal24.jpg",
      alt: "Image 1",
      text: "Mumbai Mushaira",
    },
    {
      id: 28,
      src: "gal25.jpg",
      alt: "Image 1",
      text: "Jashan-E-Rekhta Delhi",
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        <div className="gallery-container">
          <div className="intro-gallery text-center">
            <h1>Gallary</h1>
          </div>

          {/* <p>
          यह गैलरी मेरे दिल की बातों का वो आईना है, जिसे मैंने अल्फ़ाज़ और
          तस्वीरों के संगम से सजाया है। हर शेर, हर नज़्म एक एहसास है, जो मैंने
          अपनी आँखों से देखा और दिल से महसूस किया है।{" "}
        </p> */}

          <div className="gallery">
            {imgSrc.map((img) => {
              return (
                <figure className="gallery__thumb" key={img.id}>
                  <Image
                    src={`/Images/${img.src}`}
                    alt={img.alt}
                    className="gallery__image"
                    width={500}
                    height={500}
                  />
                  <figcaption className="gallery__caption">
                    {img.text}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
      <NewsLetter />
      <HomeFooter />
    </>
  );
}
