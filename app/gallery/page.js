import Image from "next/image";
import React from "react";

export default function Gallery() {
  const imgSrc = [
    {
      id: 1,
      src: "scroll-image1.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
    {
      id: 2,
      src: "scroll-image2.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
    {
      id: 3,
      src: "scroll-image3.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
    {
      id: 4,
      src: "scroll-image4.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
    {
      id: 5,
      src: "scroll-image5.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
    {
      id: 6,
      src: "scroll-image6.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
    {
      id: 7,
      src: "scroll-image7.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
    {
      id: 8,
      src: "scroll-image8.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
    {
      id: 9,
      src: "IMG-20240925-WA0003.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
    {
      id: 10,
      src: "IMG-20240925-WA0004.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
    {
      id: 11,
      src: "IMG-20240925-WA0007.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
    {
      id: 12,
      src: "IMG-20240925-WA0009.jpg",
      alt: "Image 1",
      text: "Potrait 1",
    },
  ];

  return (
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
                <figcaption className="gallery__caption">{img.text}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
