import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Name, Email, and Phone are required." });
    }

    try {
      // Check if SMTP credentials are provided in environment variables
      const useSMTP = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

      if (useSMTP) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"${name}" <${email}>`,
          to: "contact@smartblindskc.com",
          subject: `New Contact Form Submission from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
              <div style="background-color: #1c1917; color: white; padding: 24px; text-align: center;">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
              </div>
              <div style="padding: 24px; color: #444;">
                <p style="margin-bottom: 16px;"><strong style="color: #1c1917;">Name:</strong> ${name}</p>
                <p style="margin-bottom: 16px;"><strong style="color: #1c1917;">Email:</strong> ${email}</p>
                <p style="margin-bottom: 16px;"><strong style="color: #1c1917;">Phone:</strong> ${phone}</p>
                <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                  <strong style="color: #1c1917; display: block; margin-bottom: 8px;">Message:</strong>
                  <p style="white-space: pre-wrap; line-height: 1.6;">${message || "No message provided."}</p>
                </div>
              </div>
              <div style="background-color: #f9fafb; padding: 16px; text-align: center; font-size: 12px; color: #6b7280;">
                Sent from SmartBlindsKC Contact Form
              </div>
            </div>
          `,
        });
        console.log("Email sent successfully via SMTP");
      } else {
        // Fallback for demo: Log to console
        console.log("--- DEMO MODE: Form Submission Received ---");
        console.log("To:", "contact@smartblindskc.com");
        console.log("From:", `${name} (${email})`);
        console.log("Phone:", phone);
        console.log("Message:", message);
        console.log("-------------------------------------------");
      }
      
      res.json({ success: true, message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
