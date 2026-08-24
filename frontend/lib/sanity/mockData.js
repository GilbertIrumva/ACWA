export const MOCK_STORIES = [
  {
    _id: 'story-1',
    title: 'Transforming Arid Soil: The Story of ACWA Permaculture Gardens in Kakuma',
    slug: { current: 'transforming-arid-soil-permaculture-kakuma' },
    excerpt:
      'How refugee youth and host farmers came together to build water-harvesting swales and drought-resistant vegetable gardens in Kakuma.',
    publishedAt: '2025-02-10T09:00:00Z',
    category: 'Livelihoods',
    author: 'ACWA Communications Team',
    location: 'Kakuma Camp Zone 3 & Host Village',
    featuredImage: '/_MG_2602.jpg',
    body: `In the harsh, arid climate of Turkana County, access to fresh nutrition is a constant challenge for both refugee families and host communities. 

In early 2025, ARISE COMMUNITY WELFARE ACCESS (ACWA) launched a community permaculture demonstration site. By combining simple rainwater harvesting techniques with organic compost made from household waste, community participants transformed a quarter-acre plot into a thriving food forest.

"Before this training, we believed nothing could grow here without costly chemical fertilizers," explains one of the youth leaders. "Now, we harvest kale, cowpeas, and indigenous vegetables every week."

The permaculture project is not only providing vital nutrition for vulnerable households—it is also serving as a space for refugee and host community members to work side by side, building deep social bonds and mutual trust.`,
    gallery: [
      '/_MG_2602.jpg',
      '/IMG_20260203_172605_579.jpg',
    ],
    featured: true,
  },
  {
    _id: 'story-2',
    title: 'Bridging Communities: Peace Dialogues Bring Host and Refugee Elders Together',
    slug: { current: 'bridging-communities-peace-dialogues-kakuma' },
    excerpt:
      'Elders from Turkana host communities and refugee camp zones meet to discuss shared resource management and joint conflict resolution.',
    publishedAt: '2025-01-25T11:00:00Z',
    category: 'Peacebuilding',
    author: 'OMBENI MASUMBUKO',
    location: 'Kakuma Refugee Camp',
    featuredImage: '/_MG_2558.jpg',
    body: `Peace is built through continuous, respectful dialogue. Last month, ACWA facilitated a two-day peace dialogue forum bringing together 30 community leaders representing diverse ethnic groups within Kakuma Refugee Camp and neighboring Turkana villages.

Discussions focused on mitigating tensions around firewood collection, water point access, and youth unemployment. Through structured mediation, leaders established a joint Peace Committee with representatives from both communities.

"When we sit together under the shade tree and talk as human beings, we realize our goals for our children are exactly the same," shared a Turkana village elder.

ACWA continues to support the committee with monthly check-ins and conflict resolution refresher workshops.`,
    gallery: ['/IMG_20260113_180100_323.jpg'],
    featured: false,
  },
  {
    _id: 'story-3',
    title: 'Restoring Hope: Scholastic Kits & Remedial Classes for Vulnerable Children',
    slug: { current: 'restoring-hope-scholastic-kits-remedial-classes' },
    excerpt:
      'Providing essential learning materials and extra tutoring support to keep out-of-school and displaced children in primary education.',
    publishedAt: '2025-01-12T14:30:00Z',
    category: 'Education Support',
    author: 'ACWA Education Lead',
    location: 'Kakuma Primary Schools',
    featuredImage: '/_MG_2567.jpg',
    body: `Displacement often disrupts education for years. To prevent children from slipping through the cracks, ACWA’s Education Support program distributed scholastic packages containing notebooks, pens, mathematical sets, and school bags to vulnerable children.

In addition, volunteer teachers conduct weekend remedial classes in English and mathematics for children who have recently arrived in the camp or require extra academic support.

"Every child deserves the chance to learn and imagine a bright future," says OMBENI MASUMBUKO, ACWA Lead. "By removing basic material barriers, we give these children the confidence to stay in school."`,
    gallery: ['/IMG_20260223_081540_318.jpg'],
    featured: false,
  },
];

export const MOCK_IMPACT_RECORDS = [
  {
    _id: 'impact-1',
    title: 'Community Peace Dialogues',
    description: 'Regular inter-community dialogue forums conducted between refugee elders and host community leaders in Kakuma.',
    verified: true,
    program: 'Peacebuilding',
    year: '2025',
    location: 'Kakuma Camp & Host Villages',
  },
  {
    _id: 'impact-2',
    title: 'Educational Assistance',
    description: 'Scholastic kits and remedial learning support provided to vulnerable refugee and host community children.',
    verified: true,
    program: 'Education Support',
    year: '2025',
    location: 'Turkana County Schools',
  },
  {
    _id: 'impact-3',
    title: 'Permaculture Demonstration Project',
    description: 'Community food garden plots established to train local families in dryland farming and organic soil enrichment.',
    verified: true,
    program: 'Livelihoods',
    year: '2025',
    location: 'Kakuma Zone 3',
  },
  {
    _id: 'impact-4',
    title: 'Youth & Women Welfare Groups',
    description: 'Mobilized savings and capacity-building networks for women entrepreneurs and youth peace ambassadors.',
    verified: true,
    program: 'Community Development',
    year: '2025',
    location: 'Kakuma Refugee Camp',
  },
];

export const MOCK_PROGRAMS = [
  {
    _id: 'prog-1',
    slug: { current: 'peacebuilding' },
    title: 'Peacebuilding & Dialogue',
    category: 'Social Cohesion',
    shortDescription: 'Grassroots peace dialogues, conflict resolution training, youth ambassadors, and joint refugee-host forums.',
    description: 'Our peacebuilding program addresses social tensions between refugee camp zones and local host communities through inter-cultural dialogue, joint community projects, and trained conflict mediators.',
    heroImage: '/peace-building-and.jpg',
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
    _id: 'prog-2',
    slug: { current: 'education' },
    title: 'Education Support',
    category: 'Literacy & Learning',
    shortDescription: 'School support for vulnerable children, remedial tutoring, learning kits distribution, and adult English literacy.',
    description: 'We believe education is a fundamental right. We provide scholastic supplies, run weekend tutoring sessions, and sponsor vulnerable displaced children to stay enrolled.',
    heroImage: '/education.jpg',
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
    _id: 'prog-3',
    slug: { current: 'child-protection' },
    title: 'Child Protection & Welfare',
    category: 'Child Safeguarding',
    shortDescription: 'Support for vulnerable orphans, child rights awareness campaigns, psychosocial care, and safe community spaces.',
    description: 'Protecting children from harm, neglect, and trauma through community child protection networks, safe spaces, and psychosocial support.',
    heroImage: '/child-protection.jpg',
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
    _id: 'prog-4',
    slug: { current: 'livelihoods' },
    title: 'Livelihoods & Permaculture',
    category: 'Self-Reliance',
    shortDescription: 'Permaculture farming, poultry management, vocational craft training, and small business support for self-reliance.',
    description: 'Empowering refugee and host families to produce their own food and generate sustainable household income using dryland permaculture techniques.',
    heroImage: '/livelihood.jpg',
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
    _id: 'prog-5',
    slug: { current: 'community-health' },
    title: 'Community Health & Awareness',
    category: 'Health & Sanitation',
    shortDescription: 'Hygiene campaigns, mental health psychosocial support, nutrition education, and disease prevention awareness.',
    description: 'Promoting community health through preventive hygiene education, sanitation kits, MHPSS sessions, and maternal nutrition advice.',
    heroImage: '/Impact.jpg',
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

export const MOCK_TEAM_MEMBERS = [
  {
    _id: 'team-1',
    name: 'OMBENI MASUMBUKO',
    role: 'Executive Director & Founder',
    biography: 'Dedicated community organizer and peace builder with over a decade of experience advocating for refugees and host communities in Turkana County.',
    photo: '/_MG_2558.jpg',
    order: 1,
  },
  {
    _id: 'team-2',
    name: 'Sarah Akiru',
    role: 'Permaculture & Livelihoods Coordinator',
    biography: 'Agronomist specializing in dryland agriculture, water harvesting, and organic farming techniques adapted for Turkana.',
    photo: '/_MG_2602.jpg',
    order: 2,
  },
];

export const MOCK_TESTIMONIALS = [
  {
    _id: 'test-1',
    quote: 'ACWA’s permaculture training changed how our household views the desert. We now grow our own fresh greens in the middle of Kakuma.',
    name: 'Amina Hassan',
    role: 'Permaculture Program Beneficiary',
    organization: 'Kakuma Zone 2 Women Group',
    photo: '/_MG_2602.jpg',
    program: 'Livelihoods & Permaculture',
  },
  {
    _id: 'test-2',
    quote: 'Sitting together with refugee elders in ACWA peace forums restored trust between our villages.',
    name: 'Ekal James',
    role: 'Host Community Elder',
    organization: 'Kakuma Host Village Peace Committee',
    photo: '/_MG_2558.jpg',
    program: 'Peacebuilding',
  },
];

export const MOCK_EVENTS = [
  {
    _id: 'event-1',
    title: 'Kakuma Community Peace & Cultural Festival',
    slug: { current: 'kakuma-community-peace-cultural-festival' },
    description: 'Join us for a day of cultural exchange, sports, music, and joint peace dialogues celebrating diversity in Kakuma.',
    date: '2025-06-20T10:00:00Z',
    location: 'Kakuma Main Stadium',
    image: '/peace-building-and.jpg',
    registrationUrl: 'https://acwa.org/events/peace-festival',
    featured: true,
  },
];

export const MOCK_PARTNERS = [
  {
    _id: 'partner-1',
    name: 'Community Peace Network',
    website: 'https://acwa.org',
    logo: '/partner1.png',
    description: 'Grassroots coalition promoting peace and human rights.',
    featured: true,
  },
];

export const MOCK_SITE_SETTINGS = {
  organizationName: 'ARISE COMMUNITY WELFARE ACCESS (ACWA)',
  logo: '/acwalogo.jpg',
  description: 'A community-based organization in Kakuma, Turkana County, Kenya, committed to peacebuilding, education, child welfare, livelihoods, and health.',
  email: 'arisecwel.acces@gmail.com',
  address: 'Kakuma Refugee Camp & Host Community, Turkana County, Kenya',
};
