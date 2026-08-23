const express = require('express');
const router = express.Router();

// POST /api/contact - Handle direct contact messages
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message, botField } = req.body;

    // Honeypot spam check
    if (botField) {
      return res.json({ success: true, message: 'Message submitted successfully' });
    }

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields (Name, Email, Subject, Message).',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address.',
      });
    }

    console.log('[Backend Contact Log]', {
      name,
      email,
      phone: phone || 'N/A',
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return res.json({
      success: true,
      message: 'Thank you for reaching out to ACWA. Your message has been received.',
    });
  } catch (error) {
    console.error('Backend Contact Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error processing contact message.',
    });
  }
});

module.exports = router;
