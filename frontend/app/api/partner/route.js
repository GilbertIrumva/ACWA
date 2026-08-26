import { NextResponse } from 'next/server';
import { resend, DEFAULT_FROM_EMAIL, DEFAULT_TO_EMAIL } from '@/lib/resend';

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

    // Dispatch email via Resend if configured
    if (resend) {
      const { data, error } = await resend.emails.send({
        from: process.env.EMAIL_FROM || DEFAULT_FROM_EMAIL,
        to: [process.env.CONTACT_EMAIL || DEFAULT_TO_EMAIL],
        replyTo: email,
        subject: `[Partnership Inquiry] ${organization} - ${partnershipType || 'General'}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2 style="color: #0d9488; margin-top: 0;">New Partnership Proposal</h2>
            <p><strong>Contact Name:</strong> ${name}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Partnership Type:</strong> ${partnershipType || 'N/A'}</p>
            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p><strong>Proposal Message:</strong></p>
            <div style="background: #f9fafb; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
          </div>
        `,
      });

      if (error) {
        console.error('[Partner API] Resend Error:', error);
        return NextResponse.json(
          { success: false, message: 'Failed to send partnership proposal. Please try again later.' },
          { status: 500 }
        );
      }

      console.log('[Partner API] Email sent via Resend:', data);
    } else {
      console.log('[Partnership Inquiry Submission - RESEND_API_KEY Not Configured]', {
        name,
        organization,
        email,
        phone: phone || 'N/A',
        partnershipType,
        message,
        timestamp: new Date().toISOString(),
      });
    }

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
