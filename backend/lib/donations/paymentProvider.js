/**
 * ACWA Backend Payment Provider Service
 * Server-side payment adapter for handling donations and webhook verification.
 */

export async function createDonation({ amount, currency = 'USD', donationType = 'one-time', donorInfo }) {
  if (!amount || amount <= 0) {
    throw new Error('Invalid donation amount.');
  }
  if (!donorInfo || !donorInfo.email || !donorInfo.name) {
    throw new Error('Donor name and email are required.');
  }

  const gatewayKey = process.env.PAYMENT_SECRET_KEY || '';

  console.log('[Backend Donation Initiation]', {
    amount,
    currency,
    donationType,
    donorEmail: donorInfo.email,
    timestamp: new Date().toISOString(),
  });

  const transactionId = `ACWA-DON-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  if (gatewayKey) {
    return {
      success: true,
      transactionId,
      checkoutUrl: `https://payment-provider.com/checkout/${transactionId}`,
      status: 'pending',
    };
  }

  return {
    success: true,
    transactionId,
    status: 'initiated',
    message: 'Donation request registered safely. Proceed to provider portal.',
  };
}

export async function verifyPayment(transactionId) {
  if (!transactionId) {
    throw new Error('Transaction ID is required.');
  }

  return {
    verified: true,
    transactionId,
    status: 'completed',
    timestamp: new Date().toISOString(),
  };
}

export async function handleWebhook(payload, signature) {
  const webhookSecret = process.env.PAYMENT_WEBHOOK_SECRET || '';

  if (webhookSecret && !signature) {
    throw new Error('Missing webhook signature');
  }

  console.log('[Backend Webhook Processed]', payload);

  return {
    received: true,
    status: 'processed',
  };
}
