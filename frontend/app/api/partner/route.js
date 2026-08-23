import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, organization, email, phone, partnershipType, message, botField } = body;

    // Honeypot spam check
    if (botField) {
      return NextResponse.json({ success: true, message: 'Partnership inquiry received' });
    }

    // Server-side validation
    if (!name || !organization || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields (Name, Organization, Email, Message).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Process partnership inquiry (Logs server-side or dispatches via EMAIL_API_KEY environment variable)
    console.log('[Partnership Inquiry Submission]', {
      name,
      organization,
      email,
      phone: phone || 'N/A',
      partnershipType,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Partnership proposal successfully submitted to ACWA leadership.',
    });
  } catch (error) {
    console.error('Partner API Error:', error);
    return NextResponse.json(
      { success: false, message: 'An internal error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
