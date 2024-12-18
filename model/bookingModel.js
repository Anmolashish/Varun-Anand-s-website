"use server";

import mongoose from "mongoose";

// Define the booking schema
const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true }, // Full name of the person making the booking
  email: { type: String, required: true }, // Email address
  phone: { type: String, required: true }, // Phone number
  eventDate: { type: Date, required: true }, // Date of the event
  location: { type: String, required: true }, // Event location
  message: { type: String }, // Additional message (optional)
  agreeToTerms: { type: Boolean, required: true }, // Checkbox for agreeing to terms
  created_at: { type: Date, default: Date.now }, // Automatically set the creation date
});

// Ensure the model is only created once (important in SSR)
const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;
