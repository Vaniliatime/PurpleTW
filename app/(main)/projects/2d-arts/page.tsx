"use client";

import React, { useState } from "react";
import Lightbox from "@/components/projects/2d-arts/Lightbox";

const images = [
  "/images/2d-art/01.jpg",
  "/images/2d-art/02.jpg",
  "/images/2d-art/03.png",
  "/images/2d-art/04.jpg",
  "/images/2d-art/05.jpg",
  "/images/2d-art/06.png",
  "/images/2d-art/07.jpg",
  "/images/2d-art/08.png",
  "/images/2d-art/09.png",
  "/images/2d-art/10.jpg",

];

export default function TwoDArtsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className="bg-white dark:bg-neutral-950 px-4 md:px-12 py-16 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-purple-600">2D Arts</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Vector-based illustration showcase created in Adobe Illustrator & Photoshop.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Artwork ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className="rounded-xl cursor-zoom-in object-cover w-full aspect-square hover:brightness-110 transition"
            />
          ))}
        </div>

        {activeIndex !== null && (
          <Lightbox
            images={images}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onNext={() => setActiveIndex((i) => (i! + 1) % images.length)}
            onPrev={() => setActiveIndex((i) => (i! - 1 + images.length) % images.length)}
          />
        )}
      </div>
    </main>
  );
}
