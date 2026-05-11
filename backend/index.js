const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/resume', (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'resume.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch resume data' });
  }
});

app.get('/api/resume/download', (req, res) => {
  const filePath = path.join(__dirname, 'assets/yoshres.pdf');
  res.download(filePath, 'Yogesh_Resume.pdf', (err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to download resume' });
    }
  });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message' });
  }

  // Placeholder SMTP config - user needs to provide actual credentials in .env
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'user@example.com',
      pass: process.env.SMTP_PASS || 'password',
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECIPIENT_EMAIL || 'bxryosh@gmail.com',
      subject: `New Portfolio Contact: ${name}`,
      text: message,
      attachments: [
        {
          filename: 'Yogesh_Resume.pdf',
          path: path.join(__dirname, 'assets/yoshres.pdf'),
        },
      ],
    });

    res.json({ success: 'Message sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
