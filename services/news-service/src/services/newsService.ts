import axios from "axios";
import nodemailer from "nodemailer";

export const fetchNews = async (preferences: string[]) => {
  const apiKey = process.env.NEWSDATA_API_KEY;
  const categories = preferences.join(",");
  const response = await axios.get(`https://newsdata.io/api/1/news`, {
    params: {
      apikey: apiKey,
      category: categories,
      language: "en",
    },
  });

  return response.data.results;
};

export const sendNews = async (
  communicationChannel: string,
  recipient: string,
  newsArticles: any[]
) => {
  if (communicationChannel === "email") {
    await sendEmail(recipient, newsArticles);
  }
  // Add other communication channels like Telegram here
};

const sendEmail = async (email: string, newsArticles: any[]) => {
  const transporter = nodemailer.createTransport({
    // Configure your email service
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  const newsContent = newsArticles
    .map((article) => `<h3>${article.title}</h3><p>${article.description}</p>`)
    .join("<hr>");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your News Updates",
    html: newsContent,
  };

  await transporter.sendMail(mailOptions);
};
