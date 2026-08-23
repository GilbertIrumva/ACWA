import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '').replace(/['"]/g, '').trim();
export const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || 'production').replace(/['"]/g, '').trim();

const rawApiVersion = (process.env.NEXT_PUBLIC_SANITY_API_VERSION || '').replace(/['"]/g, '').trim();
export const apiVersion = /^\d{4}-\d{2}-\d{2}$/.test(rawApiVersion) ? rawApiVersion : '2024-01-01';

export const isSanityConfigured = Boolean(projectId && projectId !== 'acwa-project');

const token = process.env.SANITY_API_READ_TOKEN ? process.env.SANITY_API_READ_TOKEN.trim() : undefined;

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      // If token is present, useCdn must be false per Sanity API specifications
      useCdn: token ? false : process.env.NODE_ENV === 'production',
      token,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source) {
  if (!source) return null;

  if (typeof source === 'string') {
    return {
      url: () => source,
      toString: () => source,
    };
  }

  if (!builder) return null;

  try {
    const img = builder.image(source).auto('format').fit('max');
    return {
      url: () => img.url(),
      toString: () => img.url(),
      image: img,
    };
  } catch (error) {
    console.error('Error generating image URL from Sanity asset:', error);
    return null;
  }
}

export function getImageUrl(source, fallback = '/_MG_2602.jpg') {
  if (!source) return fallback;
  if (typeof source === 'string') return source;
  const res = urlFor(source);
  return res ? res.url() : fallback;
}
