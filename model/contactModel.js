"use server";

import mongoose from "mongoose";

// Define the contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Store the name of the person contacting
  email: { type: String, required: true }, // Store the email address
  message: { type: String, required: true }, // Store the message sent by the user
  created_at: { type: Date, default: Date.now }, // Automatically set the creation date
});

// Ensure the model is only created once (important in SSR)
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
