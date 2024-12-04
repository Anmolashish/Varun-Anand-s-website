"use client";
import { useContext, useState } from "react";
import { ShayariData } from "context/ShayariContext";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "next-share";

export default function ShayariDetailPage(props) {
  const slug = props.heading;
  const { shayaris } = useContext(ShayariData);

  const selectedShayari = shayaris.find((shayari) => {
    const generatedSlug = shayari.shayariname
      .toLowerCase()
      .replace(/[,\s]+/g, "-")
      .replace(/[^\w\-]+/g, "");
    return generatedSlug === slug;
  });

  const [showUrdu, setShowUrdu] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  if (!selectedShayari)
    return (
      <div style={{ background: "#f7e7bb", height: "auto" }}>
        <div className="shayari-containers">
          <div className="shayari-data">
            <p>
              Yahin pe khatam hoti hai shayari ki baat, Fir aayenge hum naye
              alfaaz ke saath.
            </p>
          </div>
        </div>
      </div>
    );

  const copyText = () => {
    navigator.clipboard.writeText(
      showUrdu ? selectedShayari.urdushayari : selectedShayari.shayari
    );
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const toggleSharePopup = () => {
    setShowSharePopup(!showSharePopup);
  };

  return (
    <div style={{ background: "#f7e7bb", height: "fit-content" }}>
      <div className="shayari-containers">
        <div className="shayari-data">
          <h1 className="shayari-heading">
            {selectedShayari.shayariname.charAt(0).toUpperCase() +
              selectedShayari.shayariname.slice(1)}
          </h1>
          <p className="shayari-texts">
            {showUrdu ? selectedShayari.urdushayari : selectedShayari.shayari}
          </p>

          {showAlert && (
            <div className="info">
              <div className="info__icon">...</div>
              <div className="info__title">Shayari copied!</div>
            </div>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              margin: "20px",
            }}
          >
            <div className="button-container">
              <div
                style={{
                  position: "relative",
                }}
              >
                {/* Share Button */}
                <button
                  type="button"
                  className="share-button"
                  onClick={toggleSharePopup}
                >
                  <span className="button__text">Share</span>
                  <span className="button__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 134 134"
                      className="svg"
                    >
                      <circle
                        strokeWidth="13"
                        stroke="white"
                        r="20.5"
                        cy="27"
                        cx="107"
                      ></circle>
                      <circle
                        strokeWidth="13"
                        stroke="white"
                        r="20.5"
                        cy="107"
                        cx="107"
                      ></circle>
                      <circle
                        strokeWidth="13"
                        stroke="white"
                        r="20.5"
                        cy="67"
                        cx="27"
                      ></circle>
                      <line
                        strokeWidth="13"
                        stroke="white"
                        y2="36.1862"
                        x2="88.0931"
                        y1="56.1862"
                        x1="48.0931"
                      ></line>
                      <line
                        strokeWidth="13"
                        stroke="white"
                        y2="97.6221"
                        x2="89.0893"
                        y1="78.1486"
                        x1="48.8304"
                      ></line>
                    </svg>
                  </span>
                </button>

                {/* Share Popup */}
                {showSharePopup && (
                  <div
                    className="share-popup"
                    style={{
                      position: "absolute",
                      top: "-80px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "white",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      padding: "10px",
                      zIndex: 10,
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <FacebookShareButton
                      url={window.location.href}
                      quote={`Read Varun Anand's "${selectedShayari.shayariname}"`}
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={window.location.href}
                      title={`Read Varun Anand's "${selectedShayari.shayariname}"`}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={window.location.href}
                      title={`Read Varun Anand's "${selectedShayari.shayariname}"`}
                      separator=":: "
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                      url={window.location.href}
                      summary={selectedShayari.shayariname}
                      title={`Read Varun Anand's "${selectedShayari.shayariname}"`}
                    >
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                  </div>
                )}
              </div>

              <button className="button2" onClick={copyText}>
                Copy
              </button>
              <button
                className="button2"
                onClick={() => setShowUrdu(!showUrdu)}
              >
                {showUrdu ? "Hindi" : "Urdu"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
