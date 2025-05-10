"use client";

import React, { useState } from "react";
import Lightbox from "@/components/projects//2d-arts/Lightbox";

const imageList = [
  "pc01.jpg",
  "pc05.png",
  "pc02.png",
  "pc03.jpg",
  "pc04.png",
  "rig01.png",
  "rig02.png",
  "rig03.jpg",

];

const basePath = "/images/rigs/";
const images = imageList.map((file) => `${basePath}${file}`);

export default function RigsGalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className="bg-white dark:bg-neutral-950 px-4 md:px-12 py-16 text-gray-800 dark:text-gray-100">
     <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] max-w-7xl mx-auto gap-0">

        <div>
          <h1 className="text-3xl font-bold text-violet-600">PC Builds & Rigs</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A collection of custom-built desktop PCs and mining rigs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Rig ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className="rounded-xl cursor-zoom-in object-cover w-full aspect-[3/4] hover:brightness-110 transition"
            />
          ))}
        </div>

        {activeIndex !== null && (
          <Lightbox
            images={images}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onNext={() => setActiveIndex(i => (i! + 1) % images.length)}
            onPrev={() => setActiveIndex(i => (i! - 1 + images.length) % images.length)}
          />
        )}
      </div>
    </main>
  );
}
