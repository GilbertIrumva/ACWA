/**
 * Sanity CMS Live Content Seeding Script for ACWA Website
 * Run using: node scripts/seedSanity.js
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

// Read .env.local manually
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const parts = trimmed.split('=');
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim();
      process.env[key] = val;
    }
  });
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'k719qx1s';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  console.error('❌ Error: SANITY_API_READ_TOKEN is missing in .env.local');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
});

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  organizationName: 'ARISE COMMUNITY WELFARE ACCESS (ACWA)',
  description:
    'A refugee and host community-led organization in Kakuma, Turkana County, Kenya, committed to peacebuilding, education, child welfare, livelihoods, and health.',
  email: 'arisecwel.acces@gmail.com',
  address: 'Kakuma Refugee Camp & Host Community, Turkana County, Kenya',
};

const programs = [
  {
    _id: 'program-peacebuilding',
    _type: 'program',
    title: 'Peacebuilding & Dialogue',
    slug: { _type: 'slug', current: 'peacebuilding' },
    category: 'Social Cohesion',
    shortDescription:
      'Grassroots peace dialogues, conflict resolution training, youth ambassadors, and joint refugee-host forums.',
    activities: [
      'Community peace dialogues in Kakuma camp zones & host villages',
      'Conflict resolution & mediation training for elders and leaders',
      'Peace awareness campaigns during cultural & sporting events',
      'Youth engagement for peace and social cohesion',
    ],
    beneficiaries: 'Refugee elders, host community leaders, youth groups',
    location: 'Kakuma Refugee Camp & Turkana Host Villages',
    featured: true,
    order: 1,
  },
  {
    _id: 'program-education',
    _type: 'program',
    title: 'Education Support',
    slug: { _type: 'slug', current: 'education' },
    category: 'Literacy & Learning',
    shortDescription:
      'School support for vulnerable children, remedial tutoring, learning kits distribution, and adult English literacy.',
    activities: [
      'School support and scholastic kits for vulnerable children',
      'Remedial classes for struggling primary & secondary students',
      'Functional English courses for adult refugees',
      'Distribution of books and learning materials',
    ],
    beneficiaries: 'School children, out-of-school youth, adult refugees',
    location: 'Kakuma Primary & Secondary Schools',
    featured: true,
    order: 2,
  },
  {
    _id: 'program-child-protection',
    _type: 'program',
    title: 'Child Protection & Welfare',
    slug: { _type: 'slug', current: 'child-protection' },
    category: 'Child Safeguarding',
    shortDescription:
      'Support for vulnerable orphans, child rights awareness campaigns, psychosocial care, and safe community spaces.',
    activities: [
      'Support & welfare assistance for orphans and vulnerable children',
      'Child rights awareness workshops with community leaders',
      'Psychosocial support & counseling sessions',
      'Creation of safe, protective child environments',
    ],
    beneficiaries: 'Vulnerable children, orphans, child-headed households',
    location: 'Kakuma Community Centers',
    featured: true,
    order: 3,
  },
  {
    _id: 'program-livelihoods',
    _type: 'program',
    title: 'Livelihoods & Permaculture',
    slug: { _type: 'slug', current: 'livelihoods' },
    category: 'Self-Reliance',
    shortDescription:
      'Permaculture farming, poultry management, vocational craft training, and small business support for self-reliance.',
    activities: [
      'Permaculture project: water-efficient crop farming & soil regeneration',
      'Vocational skills training & craft production',
      'Small business mentorship and bookkeeping training',
      'Poultry farming & micro-livestock initiatives',
    ],
    beneficiaries: 'Women groups, youth entrepreneurs, refugee households',
    location: 'ACWA Permaculture Demo Plot, Kakuma Zone 3',
    featured: true,
    order: 4,
  },
  {
    _id: 'program-community-health',
    _type: 'program',
    title: 'Community Health & Awareness',
    slug: { _type: 'slug', current: 'community-health' },
    category: 'Health & Sanitation',
    shortDescription:
      'Hygiene campaigns, mental health psychosocial support, nutrition education, and disease prevention awareness.',
    activities: [
      'Hygiene and sanitation campaigns across camp zones',
      'Mental health and psychosocial support (MHPSS) workshops',
      'Nutrition guidance for pregnant women and mothers',
      'Preventive health education & clean water awareness',
    ],
    beneficiaries: 'Women, mothers, vulnerable families across Kakuma',
    location: 'Kakuma Camp Zones & Health Centers',
    featured: true,
    order: 5,
  },
];

const stories = [
  {
    _id: 'story-permaculture-kakuma',
    _type: 'story',
    title: 'Transforming Arid Soil: The Story of ACWA Permaculture Gardens in Kakuma',
    slug: { _type: 'slug', current: 'transforming-arid-soil-permaculture-kakuma' },
    excerpt:
      'How refugee youth and host farmers came together to build water-harvesting swales and drought-resistant vegetable gardens in Kakuma.',
    category: 'Livelihoods',
    author: 'ACWA Communications Team',
    location: 'Kakuma Camp Zone 3 & Host Village',
    publishedAt: new Date().toISOString(),
    publishedStatus: true,
    featured: true,
  },
  {
    _id: 'story-peace-dialogues',
    _type: 'story',
    title: 'Bridging Communities: Peace Dialogues Bring Host and Refugee Elders Together',
    slug: { _type: 'slug', current: 'bridging-communities-peace-dialogues-kakuma' },
    excerpt:
      'Elders from Turkana host communities and refugee camp zones meet to discuss shared resource management and joint conflict resolution.',
    category: 'Peacebuilding',
    author: 'OMBENI MASUMBUKO',
    location: 'Kakuma Refugee Camp',
    publishedAt: new Date().toISOString(),
    publishedStatus: true,
    featured: false,
  },
];

const impactRecords = [
  {
    _id: 'impact-peace-dialogues',
    _type: 'impact',
    title: 'Community Peace Dialogues',
    number: 30,
    unit: '+ Peace Forums Held',
    description:
      'Regular inter-community dialogue forums conducted between refugee elders and host community leaders in Kakuma.',
    year: '2025',
    program: 'Peacebuilding',
    location: 'Kakuma Camp & Host Villages',
    verified: true,
    featured: true,
  },
  {
    _id: 'impact-educational-kits',
    _type: 'impact',
    title: 'Educational Assistance',
    number: 500,
    unit: '+ Children Supported',
    description:
      'Scholastic kits and remedial learning support provided to vulnerable refugee and host community children.',
    year: '2025',
    program: 'Education Support',
    location: 'Turkana County Schools',
    verified: true,
    featured: true,
  },
];

async function seedData() {
  console.log(`🌱 Seeding initial ACWA content into Sanity Dataset: ${dataset} (Project: ${projectId})...\n`);

  try {
    // 1. Create Site Settings
    console.log('📦 Creating Site Settings...');
    await client.createOrReplace(siteSettings);

    // 2. Create Programs
    console.log('📦 Creating Programs...');
    for (const prog of programs) {
      await client.createOrReplace(prog);
      console.log(`   ✓ Program: ${prog.title}`);
    }

    // 3. Create Stories
    console.log('📦 Creating Stories...');
    for (const st of stories) {
      await client.createOrReplace(st);
      console.log(`   ✓ Story: ${st.title}`);
    }

    // 4. Create Impact Records
    console.log('📦 Creating Impact Records...');
    for (const imp of impactRecords) {
      await client.createOrReplace(imp);
      console.log(`   ✓ Impact: ${imp.title}`);
    }

    console.log('\n🎉 Sanity Content Seeding Completed Successfully!');
    console.log('👉 Open http://localhost:3000/studio to view and edit your live Sanity content.');
  } catch (error) {
    console.error('\n❌ Seeding Error:', error.message);
    if (error.message.includes('Insufficient permissions')) {
      console.log('\n💡 Note: Your SANITY_API_READ_TOKEN in .env.local is read-only.');
      console.log('   To seed via CLI script, create an API Token with "Editor" or "Administrator" permissions at https://manage.sanity.io > API > Tokens.');
      console.log('   Or log in directly to http://localhost:3000/studio to create and publish content from your browser!');
    }
  }
}

seedData();
