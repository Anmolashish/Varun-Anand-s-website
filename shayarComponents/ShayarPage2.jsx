"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ShayariData } from "context/ShayariContext";

export default function ShayarPage2() {
  const { data } = useContext(ShayariData);

  return (
    <div className="shayari-page">
      <div className="design-head">
        <Image
          src="/Images/design.png"
          alt="DESIGN"
          className="design-style"
          width={800}
          height={600}
        />
      </div>
      <h1 className="shayari-heading">Explore Beautiful Shayari Collections</h1>

      <div className="shayari-grid">
        {data.map((element) => {
          return (
            <Link href={`shayari/${element.link}`} className="nav-tabs">
              <div className="shayari-cover" key={element.id}>
                <Image
                  src={`/Images/${element.imgsrc}`}
                  alt="Mohabbat Shayari"
                  className="cover-image"
                  width={300}
                  height={200}
                />

                <h2 className="shayari-title">{element.heading}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
