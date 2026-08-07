import { becomeAVolunteer } from "@/lib/Templates/becomeAVolunteer";
import nodemailer from "nodemailer";
const senderEmail = process.env.USER_EMAIL;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const receiverEmail = process.env.RECEIVER_EMAIL;
export async function POST(request) {
  const { email, phone, qualification, age, fullName, department, experience } =
    await request.json(); // get email details from the request body

  // Create a transporter object using Ethereal's SMTP transport
  let transporter = nodemailer.createTransport({
    host: host, // Ensure this is the correct host
    port: 465, // SSL port
    secure: true, // Use true for port 465
    auth: {
      user: senderEmail,
      pass: password,
    },
  });

  // Set up email data
  let mailOptions = {
    from: senderEmail, // sender address
    to: receiverEmail, // recipient email
    subject: "Become A Volunteer", // email subject
    html: becomeAVolunteer(
      department,
      fullName,
      email,
      phone,
      qualification,
      age,
      experience
    ),
  };

  try {
    // Send the email
    let info = await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        isSuccess: true,
        message: "Email sent",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ isSuccess: false, message: "Email failed", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
