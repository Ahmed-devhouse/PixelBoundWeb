const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// POST /api/contact
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: "All fields required" });
    }

    // Gmail transporter (requires app password, not normal login password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pixelboundgames2206@gmail.com",
        pass: "mmul nofw ligb oghe", // important
      },
    });

    // Email content
    await transporter.sendMail({
      from: email,
      to: "YOUR_EMAIL@gmail.com", // your inbox
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.json({ msg: "Email sent successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error sending email" });
  }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
