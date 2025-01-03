import { useContext } from "react";
import PoemsCalling from "./PoemsCalling";
import { ShayariData } from "context/ShayariContext";

export default function PoemSection() {
  const { shayaris } = useContext(ShayariData);

  const poems = [...shayaris];

  return (
    <div className="poem-section">
      <div className="writings-options"></div>
      <div className="writings">
        <div className="poems-section">
          {poems
            .slice(-5)
            .reverse()
            .map((poem) => (
              <PoemsCalling
                key={poem.id}
                heading={poem.shayariname}
                description={poem.shayari}
              />
            ))}
        </div>

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
      </div>
    </div>
  );
}
