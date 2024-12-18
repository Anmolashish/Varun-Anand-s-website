"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { addContact } from "@/server";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Toggle states
  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
  const closeNavbar = () => setIsNavbarOpen(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // Handle form submission
  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);

    const formattedData = {
      name: data.name, // 'name' is the key in your form
      email: data.email, // Email address
      message: data.message, // Message field
    };

    console.log("Formatted Data:", formattedData);
    await addContact(formattedData);
    // Add form submission logic (e.g., API call) here
    reset(); // Reset form fields
    closePopup(); // Close popup after submission
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name */}
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}

              {/* Email */}
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}

              {/* Message */}
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <p className="error">{errors.message.message}</p>
              )}

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
