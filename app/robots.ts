import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  const base = 'https://main.d3rz0kte5h5b6q.amplifyapp.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: [`${base}/sitemap.xml`],
    host: base,
  };
};

export default robots;
