import { NextResponse } from 'next/server';
import { createDonation } from '../../../../lib/donations/paymentProvider';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, currency, donationType, name, email, phone, programPreference } = body;

    if (!amount || Number(amount) <= 0) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid donation amount.' },
        { status: 400 }
      );
    }

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Donor name and email are required.' },
        { status: 400 }
      );
    }

    const donationResult = await createDonation({
      amount: Number(amount),
      currency: currency || 'USD',
      donationType: donationType || 'one-time',
      donorInfo: { name, email, phone, programPreference },
    });

    return NextResponse.json({
      success: true,
      transactionId: donationResult.transactionId,
      checkoutUrl: donationResult.checkoutUrl || null,
      status: donationResult.status,
      message: donationResult.message || 'Thank you! Your donation request has been initiated.',
    });
  } catch (error) {
    console.error('Donation API Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Payment initiation failed.' },
      { status: 500 }
    );
  }
}
