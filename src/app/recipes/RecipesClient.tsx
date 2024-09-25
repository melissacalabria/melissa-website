// src/app/recipes/RecipesClient.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useNavbarHeight } from '../components/NavbarContext';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

type Recipe = {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  instructions: string;
};

type RecipesClientProps = {
  recipes: Recipe[];
};

const Measurement = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-primary dark:text-accent">{children}</span>
);

export default function RecipesClient({ recipes }: RecipesClientProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const navbarHeight = useNavbarHeight();

  const openModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="space-y-16 p-8 bg-light-bg dark:bg-dark-bg transition-colors duration-500">
      {/* Enhanced Title Section */}
      <section className="fade-in text-center py-12 px-8">
        <h1 className="text-5xl font-extrabold mb-6 text-primary dark:text-white">
          Our Recipes
        </h1>
        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Discover a variety of delicious vegan recipes inspired by Melissa&apos;s rich
          agricultural heritage. Click on any recipe to view detailed instructions.
        </p>
      </section>

      {/* Recipes Grid */}
      <section className="fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe: Recipe) => (
          <button
            key={recipe.id}
            className="relative bg-secondary rounded-xl overflow-hidden cursor-pointer group transition-transform duration-500 hover:scale-105 hover:shadow-xl focus:outline-none"
            onClick={() => openModal(recipe)}
            aria-label={`View details for ${recipe.title}`}
          >
            {/* Image filling the entire card */}
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Centered overlay text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                <h2 className="text-3xl font-extrabold tracking-wide drop-shadow-lg group-hover:scale-105 transition-all duration-500">
                  {recipe.title}
                </h2>
                <p className="mt-4 text-lg font-light drop-shadow-lg opacity-90 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                  {recipe.shortDescription}
                </p>
              </div>

              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent transition-all duration-500"></div>
            </div>
          </button>
        ))}
      </section>

      {/* Modal */}
      {selectedRecipe && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 animate-fadeIn"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div
            className="fixed inset-x-0 bottom-0 z-50 flex justify-center animate-fadeIn"
            style={{ top: `${navbarHeight}px` }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={closeModal} // Close modal when clicking outside
          >
            <div
              className="bg-light-blue dark:bg-gray-900 rounded-lg max-w-2xl w-full mx-4 my-8 relative animate-slideIn max-h-[calc(100vh-${navbarHeight}px-4rem)] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                className="absolute top-4 right-4 bg-opacity-50 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-accent z-50 rounded-full p-2"
                onClick={closeModal}
                aria-label="Close Modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="p-6">
                <h2 id="modal-title" className="text-3xl font-bold mb-4 text-primary dark:text-accent pr-8">
                  {selectedRecipe.title}
                </h2>
                <div className="relative w-full h-64 mb-6">
                  <Image
                    src={selectedRecipe.image}
                    alt={selectedRecipe.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    loading="eager"
                    priority
                  />
                </div>
                <div className="prose max-w-none prose-headings:text-2xl prose-headings:font-semibold prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg prose-li:leading-relaxed dark:prose-invert">
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      h3: ({node, ...props}) => <h3 className="text-xl font-bold text-primary dark:text-accent mt-6 mb-3" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
                      li: ({node, ...props}) => (
                        <li className="mb-2 flex items-start">
                          <span className="mr-2 text-primary dark:text-accent">•</span>
                          <span {...props} />
                        </li>
                      ),
                      p: ({node, ...props}) => <p className="mb-4" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-bold text-primary dark:text-accent" {...props} />,
                      em: ({node, ...props}) => <em className="italic text-gray-600 dark:text-gray-300" {...props} />,
                      a: ({node, ...props}) => <a className="text-blue-500 hover:underline" {...props} />,
                      blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary dark:border-accent pl-4 italic my-4" {...props} />,
                      code: ({node, inline, className, children, ...props}: any) => {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <SyntaxHighlighter
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={inline ? "bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5" : "block bg-gray-100 dark:bg-gray-800 rounded p-2 my-2 overflow-x-auto"} {...props}>
                            {children}
                          </code>
                        )
                      },
                    }}
                  >
                    {selectedRecipe.instructions}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
