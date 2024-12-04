"use client";
import React, { useState } from "react";
import Link from "next/link";

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

export default function ShayariCalling(props) {
  const [showAlert, setShowAlert] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(props.shayari);
    setShowAlert(true); // Show the alert
    setTimeout(() => setShowAlert(false), 2000); // Hide the alert after 2 seconds
  };

  const toggleSharePopup = () => {
    setShowSharePopup(!showSharePopup);
  };

  return (
    <div className="per-shayari-container">
      <div className="shayari-container">
        {/* Alert Component */}
        {showAlert && (
          <div className="info">
            <div className="info__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#393a37"
                  d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
                ></path>
              </svg>
            </div>
            <div className="info__title">Shayari copied!</div>
            <div className="info__close">
              <svg
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                  fill="#393a37"
                ></path>
              </svg>
            </div>
          </div>
        )}

        <div style={{ alignItems: "center" }}>
          <span className="shayari-number">{props.id}</span>
          <span className="shayari-text">
            {props.shayariname.charAt(0).toUpperCase() +
              props.shayariname.slice(1)}
          </span>
          <p className="shayari-author">- Varun Anand</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <div className="button-container">
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
                  quote={`Read Varun Anand's "${
                    props.shayariname.charAt(0).toUpperCase() +
                    props.shayariname.slice(1)
                  }"`}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                  url={window.location.href}
                  title={`Read Varun Anand's "${
                    props.shayariname.charAt(0).toUpperCase() +
                    props.shayariname.slice(1)
                  }"`}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={window.location.href}
                  title={`Read Varun Anand's "${
                    props.shayariname.charAt(0).toUpperCase() +
                    props.shayariname.slice(1)
                  }"`}
                  separator=":: "
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <LinkedinShareButton
                  url={window.location.href}
                  summary={selectedShayari.shayariname}
                  title={`Read Varun Anand's "${
                    props.shayariname.charAt(0).toUpperCase() +
                    props.shayariname.slice(1)
                  }"`}
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>
            )}
          </div>

          <button className="button2" onClick={copyText}>
            Copy
          </button>
          <Link
            href={`${props.slug}/${props.shayariname
              .toLowerCase()
              .replace(/[,\s]+/g, "-")
              .replace(/[^\w\-]+/g, "")}`}
          >
            <button className="button2">More...</button>
          </Link>
        </div>
        <img
          src="/Images/border-top-image1.png"
          alt="DESIGN"
          className="design-style1"
        />
      </div>
    </div>
  );
}
