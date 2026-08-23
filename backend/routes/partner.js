const express = require('express');
const router = express.Router();

// POST /api/partner - Handle institutional partnership proposals
router.post('/partner', async (req, res) => {
  try {
    const { name, organization, email, phone, partnershipType, message, botField } = req.body;

    if (botField) {
      return res.json({ success: true, message: 'Partnership inquiry received' });
    }

    if (!name || !organization || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields (Name, Organization, Email, Message).',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address.',
      });
    }

    console.log('[Backend Partnership Log]', {
      name,
      organization,
      email,
      phone: phone || 'N/A',
      partnershipType,
      message,
      timestamp: new Date().toISOString(),
    });

    return res.json({
      success: true,
      message: 'Partnership proposal successfully submitted to ACWA leadership.',
    });
  } catch (error) {
    console.error('Backend Partner Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error processing partnership proposal.',
    });
  }
});

module.exports = router;
