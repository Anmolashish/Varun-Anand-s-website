"use server";

import dbConnect from "./lib/db"; // Database connection
import Shayari from "./model/shayariModle"; // Shayari model
import Contact from "./model/contactModel"; // Contact model
import Booking from "./model/bookingModel"; // Booking model

// Shayari Logic
const addShayri = async (post) => {
  try {
    await dbConnect();

    const { heading, hindiShayari, urduShayari, keywords } = post;

    if (!heading || !hindiShayari || !urduShayari || !keywords) {
      throw new Error("Missing required fields in the post data");
    }

    const newPost = new Shayari({
      heading,
      hindiShayari,
      urduShayari,
      keywords,
    });

    const savedPost = await newPost.save();
    const plainPost = savedPost.toObject();
    plainPost._id = plainPost._id.toString();

    return plainPost;
  } catch (error) {
    console.error("Error while adding Shayari:", error.message);
    throw new Error("Unable to add Shayari: " + error.message);
  }
};

const getAllShayri = async () => {
  try {
    await dbConnect();
    const posts = await Shayari.find().lean();
    return posts.map((post) => ({
      ...post,
      _id: post._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching Shayari:", error.message);
    throw new Error("Unable to fetch Shayari");
  }
};

const deleteShayari = async (id) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "https://www.varunanand.in"; // Set your development URL or production base URL

  const url = `${baseUrl}/api/shayari/${id}`; // Construct the absolute URL

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete Shayari: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting Shayari:", error);
    throw error;
  }
};
// Contact Form Logic
const addContact = async (contactData) => {
  try {
    await dbConnect();

    const { name, email, message } = contactData;

    if (!name || !email || !message) {
      throw new Error("Missing required fields in the contact data");
    }

    const newContact = new Contact({
      name,
      email,
      message,
      created_at: new Date(), // Automatically sets the creation date
    });

    const savedContact = await newContact.save();
    const plainContact = savedContact.toObject();
    plainContact._id = plainContact._id.toString();

    return plainContact;
  } catch (error) {
    console.error("Error while adding Contact:", error.message);
    throw new Error("Unable to add Contact: " + error.message);
  }
};

const getAllContacts = async () => {
  try {
    await dbConnect();
    const contacts = await Contact.find().lean();
    return contacts.map((contact) => ({
      ...contact,
      _id: contact._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    throw new Error("Unable to fetch contacts");
  }
};

// Booking Form Logic
const addBooking = async (bookingData) => {
  try {
    await dbConnect();

    const {
      fullName,
      email,
      phone,
      eventDate,
      location,
      message,
      agreeToTerms,
    } = bookingData;

    if (
      !fullName ||
      !email ||
      !phone ||
      !eventDate ||
      !location ||
      agreeToTerms === undefined
    ) {
      throw new Error("Missing required fields in the booking data");
    }

    const newBooking = new Booking({
      fullName,
      email,
      phone,
      eventDate: new Date(eventDate), // Ensures eventDate is properly cast to Date
      location,
      message,
      agreeToTerms,
      created_at: new Date(), // Automatically sets the creation date
    });

    const savedBooking = await newBooking.save();
    const plainBooking = savedBooking.toObject();
    plainBooking._id = plainBooking._id.toString();

    return plainBooking;
  } catch (error) {
    console.error("Error while adding Booking:", error.message);
    throw new Error("Unable to add Booking: " + error.message);
  }
};

const getAllBookings = async () => {
  try {
    await dbConnect();
    const bookings = await Booking.find().lean();
    return bookings.map((booking) => ({
      ...booking,
      _id: booking._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    throw new Error("Unable to fetch bookings");
  }
};

// Export all functions
export {
  addShayri,
  getAllShayri,
  deleteShayari,
  addContact,
  getAllContacts,
  addBooking,
  getAllBookings,
};
