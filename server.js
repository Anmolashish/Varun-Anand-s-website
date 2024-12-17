"use server";

import dbConnect from "./lib/db"; // Ensure dbConnect is imported correctly
import Post from "./model/shayariModle"; // Ensure your model is imported

// Function to add a new Shayari post
const addShayri = async (post) => {
  try {
    await dbConnect();

    const { heading, hindiShayari, urduShayari, keywords } = post;

    if (!heading || !hindiShayari || !urduShayari || !keywords) {
      throw new Error("Missing required fields in the post data");
    }

    const newPost = new Post({
      heading,
      hindiShayari,
      urduShayari,
      keywords,
    });

    const savedPost = await newPost.save();
    const plainPost = savedPost.toObject(); // Convert to plain object

    plainPost._id = plainPost._id.toString(); // Ensure `_id` is a string

    return plainPost;
  } catch (error) {
    console.error("Error while adding post:", error.message);
    throw new Error("Unable to add post: " + error.message);
  }
};

const getAllShayri = async () => {
  try {
    await dbConnect();
    const posts = await Post.find().lean(); // Converts Mongoose documents to plain objects
    return posts.map((post) => ({
      ...post,
      _id: post._id.toString(), // Convert `_id` to string
    }));
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw new Error("Unable to fetch posts");
  }
};

export { addShayri, getAllShayri };
