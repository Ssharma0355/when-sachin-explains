import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // better Core Web Vitals
});

/* =========================
   SEO & METADATA
========================= */
export const metadata: Metadata = {
  metadataBase: new URL('https://whensachinexplains.com'), // 🔁 replace with real domain

  title: {
    default: 'When Sachin Explains | Tech, Tutorials & Insights',
    template: '%s | When Sachin Explains',
  },

  description:
    'When Sachin Explains simplifies complex tech topics through clear tutorials, system design insights, frontend development guides, and real-world engineering explanations.',

  keywords: [
    'When Sachin Explains',
    'Sachin Explains',
    'Tech Tutorials',
    'Frontend Development',
    'React Tutorials',
    'Next.js',
    'JavaScript',
    'Web Development',
    'Software Engineering',
    'Programming YouTube Channel',
  ],

  authors: [{ name: 'Sachin Sharma' }],
  creator: 'Sachin Sharma',
  publisher: 'When Sachin Explains',

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

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://whensachinexplains.com',
    title: 'When Sachin Explains | Tech, Tutorials & Insights',
    description:
      'Clear, practical explanations of tech, programming, and modern software development by Sachin.',
    siteName: 'When Sachin Explains',
    images: [
      {
        url: '/og-image.jpg', // 👉 public/og-image.jpg
        width: 1200,
        height: 630,
        alt: 'When Sachin Explains - Tech & Programming',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'When Sachin Explains',
    description:
      'Simplifying complex tech topics with practical tutorials and insights.',
    creator: '@your_twitter_handle', // optional
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}
      >
        <main className="min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}
