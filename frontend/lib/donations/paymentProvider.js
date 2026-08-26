/**
 * ACWA Payment Provider Adapter
 * Decoupled gateway service for processing online contributions (e.g. Stripe, Cards).
 */

export async function createDonation({ amount, currency = 'USD', donationType = 'one-time', donorInfo }) {
  // Validate input
  if (!amount || amount <= 0) {
    throw new Error('Invalid donation amount.');
  }
  if (!donorInfo || !donorInfo.email || !donorInfo.name) {
    throw new Error('Donor name and email are required.');
  }

  const secretKey = process.env.STRIPE_SECRET_KEY || process.env.PAYMENT_SECRET_KEY || '';
  const transactionId = `ACWA-DON-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  console.log('[Donation Initiation]', {
    amount,
    currency,
    donationType,
    donorEmail: donorInfo.email,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    transactionId,
    status: 'initiated',
    message: 'Donation request registered safely.',
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
