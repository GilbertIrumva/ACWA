/**
 * Comprehensive Sanity CMS Studio Schemas for ACWA Website
 */
import { blockContentSchema } from './blockContent';

export const programSchema = {
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(120),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      placeholder: 'e.g. Social Cohesion, Literacy & Learning, Self-Reliance',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    },
    {
      name: 'description',
      title: 'Detailed Description',
      type: 'blockContent',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alternative Text', type: 'string' }
      ]
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'activities',
      title: 'Key Activities',
      type: 'array',
      of: [{ type: 'string' }],
    },
    { name: 'beneficiaries', title: 'Target Beneficiaries', type: 'string' },
    { name: 'location', title: 'Location / Zone', type: 'string' },
    { name: 'startDate', title: 'Start Date', type: 'date' },
    { name: 'endDate', title: 'End Date', type: 'date' },
    { name: 'impact', title: 'Impact Statement', type: 'text' },
    { name: 'featured', title: 'Featured on Homepage', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Display Order', type: 'number', initialValue: 0 },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'heroImage',
    },
  },
};

export const storySchema = {
  name: 'story',
  title: 'Story / News',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(150),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(350),
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'blockContent',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alternative Text', type: 'string' }
      ]
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    { name: 'program', title: 'Program Category', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'author', title: 'Author', type: 'string', initialValue: 'ACWA Communications Team' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime', initialValue: () => new Date().toISOString() },
    { name: 'publishedStatus', title: 'Published Status', type: 'boolean', initialValue: true },
    { name: 'featured', title: 'Featured on Homepage', type: 'boolean', initialValue: false },
    { name: 'category', title: 'Category Tag', type: 'string' },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'featuredImage',
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author ? `By ${author}` : 'Article',
        media,
      };
    },
  },
};

export const impactSchema = {
  name: 'impact',
  title: 'Impact Record',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    { name: 'number', title: 'Number Metric (e.g. 500)', type: 'number' },
    { name: 'unit', title: 'Unit / Label (e.g. + Children Supported)', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'year', title: 'Year', type: 'string', initialValue: '2025' },
    { name: 'program', title: 'Program Area', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'verified', title: 'Verified Status', type: 'boolean', initialValue: true },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: true },
  ],
  preview: {
    select: {
      title: 'title',
      number: 'number',
      unit: 'unit',
    },
    prepare({ title, number, unit }) {
      return {
        title,
        subtitle: number && unit ? `${number} ${unit}` : title,
      };
    },
  },
};

export const teamMemberSchema = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    { name: 'biography', title: 'Biography', type: 'text', rows: 4 },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'linkedin', title: 'LinkedIn Profile', type: 'url' },
    { name: 'order', title: 'Display Order', type: 'number', initialValue: 0 },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
};

export const testimonialSchema = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'organization', title: 'Organization / Community Group', type: 'string' },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'program', title: 'Associated Program', type: 'string' },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
};

export const eventSchema = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    { name: 'description', title: 'Description', type: 'blockContent' },
    { name: 'date', title: 'Event Date & Time', type: 'datetime', validation: (Rule) => Rule.required() },
    { name: 'location', title: 'Location', type: 'string' },
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'registrationUrl', title: 'Registration URL', type: 'url' },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image',
    },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'Upcoming Event',
        media,
      };
    },
  },
};

export const partnerSchema = {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    { name: 'website', title: 'Website URL', type: 'url' },
    { name: 'description', title: 'Description', type: 'text', rows: 2 },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: true },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'website',
      media: 'logo',
    },
  },
};

export const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'organizationName',
      title: 'Organization Name',
      type: 'string',
      initialValue: 'ARISE COMMUNITY WELFARE ACCESS (ACWA)',
      validation: (Rule) => Rule.required(),
    },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'favicon', title: 'Favicon', type: 'image' },
    { name: 'description', title: 'Organization Summary', type: 'text', rows: 3 },
    { name: 'email', title: 'Official Email', type: 'string', initialValue: 'arisecwel.acces@gmail.com' },
    { name: 'phone', title: 'Official Phone', type: 'string' },
    { name: 'address', title: 'Location Address', type: 'string', initialValue: 'Kakuma Refugee Camp & Host Community, Turkana County, Kenya' },
  ],
};

export const schemaTypes = [
  blockContentSchema,
  programSchema,
  storySchema,
  impactSchema,
  teamMemberSchema,
  testimonialSchema,
  eventSchema,
  partnerSchema,
  siteSettingsSchema,
];
