// src/app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'My Awesome Town',
  description: 'Discover the beauty and community of our town.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main className="container mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
