import { NextResponse } from "next/server";
import dbConnect from "@/lib/db"; // Import the database connection
import Post from "@/model/shayariModle"; // Import the model
import mongoose from "mongoose";

export async function DELETE(req) {
  try {
    // Parse the `id` from the URL
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop(); // Assuming `id` is in the last part of the URL

    console.log("ID received for deletion:", id);

    // Validate the `id`
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid Shayari ID" },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();
    console.log("Database connected successfully");

    // Perform the deletion
    const result = await Post.findByIdAndDelete(id);
    console.log("Deletion result:", result);

    if (!result) {
      return NextResponse.json(
        { message: "Shayari not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Shayari deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting Shayari:", error);

    // Respond with a generic error message in production
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
