import { sanityClient, isSanityConfigured } from './client';
import {
  MOCK_STORIES,
  MOCK_IMPACT_RECORDS,
  MOCK_PROGRAMS,
  MOCK_TEAM_MEMBERS,
  MOCK_TESTIMONIALS,
  MOCK_EVENTS,
  MOCK_PARTNERS,
  MOCK_SITE_SETTINGS,
} from './mockData';

// --- STORIES & ARTICLES ---

export async function getStories() {
  if (!isSanityConfigured || !sanityClient) {
    return MOCK_STORIES;
  }
  try {
    const query = `*[_type == "story" && publishedStatus == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      category,
      author,
      location,
      featuredImage,
      gallery,
      featured
    }`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : MOCK_STORIES;
  } catch (error) {
    console.error('Error fetching stories from Sanity:', error);
    return MOCK_STORIES;
  }
}

export async function getStoryBySlug(slug) {
  if (!isSanityConfigured || !sanityClient) {
    return MOCK_STORIES.find((s) => s.slug.current === slug) || null;
  }
  try {
    const query = `*[_type == "story" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      category,
      author,
      location,
      featuredImage,
      gallery,
      featured,
      seo
    }`;
    const data = await sanityClient.fetch(query, { slug });
    return data || MOCK_STORIES.find((s) => s.slug.current === slug) || null;
  } catch (error) {
    console.error('Error fetching story by slug from Sanity:', error);
    return MOCK_STORIES.find((s) => s.slug.current === slug) || null;
  }
}

// --- PROGRAMS & PROJECTS ---

export async function getPrograms() {
  if (!isSanityConfigured || !sanityClient) {
    return MOCK_PROGRAMS;
  }
  try {
    const query = `*[_type == "program"] | order(order asc, _createdAt desc) {
      _id,
      title,
      slug,
      category,
      shortDescription,
      description,
      heroImage,
      gallery,
      activities,
      beneficiaries,
      location,
      startDate,
      endDate,
      impact,
      featured,
      order
    }`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : MOCK_PROGRAMS;
  } catch (error) {
    console.error('Error fetching programs from Sanity:', error);
    return MOCK_PROGRAMS;
  }
}

export async function getProgramBySlug(slug) {
  if (!isSanityConfigured || !sanityClient) {
    return MOCK_PROGRAMS.find((p) => p.slug.current === slug) || null;
  }
  try {
    const query = `*[_type == "program" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      shortDescription,
      description,
      heroImage,
      gallery,
      activities,
      beneficiaries,
      location,
      startDate,
      endDate,
      impact,
      featured
    }`;
    const data = await sanityClient.fetch(query, { slug });
    return data || MOCK_PROGRAMS.find((p) => p.slug.current === slug) || null;
  } catch (error) {
    console.error('Error fetching program by slug from Sanity:', error);
    return MOCK_PROGRAMS.find((p) => p.slug.current === slug) || null;
  }
}

// --- IMPACT RECORDS ---

export async function getImpactRecords() {
  if (!isSanityConfigured || !sanityClient) {
    return MOCK_IMPACT_RECORDS;
  }
  try {
    const query = `*[_type == "impact" && verified == true] | order(year desc) {
      _id,
      title,
      description,
      number,
      unit,
      year,
      program,
      location,
      verified,
      featured
    }`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : MOCK_IMPACT_RECORDS;
  } catch (error) {
    console.error('Error fetching impact records from Sanity:', error);
    return MOCK_IMPACT_RECORDS;
  }
}

// --- TEAM MEMBERS ---

export async function getTeamMembers() {
  if (!isSanityConfigured || !sanityClient) {
    return MOCK_TEAM_MEMBERS;
  }
  try {
    const query = `*[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      biography,
      photo,
      email,
      linkedin,
      order
    }`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : MOCK_TEAM_MEMBERS;
  } catch (error) {
    console.error('Error fetching team members from Sanity:', error);
    return MOCK_TEAM_MEMBERS;
  }
}

// --- TESTIMONIALS ---

export async function getTestimonials() {
  if (!isSanityConfigured || !sanityClient) {
    return MOCK_TESTIMONIALS;
  }
  try {
    const query = `*[_type == "testimonial"] {
      _id,
      quote,
      name,
      role,
      organization,
      photo,
      program
    }`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : MOCK_TESTIMONIALS;
  } catch (error) {
    console.error('Error fetching testimonials from Sanity:', error);
    return MOCK_TESTIMONIALS;
  }
}

// --- EVENTS ---

export async function getEvents() {
  if (!isSanityConfigured || !sanityClient) {
    return MOCK_EVENTS;
  }
  try {
    const query = `*[_type == "event"] | order(date desc) {
      _id,
      title,
      slug,
      description,
      date,
      location,
      image,
      registrationUrl,
      featured
    }`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : MOCK_EVENTS;
  } catch (error) {
    console.error('Error fetching events from Sanity:', error);
    return MOCK_EVENTS;
  }
}

// --- PARTNERS ---

export async function getPartners() {
  if (!isSanityConfigured || !sanityClient) {
    return MOCK_PARTNERS;
  }
  try {
    const query = `*[_type == "partner"] {
      _id,
      name,
      logo,
      website,
      description,
      featured
    }`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : MOCK_PARTNERS;
  } catch (error) {
    console.error('Error fetching partners from Sanity:', error);
    return MOCK_PARTNERS;
  }
}

// --- SITE SETTINGS ---

export async function getSiteSettings() {
  if (!isSanityConfigured || !sanityClient) {
    return MOCK_SITE_SETTINGS;
  }
  try {
    const query = `*[_type == "siteSettings"][0] {
      organizationName,
      logo,
      favicon,
      description,
      email,
      phone,
      address
    }`;
    const data = await sanityClient.fetch(query);
    return data || MOCK_SITE_SETTINGS;
  } catch (error) {
    console.error('Error fetching site settings from Sanity:', error);
    return MOCK_SITE_SETTINGS;
  }
}
