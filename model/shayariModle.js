"use server";

import mongoose from "mongoose";

// Define the post schema
const postSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  hindiShayari: { type: String, required: true },
  urduShayari: { type: String, required: true },
  keywords: {
    type: [String],
    enum: [
      "love",
      "signature",
      "sad",
      "romantic",
      "breakup",
      "motivational",
      "social",
      "politic",
      "latest", // Add "latest" to the enum
    ],
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// Ensure the model is only created once (important in SSR)
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
