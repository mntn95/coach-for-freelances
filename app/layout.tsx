import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { Toaster } from './components/ui';
import './styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://main.d3rz0kte5h5b6q.amplifyapp.com'),
  title: {
    default: 'Laura Bianchi - Coach pour Freelances',
    template: '%s | Laura Bianchi',
  },
  description:
    'Coach professionnelle pour freelances IT qui veulent dépasser les 5k€/mois et trouver leur liberté.',
  keywords: [
    'coach freelances',
    'coaching freelance IT',
    'tarifs freelances',
    'trouver clients freelance',
    'prospection freelance',
    'business freelance',
    'indépendant',
    'France',
  ],
  authors: [{ name: 'Laura Bianchi' }],
  creator: 'Laura Bianchi',
  publisher: 'Laura Bianchi',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Laura Bianchi',
    url: '/',
    title: 'Laura Bianchi - Coach pour Freelances',
    description:
      'Coach professionnelle pour freelances IT qui veulent dépasser les 5k€/mois et trouver leur liberté.',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laura Bianchi - Coach pour Freelances',
    description:
      'Coach professionnelle pour freelances IT qui veulent dépasser les 5k€/mois et trouver leur liberté.',
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'business',
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/logo.png' }],
  },
  manifest: '/manifest.webmanifest',
};

export const viewport = {
  themeColor: '#ffffff',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="fr">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      suppressHydrationWarning
    >
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <Toaster />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Laura Bianchi',
            url: 'https://main.d3rz0kte5h5b6q.amplifyapp.com',
            logo: 'https://main.d3rz0kte5h5b6q.amplifyapp.com/logo.png',
            sameAs: ['https://www.linkedin.com/in/placeholder', 'https://x.com/placeholder'],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Laura Bianchi - Coach pour Freelances',
            url: 'https://main.d3rz0kte5h5b6q.amplifyapp.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://main.d3rz0kte5h5b6q.amplifyapp.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </body>
  </html>
);

export default RootLayout;
