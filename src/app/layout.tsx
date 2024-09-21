// app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar';
import { Metadata } from 'next';

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
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
