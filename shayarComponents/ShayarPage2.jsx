"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ShayariData } from "context/ShayariContext";

export default function ShayarPage2() {
  const { data } = useContext(ShayariData);

  return (
    <div className="shayari-page">
      <h1 className="shayari-heading">Explore Beautiful Shayari Collections</h1>
      <div className="design-head">
        <Image
          src="/Images/border-top-image1.png"
          alt="DESIGN"
          className="design-style"
          width={800}
          height={600}
        />
      </div>

      <div className="shayari-grid">
        {data.map((element) => {
          return (
            <Link
              href={`shayari/${element.link}`}
              className="nav-tabs"
              key={element.id}
            >
              <div className="shayari-cover">
                <Image
                  src={`/Images/${element.imgsrc}`}
                  alt="Mohabbat Shayari"
                  className="cover-image"
                  width={300}
                  height={200}
                />

                <h2 className="shayari-title">{element.heading}</h2>
                <div className="design-head">
                  <Image
                    src="/Images/border-top-image1.png"
                    alt="DESIGN"
                    className="design-style"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
