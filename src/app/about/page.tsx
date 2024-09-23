// src/app/about/page.tsx
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - MyTown',
  description: 'Learn more about our charming town.',
};

export default function About() {
  return (
    <div className="space-y-16">
      {/* Introduction Section */}
      <section className="fade-in">
        <h1 className="text-5xl font-extrabold mb-6">About Our Town</h1>
        <p className="text-lg leading-relaxed">
          The Erasmus+ project hosted by Teatro Ebasko in Melissa, Calabria, was
          a hands-on and immersive experience focused on vegan cooking,
          sustainability, and cultural exchange. Over 10 days, participants from
          Croatia, Portugal, Poland, and Italy gathered to explore new
          perspectives on food and sustainability, while delving into the rich
          historical and agricultural traditions of Melissa.
        </p>
      </section>

      {/* History and Agriculture */}
      <section className="fade-in">
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
            <h2 className="text-3xl font-bold mb-4">
              Rich Agricultural Heritage
            </h2>
            <p className="text-lg mb-4">
              Melissa, a small town with a population of around 3,200, has a
              history tied to its agricultural roots, especially its vineyards
              and wine production. The town&apos;s name comes from the Greek
              word for &quot;honey,&quot; reflecting its sweet historical
              connection to both honey production and wine.
            </p>
            <p className="text-lg">
              The Erasmus+ project emphasized these local agricultural
              traditions, especially through vegan cooking workshops that
              connected participants with the region&apos;s abundant natural
              resources. Using local, seasonal ingredients, the workshops
              provided an opportunity to explore plant-based cooking, aligning
              with sustainable and ethical food practices. This was particularly
              significant in a region known for its rich wine culture,
              particularly the <em>Melissa DOC</em> wines.
            </p>
          </div>
        </div>
      </section>

      {/* Documentary and Cultural Exchange */}
      <section className="fade-in">
        <h2 className="text-3xl font-bold mb-6">
          Documentary and Cultural Exchange
        </h2>
        <p className="text-lg mb-4">
          The project wasn&apos;t just about cooking. Participants also worked
          together on a documentary, which highlighted Melissa&apos;s unique
          history and its efforts toward sustainable living. The documentary
          explored key landmarks like the{' '}
          <em>Monument to the Fallen of Fragalà</em>, which commemorates a
          tragic event in 1949 when three locals were killed during a peasant
          protest against landowners. The monument, along with Melissa&apos;s
          medieval streets and ancient churches, served as visual anchors for
          the film, adding a layer of historical context to the project.
        </p>
        <div className="flex justify-center mt-8">
          <Image
            src="/images/about.jpg"
            alt="Monument to the Fallen of Fragalà"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Teatro Ebasko and Sustainability */}
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

      {/* Historical Landmarks */}
      <section className="fade-in">
        <h2 className="text-3xl font-bold mb-6">
          Explore Our Historical Landmarks
        </h2>
        <p className="text-lg mb-4">
          Beyond the cooking and documentary-making, participants also had the
          opportunity to explore Melissa&apos;s historical landmarks, like the{' '}
          <em>Chiesa di San Giacomo Apostolo</em> and the remnants of the
          medieval castle, which offer a window into the town&apos;s feudal
          past.
        </p>
        <div className="flex justify-center mt-8">
          <Image
            src="/images/town.jpg"
            alt="Chiesa di San Giacomo Apostolo"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Conclusion */}
      <section className="fade-in">
        <h2 className="text-3xl font-bold mb-6">
          A Blend of Tradition and Sustainability
        </h2>
        <p className="text-lg">
          In summary, the Erasmus+ project in Melissa was an expansive cultural
          exchange that blended vegan cooking workshops, historical exploration,
          and documentary filmmaking. The project provided participants with
          both practical skills in sustainable cooking and a deeper
          understanding of how food traditions can connect with environmental
          responsibility. Through their time in Melissa, they not only learned
          about veganism but also gained insights into how ancient traditions
          can inform modern sustainability practices.
        </p>
      </section>
    </div>
  );
}
