// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold mb-8">Welcome to MyTown</h1>
      <p className="text-xl mb-8">
        Discover the beauty and community spirit of our town.
      </p>
      <Link href="/about" className="text-blue-600 hover:underline">
        Learn more about us →
      </Link>
    </section>
  );
}
