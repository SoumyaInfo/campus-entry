const nodemailer =
  require("nodemailer");

exports.handler =
  async (event) => {
    // Allow POST only
    if (
      event.httpMethod !==
      "POST"
    ) {
      return {
        statusCode: 405,
        body: JSON.stringify({
          error:
            "Method Not Allowed",
        }),
      };
    }

    try {
      const {
        name,
        email,
        phone,
        course,
        message,
      } = JSON.parse(
        event.body
      );

      // Validation
      if (
        !name ||
        !email ||
        !phone ||
        !course
      ) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error:
              "Please fill all required fields",
          }),
        };
      }

      // Gmail Transporter
      const transporter =
        nodemailer.createTransport(
          {
            service:
              "gmail",
            auth: {
              user:
                process.env
                  .EMAIL_USER,
              pass:
                process.env
                  .EMAIL_PASS,
            },
          }
        );

      // Send Mail
     await transporter.sendMail({
  from: `"Campus Entry" <${process.env.EMAIL_USER}>`,

  to:
    process.env.EMAIL_USER,

  // CC mails
  cc:
    process.env.CC_MAILS
      ?.split(","),

  replyTo: email,

  subject:
    "📩 New Campus Entry Enquiry",

  html: `
    <div style="font-family: Arial, sans-serif; padding:20px;">
      
      <h2 style="color:#2F5D34;">
        New Campus Entry Enquiry
      </h2>

      <table style="width:100%;">
        <tr>
          <td><strong>Name:</strong></td>
          <td>${name}</td>
        </tr>

        <tr>
          <td><strong>Email:</strong></td>
          <td>${email}</td>
        </tr>

        <tr>
          <td><strong>Phone:</strong></td>
          <td>${phone}</td>
        </tr>

        <tr>
          <td><strong>Course:</strong></td>
          <td>${course}</td>
        </tr>

        <tr>
          <td><strong>Message:</strong></td>
          <td>${message || "No message"}</td>
        </tr>
      </table>
    </div>
  `,
});

      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          message:
            "Mail sent successfully",
        }),
      };

    } catch (error) {

      console.error(
        "Mail Error:",
        error
      );

      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error:
            error.message,
        }),
      };
    }
  };