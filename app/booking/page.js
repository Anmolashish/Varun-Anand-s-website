import React from "react";
import Image from "next/image";
import Navbar from "components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import HomeFooter from "@/components/HomeFooter";

export const metadata = {
  title: "Book Varun Anand for Events",
  description:
    "Book Varun Anand, a gifted shayar, for your next event! His captivating poetry and heartfelt recitations will leave a lasting impression on your audience. Perfect for poetry readings, cultural gatherings, and special occasions.",
};

export default function Event() {
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
            <form>
              <div className="inputGroup">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="inputGroup">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" required />
              </div>
              <div className="inputGroup">
                <i className="fas fa-phone"></i>
                <input type="tel" placeholder="+91 Phone Number" required />
              </div>
              <div className="inputGroup">
                <i className="fas fa-calendar-alt"></i>
                <input
                  type="date"
                  id="date"
                  onfocus="(this.type='date')"
                  onblur="(this.type='text')"
                  placeholder="Select Date"
                />
              </div>
              <div className="inputGroup">
                <i className="fas fa-users"></i>
                <input type="number" placeholder="Location" min="1" required />
              </div>
              <div className="inputGroup">
                <i className="fas fa-comment"></i>
                <textarea placeholder="Additional Details or Message"></textarea>
              </div>
              <div className="terms">
                <input type="checkbox" required /> I agree to the{" "}
                <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </div>
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
