// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/Hero.jpg"
          alt="Hero Image"
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-extrabold text-white mb-4 fade-in">
            Welcome to Melissa
          </h1>
          <p className="text-2xl text-white mb-8 fade-in delay-200">
            Experience the charm and community spirit of our beautiful town.
          </p>
          <Link
            href="/about"
            className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors duration-300 fade-in delay-400"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 fade-in">
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
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">Discover Our Heritage</h2>
            <p className="text-lg mb-4">
              Melissa is a town rich in history and tradition, known for its
              vineyards and exquisite wine production. The name
              &quot;Melissa&quot; derives from the Greek word for
              &quot;honey,&quot; symbolizing our sweet connection to both honey
              and wine.
            </p>
            <p className="text-lg">
              Join us in exploring the unique blend of ancient traditions and
              modern living that defines Melissa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
