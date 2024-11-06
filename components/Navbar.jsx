"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navbarOptions = document.querySelector(".navbar-options");

    const handleClick = () => {
      navbarOptions.classList.toggle("hide");
    };

    hamburger.addEventListener("click", handleClick);

    return () => {
      hamburger.removeEventListener("click", handleClick);
    };
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div className="navbar">
        <section className="logo">
          <img
            width="82"
            height="82"
            src="Images/logo1.png"
            alt="Varun Anand"
            className="navbar-logo-image"
            loading="lazy"
          />
        </section>
        <section className="tabs">
          <div>
            <Link className="nav-tabs" href="/">
              HOME
            </Link>
          </div>
          <div>
            <Link className="nav-tabs" href="/about">
              ABOUT
            </Link>
          </div>
          <div>
            <Link className="nav-tabs" href="/shayar">
              SHAYARI
            </Link>
          </div>
          <div>BOOKING</div>
          <div>
            <Link className="nav-tabs" href="/gallery">
              GALLERY
            </Link>
          </div>
          <div>SHAYARI</div>
        </section>
        <section className="contact-button">
          <div className="button" onClick={openPopup}>
            Contact
          </div>
          <div className="hamburger">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/menu--v1.png"
              alt="menu--v1"
            />
          </div>
        </section>
      </div>
      <div className="navbar-options hide">
        <div className="navbar options">
          <div className="navbar-option">Home</div>
          <div className="navbar-option">About</div>
          <div className="navbar-option">Writings</div>
          <div className="navbar-option">Contact</div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popupOverlay">
          <div className="popupForm">
            <button className="closeBtn" onClick={closePopup}>×</button>
            <h2>Contact Us</h2>
            <form>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .navbar {
          /* Your existing navbar styles */
        }

        .popupOverlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popupForm {
          background: #f2f2f2; /* Light gray background */
          padding: 30px;
          border-radius: 8px;
          width: 320px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          position: relative;
          text-align: left;
        }

        .popupForm h2 {
          margin-top: 0;
          color: #333;
        }

        .popupForm label {
          display: block;
          margin: 10px 0 5px;
          color: #333;
        }

        .popupForm input,
        .popupForm textarea {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background-color: #fff;
          font-size: 14px;
        }

        .popupForm input:focus,
        .popupForm textarea:focus {
          border-color: #b5651d; /* Brown border color on focus */
          outline: none;
        }

        .popupForm button[type='submit'] {
          width: 100%;
          padding: 10px;
          background-color: #8e3e39; /* Brown button color */
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 15px;
          font-size: 16px;
          transition: background-color 0.3s;
        }

        .popupForm button[type='submit']:hover {
          background-color: #a04f1a; /* Darker shade of brown */
        }

        .closeBtn {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          cursor: pointer;
          background: none;
          border: none;
          color: #888;
        }

        .closeBtn:hover {
          color: #333;
        }
      `}</style>
    </>
  );
}
