import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'When Sachin Explains | Tech, Tutorials & Insights',
  description: 'Official portfolio of When Sachin Explains. Explore the latest YouTube tutorials, Instagram updates, and in-depth tech blogs.',
  openGraph: {
    title: 'When Sachin Explains',
    description: 'Simplifying complex topics.',
    images: ['/og-image.jpg'], // Add a brand banner here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}