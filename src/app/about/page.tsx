// app/about/page.tsx
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - MyTown',
  description: 'Learn more about our charming town.',
};

export default function About() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Our Town</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <Image
            src="/images/town.jpg"
            alt="Our Town"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <p className="mb-4">
            Nestled in the heart of the countryside, our town offers a unique
            blend of history and modern living.
          </p>
          <p>
            With friendly residents and beautiful landscapes, it's the perfect
            place to call home.
          </p>
        </div>
      </div>
    </section>
  );
}
