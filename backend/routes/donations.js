const express = require('express');
const router = express.Router();

// POST /api/donations/create - Initiate server-side donation request
router.post('/donations/create', async (req, res) => {
  try {
    const { amount, currency, donationType, name, email, phone, programPreference } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid donation amount.',
      });
    }

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Donor name and email are required.',
      });
    }

    const transactionId = `ACWA-DON-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    console.log('[Backend Donation Request]', {
      transactionId,
      amount,
      currency: currency || 'USD',
      donationType: donationType || 'one-time',
      name,
      email,
      programPreference,
      timestamp: new Date().toISOString(),
    });

    return res.json({
      success: true,
      transactionId,
      status: 'initiated',
      message: 'Donation request successfully registered on backend.',
    });
  } catch (error) {
    console.error('Backend Donation Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to initiate donation.',
    });
  }
});

// POST /api/donations/webhook - Payment Gateway Webhook Listener
router.post('/donations/webhook', async (req, res) => {
  try {
    const signature = req.headers['x-payment-signature'];
    const webhookSecret = process.env.PAYMENT_WEBHOOK_SECRET || '';

    if (webhookSecret && !signature) {
      return res.status(401).json({ success: false, message: 'Unauthorized webhook request' });
    }

    console.log('[Backend Webhook Received]', req.body);

    return res.json({ received: true, status: 'processed' });
  } catch (error) {
    console.error('Backend Webhook Error:', error);
    return res.status(500).json({ success: false, message: 'Webhook processing error' });
  }
});

module.exports = router;
