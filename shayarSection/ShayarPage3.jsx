"use client";
import Image from "next/image";
import Link from "next/link";
import ShayariCalling from "./ShayariCalling";

export default function ShayarPage3(props) {
  const data = [
    {
      id: 1,
      heading: "Mohabat shayaris",
      shayari: [
        {
          id: 1,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
        {
          id: 2,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
        {
          id: 3,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
        {
          id: 4,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
        {
          id: 5,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
        {
          id: 6,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
        {
          id: 7,
          shayariname: "Tum haar ke dil apana meri jeet amar kar do...",
          shayari: "",
          sharelink: "",
        },
      ],
      keywords: [],
    },
    {},
  ];
  const copyText = () => {
    const text = document.querySelector(".shayari-text").innerText;
    navigator.clipboard.writeText(text);
    alert("Shayari copied!");
  };

  return (
    <div className="layout-shayari">
      <img
        src="/Images/mohabbat.jpeg"
        alt="Varun Anand"
        className="about-shayar-image"
        loading="lazy"
        style={{ alignItems: "center", marginLeft: "80px", marginTop: "70px" }}
      />
      <div style={{ marginTop: "200px" }}>
        <h1 style={{ textAlign: "center", color: "#b71c1c" }}>
          {data[0].heading}
        </h1>

        {data[0].shayari.map((element) => {
          return (
            <ShayariCalling
              key={element.id}
              id={element.id}
              shayariname={element.shayariname}
              sharelink={element.sharelink}
            />
          );
        })}
      </div>
    </div>
  );
}
