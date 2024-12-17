"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Toggle states
  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
  const closeNavbar = () => setIsNavbarOpen(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here (e.g., API call)

    setFormData({ name: "", email: "", message: "" }); // Reset form
    closePopup();
  };

  return (
    <>
      <div className="navbar">
        <section className="logo">
          <Image
            width="82"
            height="82"
            src="/Images/logo1.png"
            alt="Varun Anand"
            className="navbar-logo-image"
            priority
          />
        </section>

        <section className="tabs">
          <div>
            <Link className="nav-tabs" href="/" onClick={closeNavbar}>
              HOME
            </Link>
          </div>
          <div>
            <Link className="nav-tabs" href="/about" onClick={closeNavbar}>
              ABOUT
            </Link>
          </div>
          <div>
            <Link className="nav-tabs" href="/shayari" onClick={closeNavbar}>
              SHAYARI
            </Link>
          </div>
          <div>
            <Link className="nav-tabs" href="/booking" onClick={closeNavbar}>
              BOOKING
            </Link>
          </div>
          <div>
            <Link className="nav-tabs" href="/gallery" onClick={closeNavbar}>
              GALLERY
            </Link>
          </div>
        </section>

        <section className="contact-button">
          <div className="button" onClick={openPopup}>
            Contact
          </div>
          <div className="hamburger" onClick={toggleNavbar}>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/menu--v1.png"
              alt="menu--v1"
            />
          </div>
        </section>
      </div>

      {/* Mobile Menu */}
      {isNavbarOpen && (
        <div className="navbar-options">
          <div className="navbar options">
            <div className="navbar-option">
              <Link className="nav-tabs" href="/" onClick={closeNavbar}>
                HOME
              </Link>
            </div>
            <div className="navbar-option">
              <Link className="nav-tabs" href="/about" onClick={closeNavbar}>
                ABOUT
              </Link>
            </div>
            <div className="navbar-option">
              <Link className="nav-tabs" href="/shayari" onClick={closeNavbar}>
                SHAYARI
              </Link>
            </div>
            <div className="navbar-option">
              <Link className="nav-tabs" href="/booking" onClick={closeNavbar}>
                BOOKING
              </Link>
            </div>
            <div className="navbar-option">
              <Link className="nav-tabs" href="/gallery" onClick={closeNavbar}>
                GALLERY
              </Link>
            </div>
            <div className="navbar-option" onClick={openPopup}>
              CONTACT
            </div>
          </div>
        </div>
      )}

      {/* Popup Contact Form */}
      {isPopupOpen && (
        <div className="popupOverlay">
          <div className="popupForm">
            <button className="closeBtn" onClick={closePopup}>
              ×
            </button>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              {/* Email */}
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              {/* Message */}
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              ></textarea>

              {/* Submit Button */}
              <button type="submit" className="submitBtn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
