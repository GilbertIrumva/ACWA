import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const DEFAULT_FROM_EMAIL = process.env.EMAIL_FROM || 'ACWA Website <onboarding@resend.dev>';
export const DEFAULT_TO_EMAIL = process.env.CONTACT_EMAIL || 'arisecwel.acces@gmail.com';
