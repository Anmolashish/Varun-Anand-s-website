"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Navbar from "components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import HomeFooter from "@/components/HomeFooter";
import { addBooking } from "@/server";

export default function Event() {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Form submission handler
  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);

    const formatedData = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      eventDate: data.eventDate,
      location: data.location,
      message: data.message,
      agreeToTerms: data.agreeToTerms,
    };

    await addBooking(formatedData);

    reset();
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name */}
              <div className="inputGroup">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  placeholder="Full Name"
                />
                {errors.fullName && <p>{errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div className="inputGroup">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder="Email"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div className="inputGroup">
                <i className="fas fa-phone"></i>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value:
                        /^\+?\d{1,4}?[ ]?\(?\d{1,4}?\)?[ ]?\d{1,4}?[ ]?\d{1,4}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  placeholder="+91 Phone Number"
                />
                {errors.phone && <p>{errors.phone.message}</p>}
              </div>

              {/* Event Date */}
              <div className="inputGroup">
                <i className="fas fa-calendar-alt"></i>
                <input
                  type="date"
                  {...register("eventDate", {
                    required: "Event date is required",
                  })}
                  placeholder="Select Date"
                />
                {errors.eventDate && <p>{errors.eventDate.message}</p>}
              </div>

              {/* Location */}
              <div className="inputGroup">
                <i className="fas fa-users"></i>
                <input
                  type="text"
                  {...register("location", {
                    required: "Location is required",
                  })}
                  placeholder="Location"
                />
                {errors.location && <p>{errors.location.message}</p>}
              </div>

              {/* Additional Message */}
              <div className="inputGroup">
                <i className="fas fa-comment"></i>
                <textarea
                  {...register("message")}
                  placeholder="Additional Details or Message"
                ></textarea>
              </div>

              {/* Terms and Conditions */}
              <div className="terms">
                <input
                  type="checkbox"
                  {...register("agreeToTerms", {
                    required: "You must agree to the terms",
                  })}
                />
                I agree to the Terms of Service and Privacy Policy.
                {errors.agreeToTerms && <p>{errors.agreeToTerms.message}</p>}
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
