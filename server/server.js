import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename =
  fileURLToPath(import.meta.url);

const __dirname =
  path.dirname(__filename);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-mail", async (req, res) => {
  const {
    name,
    email,
    phone,
    course,
    message,
  } = req.body;

  try {
    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      // Convert comma-separated emails into array
      cc: process.env.CC_MAILS?.split(","),

      subject: "New Campus Entry Enquiry",

      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Course: ${course}
Message: ${message}
      `,
    });

    res.status(200).json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: "Mail failed",
    });
  }
});

app.use(
  express.static(
    path.join(
      __dirname,
      "../dist"
    )
  )
);

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../dist",
      "index.html"
    )
  );
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});