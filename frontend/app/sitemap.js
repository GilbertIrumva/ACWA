export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://acwakenya.org';

  const routes = [
    '',
    '/about',
    '/programs',
    '/programs/peacebuilding',
    '/programs/education',
    '/programs/child-protection',
    '/programs/livelihoods',
    '/programs/community-health',
    '/impact',
    '/stories',
    '/stories/transforming-arid-soil-permaculture-kakuma',
    '/stories/bridging-communities-peace-dialogues-kakuma',
    '/stories/restoring-hope-scholastic-kits-remedial-classes',
    '/get-involved',
    '/partner-with-us',
    '/donate',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/programs') ? 0.9 : 0.8,
  }));
}
