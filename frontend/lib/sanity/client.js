import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '').replace(/['"]/g, '').trim();
export const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').replace(/['"]/g, '').trim();

const rawApiVersion = (process.env.NEXT_PUBLIC_SANITY_API_VERSION || '').replace(/['"]/g, '').trim();
export const apiVersion = /^\d{4}-\d{2}-\d{2}$/.test(rawApiVersion) ? rawApiVersion : '2024-01-01';

export const isSanityConfigured = Boolean(projectId && projectId !== 'acwa-project');

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
      token: process.env.SANITY_API_READ_TOKEN,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source) {
  if (!builder || !source) return null;
  try {
    return builder.image(source);
  } catch (error) {
    console.error('Error generating image URL from Sanity asset:', error);
    return null;
  }
}
