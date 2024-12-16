"use server";

import dbConnect from "./lib/db"; // Ensure dbConnect is imported correctly
import Post from "./model/shayariModle"; // Ensure your model is imported

// Function to add a new Shayari post
const addShayri = async (post) => {
  try {
    // Wait for dbConnect to establish the connection before proceeding
    await dbConnect();
    console.log("Adding post data:", post);

    const { heading, hindiShayari, urduShayari, keywords } = post;

    if (!heading || !hindiShayari || !urduShayari || !keywords) {
      throw new Error("Missing required fields in the post data");
    }

    // Create a new post object
    const newPost = new Post({
      heading,
      hindiShayari,
      urduShayari,
      keywords,
    });

    // Save the post to the database
    const savedPost = await newPost.save();

    // Convert the Mongoose document to a plain object
    const plainPost = savedPost.toObject();

    console.log("New post added successfully:", plainPost);

    return plainPost;
  } catch (error) {
    console.error("Error while adding post:", error.message);
    throw new Error("Unable to add post: " + error.message);
  }
};

const getAllShayri = async (req, res) => {
  try {
    // Wait for dbConnect to establish the connection before proceeding
    await dbConnect();

    // Fetch all posts from the database as plain JavaScript objects
    const posts = await Post.find().lean();

    // Manually process the data if needed
    const processedPosts = posts.map((post) => ({
      ...post,
      _id: post._id.toString(), // Convert ObjectId to string
      // You can add more processing here if needed
    }));

    // Return the processed posts as a response
    if (processedPosts.length > 0) {
      console.log("Fetched all posts successfully:", processedPosts);

      return processedPosts; // Send plain objects
    } else {
      console.log("No posts found.");
      return res.status(404).json({ message: "No Shayari posts found" });
    }
  } catch (error) {
    console.error("Error while fetching posts:", error.message);
    return res
      .status(500)
      .json({ error: "Unable to fetch posts: " + error.message });
  }
};

export { addShayri, getAllShayri };
