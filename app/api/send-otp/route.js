import nodemailer from "nodemailer";

const storedEmail = "anmolbatwal18@gmail.com"; // Admin's email stored in .env
let otpStore = {}; // Temporary storage for OTPs

export async function POST(req) {
  const { email, otp } = await req.json();

  // OTP Generation Logic
  if (!otp) {
    if (email !== storedEmail) {
      return Response.json({ message: "Invalid email" }, { status: 401 });
    }

    // Generate 6-digit OTP
    const generatedOTP = Math.floor(100000 + Math.random() * 900000);
    otpStore[email] = generatedOTP;

    // Configure nodemailer for sending OTP email
    const transporter = nodemailer.createTransport({
      service: "gmail", // Example: Gmail
      auth: {
        user: process.env.EMAIL_USER, // Email sender
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Dashboard Access",
      text: `Your OTP is: ${generatedOTP}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return Response.json(
        { message: "OTP sent successfully" },
        { status: 200 }
      );
    } catch (error) {
      return Response.json(
        { message: "Error sending email", error },
        { status: 500 }
      );
    }
  }

  // OTP Verification Logic
  if (otpStore[email] && otpStore[email] == otp) {
    delete otpStore[email]; // Clear OTP after successful verification
    return Response.json(
      { message: "OTP verified successfully" },
      { status: 200 }
    );
  }

  return Response.json({ message: "Invalid OTP" }, { status: 400 });
}
