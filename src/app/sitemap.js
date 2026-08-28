export default async function sitemap() {
  const baseUrl = 'https://teqnoor.com';

  // 1. Fetch dynamic blog posts from your TeqNoor blog endpoint
  let blogEntries = [];
  try {
    const res = await fetch('https://teqnoor.com/api/blogs', { cache: 'no-store' });
    const json = await res.json();
    const posts = json.blogs || json.data || json;

    if (Array.isArray(posts)) {
      blogEntries = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt || post.created_at || new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    }
  } catch (err) {
    console.error("Sitemap Blog Fetch Error:", err);
  }

  // 2. Define all static paths mapped precisely from your navigation menus
  const staticPaths = [
    // Main
    '',
    '/about',
    '/contact',

    // Services Dropdown
    '/ai-seo',
    '/b2b-seo-services',
    '/b2b-seo-consultant',
    '/b2b-seo-audit',

    // Industries Dropdown
    '/saas-seo',
    '/seo-for-accountants',
    '/seo-for-law-firms',
    '/healthcare-seo',
    '/seo-for-financial-services',

    // Case Studies Dropdown
    '/wholesale-food-seo',

    // Insights Dropdown
    '/blog',
  ];

  const staticRoutes = staticPaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : route.includes('seo') || route.includes('services') ? 0.9 : 0.8,
  }));

  return [...staticRoutes, ...blogEntries];
}