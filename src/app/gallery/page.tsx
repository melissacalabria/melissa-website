"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/gallery.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    }
    fetchImages();
  }, []);

  return (
    <>
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 gallery-header">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gallery-title mb-2 sm:mb-4">Gallery</h1>
            <p className="text-xl sm:text-2xl gallery-subtitle">
              Discover the Vegan Erasmus+ Project in Melissa
            </p>
          </div>
          {error && <p className="text-red-500 text-center mb-8">{error}</p>}
          <div className="gallery-grid gap-4 sm:gap-6 md:gap-8">
            {images.map((src, index) => (
              <div key={src} className="gallery-item" onClick={() => { setIsOpen(true); setPhotoIndex(index); }}>
                <div className="relative w-full h-0 pb-[100%]">
                  <Image
                    src={src}
                    alt={src}
                    fill
                    objectFit="cover"
                    className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {isOpen && (
          <Lightbox
            slides={images.map((src) => ({ src }))}
            open={isOpen}
            index={photoIndex}
            close={() => setIsOpen(false)}
            on={{
              view: ({ index }) => setPhotoIndex(index),
            }}
          />
        )}
      </section>
    </>
  );
}
