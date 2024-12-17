"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import HomeFooter from "@/components/HomeFooter";

export default function Event() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "",
    message: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Here you can handle the form submission logic (e.g., send data to backend)
  };

  return (
    <>
      <Navbar />
      <div className="form-backbround">
        <div className="formContainer">
          <div className="formImage">
            <Image
              src="/Images/scroll-image1.jpg"
              alt="Event Booking"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="formContent">
            <h2>Book Your Event</h2>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="inputGroup">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              {/* Email */}
              <div className="inputGroup">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              {/* Phone */}
              <div className="inputGroup">
                <i className="fas fa-phone"></i>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 Phone Number"
                  required
                />
              </div>
              {/* Event Date */}
              <div className="inputGroup">
                <i className="fas fa-calendar-alt"></i>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  placeholder="Select Date"
                  required
                />
              </div>
              {/* Location */}
              <div className="inputGroup">
                <i className="fas fa-users"></i>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                  required
                />
              </div>
              {/* Additional Message */}
              <div className="inputGroup">
                <i className="fas fa-comment"></i>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional Details or Message"
                ></textarea>
              </div>
              {/* Terms and Conditions */}
              <div className="terms">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                I agree to the Terms of Service and Privacy Policy.
              </div>
              {/* Submit Button */}
              <button type="submit" className="submitBtn">
                Book Event
              </button>
            </form>
          </div>
        </div>
      </div>
      <NewsLetter />
      <HomeFooter />
    </>
  );
}
