import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const FRONTEND_URL = (process.env.FRONTEND_URL || "http://localhost:5173").trim();
const EMAIL_USER = process.env.EMAIL_USER?.trim();
const EMAIL_PASS = process.env.EMAIL_PASS?.trim();
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || EMAIL_USER;

const allowedOrigins = new Set([
  FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
]);

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());

if (!EMAIL_USER || !EMAIL_PASS) {
  console.warn("EMAIL_USER or EMAIL_PASS missing in .env. Email route will fail until set.");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser clients and known local frontend origins.
      if (!origin || allowedOrigins.has(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json());

app.get("/health", (_, res) => {
  res.status(200).json({ ok: true, message: "Backend running" });
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  const userEmail = String(email || "").trim();

  if (!name || !userEmail || !message) {
    return res.status(400).json({ message: "name, email, and message are required" });
  }

  console.log("User email:", userEmail);
  const canSendAutoReply = isValidEmail(userEmail);

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: userEmail,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${userEmail}\nMessage: ${message}`,
    });

    let autoReplySent = false;

    if (canSendAutoReply) {
      try {
        console.log("Sending auto-reply to:", userEmail);
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: userEmail,
          subject: "Thanks for contacting",
          text: `Hi ${name},\n\nThank you for reaching out! I will get back to you soon.\n\nBest regards,\nAvinash Kumar`,
        });
        autoReplySent = true;
        console.log("Auto-reply sent ✅");
      } catch (err) {
        console.log("Auto-reply failed ❌", err);
      }
    } else {
      console.log("Auto-reply skipped: invalid email format");
    }

    return res.status(200).json({
      message: "Email sent successfully",
      autoReplySent,
    });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
