"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [step, setStep] = useState("email"); // 'email' or 'otp'
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({ email: "", otp: "" });
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: "" });

    if (!email) {
      setErrors({ email: "Email is required" });
      return;
    }

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.status === 200) {
        console.log("OTP sent successfully");
        setStep("otp");
      } else {
        setErrors({ email: result.message || "Error sending OTP." });
      }
    } catch (error) {
      setErrors({ email: "Server error. Please try again later." });
      console.error(error);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setErrors({ otp: "" });

    if (!otp) {
      setErrors({ otp: "OTP is required" });
      return;
    }

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();

      if (response.status === 200) {
        localStorage.setItem("isAuthenticated", "true");
        router.push("/dashboard");
      } else {
        setErrors({ otp: result.message || "Invalid OTP." });
      }
    } catch (error) {
      setErrors({ otp: "Server error. Please try again later." });
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>

      {step === "email" && (
        <form className="login-form" onSubmit={handleEmailSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <button type="submit" className="login-button">
            Send OTP
          </button>
        </form>
      )}

      {step === "otp" && (
        <form className="login-form" onSubmit={handleOtpSubmit}>
          <div className="form-group">
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="form-input"
              placeholder="Enter the OTP"
            />
            {errors.otp && <span className="error">{errors.otp}</span>}
          </div>
          {loginError && <span className="error">{loginError}</span>}
          <button type="submit" className="login-button">
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
}
