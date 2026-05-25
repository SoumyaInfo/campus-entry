import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const __filename =
  fileURLToPath(import.meta.url);

const __dirname =
  path.dirname(__filename);

// Middleware
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

/* -------------------------
   MAIL API
------------------------- */
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
          user:
            process.env.EMAIL_USER,
          pass:
            process.env.EMAIL_PASS,
        },
      });

    await transporter.sendMail({
      from:
        process.env.EMAIL_USER,

      to:
        process.env.EMAIL_USER,

      cc:
        process.env.CC_MAILS?.split(
          ","
        ),

      subject:
        "New Campus Entry Enquiry",

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
      message:
        "Mail sent successfully",
    });

  } catch (error) {

    console.error(
      "Mail Error:",
      error
    );

    res.status(500).json({
      success: false,
      error:
        "Mail failed",
    });
  }
});

/* -------------------------
   TEST ROUTE
------------------------- */
app.get("/test", (req, res) => {
  res.send(
    "Backend Running"
  );
});

/* -------------------------
   SERVE REACT BUILD
------------------------- */
const distPath =
  path.join(
    __dirname,
    "../dist"
  );

app.use(
  express.static(distPath)
);

app.get(
  /^\/(?!api).*/,
  (req, res) => {
    res.sendFile(
      path.join(
        distPath,
        "index.html"
      )
    );
  }
);

/* -------------------------
   START SERVER
------------------------- */
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});