export default async function sitemap() {
  // 1. Your primary website domain for all pages
  const baseUrl = 'https://www.b2bseodigitalagency.co.uk';

  // 2. Fetch dynamic blog posts teqnoor
  let blogEntries = [];
  try {
    const res = await fetch('https://teqnoor.com/api/blogs', { cache: 'no-store' });
    const json = await res.json();
    const posts = json.blogs || json.data || json;

    if (Array.isArray(posts)) {
      blogEntries = posts.map((post) => ({
        // Even though blogs come from TeqNoor's database, their public URL is on your main site
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt || post.created_at || new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    }
  } catch (err) {
    console.error("Sitemap Blog Fetch Error:", err);
  }

  // 3. Define all your static pages on your main domain
  const staticPaths = [
    '',
    '/about',
    '/contact',
    '/ai-seo',
    '/b2b-seo-services',
    '/b2b-seo-consultant',
    '/b2b-seo-audit',
    '/saas-seo',
    '/seo-for-accountants',
    '/seo-for-law-firms',
    '/healthcare-seo',
    '/seo-for-financial-services',
    '/wholesale-food-seo',
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