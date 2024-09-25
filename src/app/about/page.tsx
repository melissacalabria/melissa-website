// src/app/about/page.tsx
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - ECHOES Erasmus+',
  description: 'Learn more about our charming town and Erasmus+ projects.',
};

export default function About() {
  return (
    <div className="space-y-16">
      {/* Introduction Section */}
      <section className="fade-in">
        <h1 className="text-5xl font-extrabold mb-6">About Melissa</h1>
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
      <section className="fade-in flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12">
          <h2 className="text-3xl font-bold mb-4">
            Rich Agricultural Heritage
          </h2>
          <p className="text-lg mb-4">
            Melissa, a small town with a population of around 3,200, has a
            history steeped in legend, particularly the tale of the witch Melissa.
            According to local folklore, Melissa was fleeing the Spanish Inquisition
            when she sought refuge in the area, eventually founding the town that now
            bears her name. This myth has intertwined with the town's identity, adding
            a layer of mystique to its already rich historical background.
          </p>
          <p className="text-lg">
            Agriculture plays a central role in Melissa's identity. The town is known for its
            production of wine, olive oil, and other local products that are deeply connected
            to its landscape. Visitors can experience this connection firsthand by exploring
            Melissa's traditional farming methods that continue to thrive today.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/images/town.jpg"
            alt="Our Town"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Mother Church of Saint Nicholas */}
      <section className="fade-in flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 order-1">
          <Image
            src="/images/about.jpg"
            alt="Mother Church of Saint Nicholas"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 order-2">
          <h2 className="text-3xl font-bold mb-4">
            Mother Church of Saint Nicholas
          </h2>
          <p className="text-lg">
            The Mother Church of Saint Nicholas is one of Melissa’s most significant
            religious landmarks. This church has stood as a place of worship for centuries,
            dedicated to Saint Nicholas, the protector of sailors and children. Its historical
            architecture and spiritual significance make it a must-see for visitors.
          </p>
        </div>
      </section>

      {/* Wine Museum - Palazzo Ferraro */}
      <section className="fade-in flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 order-2 md:order-1 md:pr-12 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Wine Museum - Palazzo Ferraro</h2>
          <p className="text-lg">
            Palazzo Ferraro houses the Wine Museum, celebrating Melissa’s long-standing tradition
            of viticulture. Visitors can explore the local winemaking process, learn about the history
            of wine production, and taste some of the region’s finest DOC wines.
          </p>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <Image
            src="/images/about.jpg"
            alt="Wine Museum - Palazzo Ferraro"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Old Olive Oil Mill */}
<section className="fade-in flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 md:order-2">
    <Image
      src="/images/town.jpg"
      alt="Old Olive Oil Mill"
      width={600}
      height={400}
      className="rounded-lg shadow-lg"
    />
  </div>
  <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0 md:order-1">
    <h2 className="text-3xl font-bold mb-4">Old Olive Oil Mill</h2>
    <p className="text-lg">
      Melissa’s historical olive oil mill offers a glimpse into the traditional methods of
      olive oil production. The mill is a testament to the town’s agricultural heritage,
      where ancient groves still produce some of the finest olive oil in the region.
    </p>
  </div>
</section>


      {/* Melissa Castle */}
      <section className="fade-in flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 order-1">
          <Image
            src="/images/town.jpg"
            alt="Melissa Castle"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 order-2">
          <h2 className="text-3xl font-bold mb-4">Melissa Castle</h2>
          <p className="text-lg">
            Perched atop a hill, Melissa Castle offers panoramic views of the surrounding countryside.
            This medieval fortress, once a seat of local power, now stands in ruins, offering a unique
            window into the town’s feudal history.
          </p>
        </div>
      </section>

    

      {/* Monument to the Fallen of Fragalà */}
      <section className="fade-in flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 order-2 md:order-1 md:pr-12 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Monument to the Fallen of Fragalà</h2>
          <p className="text-lg">
            This monument honors those who died during the peasant uprising in 1949. The farmers who
            attempted to reclaim land were met with violent opposition, leading to the tragic deaths of
            three locals. This monument serves as a reminder of their sacrifice and the town’s
            ongoing fight for justice and land reform.
          </p>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <Image
            src="/images/about.jpg"
            alt="Monument to the Fallen of Fragalà"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* 1949 Peasant Uprising */}
      <section className="fade-in flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 order-1">
          <Image
            src="/images/Hero.jpg"
            alt="Peasant Struggles of 1949"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 order-2">
          
          <h2 className="text-3xl font-bold mb-4">
            A Pivotal Moment: The 1949 Peasant Uprising
          </h2>
          <p className="text-lg">
            On October 29, 1949, Melissa became the site of a tragic event that would mark a turning
            point in the history of agrarian reform in southern Italy. The police opened fire on local
            farmers occupying land owned by absentee landlords, killing three people. Known as the
            Melissa Massacre, this event sparked national outrage and catalyzed reforms that would
            eventually lead to the redistribution of land.
          </p>
        </div>
      </section>
    </div>
  );
}
