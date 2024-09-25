// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return  (
    <>
      {/* Hero Section */}
{/* Hero Section */}
<section className="relative h-screen flex items-center justify-center">
  {/* Background Image */}
  <Image
    src="/images/Hero.jpg"
    alt="Hero Image of Melissa"
    fill
    style={{ objectFit: 'cover' }}
    className="brightness-50"
    priority
  />
  
  {/* Content Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    {/* Title and Subtitle */}
    <div className="mb-10 md:mb-16">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 fade-in">
        ECHOES <span className="text-secondary">Melissa</span>
      </h1>
      <p className="text-xl md:text-2xl text-white fade-in delay-200">
        Erasmus+ ECHOES: Sustainable Culinary Exchange in Melissa
      </p>
    </div>
    
    {/* Embedded YouTube Video */}
    
  </div>
</section>



      {/* About ECHOES */}
      <section id="about-echoes" className="py-16 bg-light-bg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/about.jpg"
              alt="ECHOES Project Overview"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">About ECHOES</h2>
            <p className="text-lg mb-4">
              ECHOES was a 10-day exchange held in the village of Melissa, Southern Italy. The project brought together 20 people from across Europe to explore one main question: How can we rethink food to be more sustainable?
            </p>
            <p className="text-lg">
              The focus was on taking traditional recipes and adapting them to be plant-based and cruelty-free. Participants worked together and found ways to make these old dishes more sustainable, without losing their roots.
            </p>
          </div>
        </div>
      </section>

      {/* Vegan Cooking Workshops */}
      <section id="vegan-workshops" className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/about.jpg" // Reusing existing image as placeholder
              alt="Vegan Cooking Workshop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">Vegan Cooking Workshops</h2>
            <p className="text-lg mb-4">
              Each day, participants engaged in a cooking workshop focused on turning traditional recipes from the participant countries into vegan versions. It wasn’t just about swapping out ingredients; it was about rethinking how food is made, preserved, and shared, all while keeping the spirit of the dish alive.
            </p>
            <p className="text-lg mb-6">
              These workshops fostered collaboration and creativity, allowing participants to innovate while respecting culinary traditions.
            </p>
            <Link
              href="/recipes"
              className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors duration-300"
            >
              Explore Our Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Filming and Storytelling */}
{/* Filming and Storytelling */}
      <section id="filming-storytelling" className="py-16 bg-light-bg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Embedded YouTube Video replacing the image */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {/* Aspect Ratio for Responsive Video */}
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  className="w-full h-full"
                  title="ECHOES Documentary"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-4xl font-bold mb-4">Filming and Storytelling</h2>
            <p className="text-lg mb-4">
              Alongside cooking, participants worked on capturing the experience through film. They used theater and video production to tell the story of what they were learning, turning everyday moments into part of the documentary. It wasn’t just about showing the “how-to” of recipes—it was about showing the why.
            </p>
            {/* Button Removed */}
          </div>
        </div>
      </section>



      {/* Connecting with Nature and Culture */}
      <section id="nature-culture" className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/melissa_logo.png"
              alt="Connecting with Nature and Culture"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">Connecting with Nature and Culture</h2>
            <p className="text-lg mb-4">
              The setting in Melissa, with its quiet streets, rich history, and open landscapes, helped drive home the point. Participants spent time walking through the countryside and exploring Melissa’s past, reflecting on the connection between food, health, culture, and the environment.
            </p>
            <p className="text-lg mb-6">
              It was about seeing the big picture—how the food we eat affects the world around us and how engaging with a community's history can contribute to its revival.
            </p>
            <Link
              href="/about"
              className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors duration-300"
            >
              Learn More About Melissa
            </Link>
          </div>
        </div>
      </section>



        {/* Teatro Ebasko */}

      <section className="fade-in">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/Hero.jpg"
              alt="Teatro Ebasko"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">
              Teatro Ebasko&apos;s Role
            </h2>
            <p className="text-lg mb-4">
              Teatro Ebasko played a central role in organizing the project.
              Known for its focus on cultural and social initiatives, the
              theater group created a space where participants could not only
              learn about veganism but also reflect on how local traditions and
              sustainable practices intersect. The workshops went beyond
              cooking; they fostered discussions on how plant-based diets can
              address environmental challenges, promoting a more conscious way
              of living.
            </p>
            <p className="text-lg">
              Participants stayed in <em>Casa Kyma</em>, a residence run by
              Teatro Ebasko, which provided a communal atmosphere ideal for
              collaboration and learning. The experience was designed to be
              immersive, giving participants the chance to engage with
              Melissa&apos;s local community, visit historical sites, and fully
              integrate into the town&apos;s daily rhythms.
            </p>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section id="impact" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/town.jpg" // Using existing image as placeholder
              alt="The Impact of ECHOES"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">The Impact</h2>
            <p className="text-lg mb-4">
              By the end of ECHOES, participants left with more than just recipes. They gained a deeper understanding of how our food choices impact the environment and how small, practical changes can make a big difference. The documentary they created was more than a record—it became a tool to share these ideas with a wider audience.
            </p>
            <p className="text-lg font-semibold">
              Though the project started in Melissa, its impact reaches far beyond that small village.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Our Gallery */}
      <section
        id="gallery-cta"
        className="py-16 bg-black text-white rounded-lg overflow-hidden"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/about.jpg" // Reusing existing image as placeholder
              alt="Explore Our Gallery"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">Explore Our Gallery</h2>
            <p className="text-lg mb-6">
              Browse through photos capturing the essence of ECHOES.
            </p>
            <Link
              href="/gallery"
              className="bg-secondary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-accent transition-colors duration-300"
            >
              Visit the Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
