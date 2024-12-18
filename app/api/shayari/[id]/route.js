import { NextResponse } from "next/server";
import dbConnect from "@/lib/db"; // Import the database connection
import Post from "@/model/shayariModle"; // Import the model

export async function DELETE(req, { params }) {
  const { id } = params;

  console.log("ID received for deletion:", id);

  try {
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
    console.error("Error deleting Shayari:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
