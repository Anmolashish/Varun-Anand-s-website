"use client";
import { useContext } from "react";
import PoemsCalling from "./PoemsCalling";
import { ShayariData } from "context/ShayariContext";
import Link from "next/link";

export default function Homepage5() {
  const { shayaris } = useContext(ShayariData);

  const poems = [...shayaris];

  return (
    <div className="home-page5">
      <div className="home-page5-container">
        <div className="page5-heading">Writings</div>
        <div className="poems-section">
          {poems.length !== 0 ? (
            poems
              .slice(-5)
              .reverse()
              .map((poem) => (
                <PoemsCalling
                  key={poem.id}
                  heading={poem.heading}
                  description={poem.hindiShayari}
                />
              ))
          ) : (
            <p className="empty-page">There is no shayari here</p>
          )}
        </div>
        <Link className="nav-tabs" href={"/shayari"}>
          <div className="see-more">
            <button className="btn">
              See more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15px"
                width="15px"
                className="icon"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  stroke="#292D32"
                  d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                ></path>
              </svg>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
