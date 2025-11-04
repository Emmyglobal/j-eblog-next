import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });

  try {
    // Configure Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nwaforugochukwu92@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not your main password
      },
    });

    // Send email notification to you
    await transporter.sendMail({
      from: email,
      to: "nwaforugochukwu92@gmail.com",
      subject: "New Newsletter Subscription",
      text: `You have a new subscriber: ${email}`,
    });

    return res.status(200).json({ message: "Subscribed successfully" });
  } catch (err) {
    console.error("Subscription error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
