import type { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const base = 'https://main.d3rz0kte5h5b6q.amplifyapp.com';
  const lastModified = new Date().toISOString();

  const routes = ['', '/about', '/services', '/workshops', '/testimonials', '/booking', '/legal'];

  return routes.map((path) => ({
    url: `${base}${path || '/'}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
};

export default sitemap;
