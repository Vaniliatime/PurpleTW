"use client";

import React, { useState } from "react";
import { categoryStyles } from "./categoryStyles";
import { motion } from "framer-motion";


type Props = {
  index?: number;
  title: string;
  subtitle: string;
  image?: string;
  tech: string[];
  bullets: { icon: string; text: string }[];
  link?: string;
  github?: string;
  category: string;
  gallery?: string[]; 
};

export default function ProjectCard(props: Props) {
  const styles = categoryStyles[props.category] || categoryStyles.web;
  const [currentIndex, setIndex] = useState(0);
  const isCarousel = props.gallery && props.gallery.length > 0;
  const index = props.index ?? 0;

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + props.gallery!.length) % props.gallery!.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % props.gallery!.length);
  };

  const linkLabel =
    props.category === "games"
      ? "Play on Itch.io"
      : props.category === "graphics"
      ? "View Gallery"
      : props.category === "rigs"
      ? "View Build"
      : "Visit Website";

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`space-y-5 max-w-2xl mx-auto px-6 py-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 border-l-4 ${styles.border} shadow-sm hover:shadow-md ring-0 hover:ring-2 ${styles.ring} transition-all duration-300`}
  >
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{props.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{props.subtitle}</p>
      </div>

      <ul className="flex flex-wrap gap-3 text-sm">
        {props.tech.map((item, i) => (
          <li key={i} className={`px-2 py-1 ${styles.tagBg} ${styles.tagText} rounded`}>
            {item}
          </li>
        ))}
      </ul>

      {/* 📸 Obrazek lub galeria */}
      {isCarousel ? (
        <div className={`relative overflow-hidden rounded-xl ${props.category === "rigs" ? "aspect-[3/4]" : "aspect-video"}`}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {props.gallery!.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${props.title} - ${i}`}
                className="w-full flex-shrink-0 object-cover"
              />
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-800/80 rounded-full p-1"
            aria-label="Previous image"
          >
            <i className="bi bi-chevron-left" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-neutral-800/80 rounded-full p-1"
            aria-label="Next image"
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      ) : (
        props.image && (
          <img
            src={props.image}
            alt={props.title}
            className={`rounded-xl w-full ${props.category === "rigs" ? "aspect-[3/4]" : "aspect-video"} object-cover border border-neutral-200 dark:border-neutral-800`}

          />
        )
      )}

      {/* 📌 Lista punktów */}
      <ul className="space-y-2 text-sm">
        {props.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <i className={`bi ${b.icon} ${styles.icon} mt-0.5`} />
            <span>{b.text}</span>
          </li>
        ))}
      </ul>

      {/* 🔗 Linki */}
      <div className="flex gap-4 pt-2">
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            className={`${styles.text} hover:underline text-sm flex items-center gap-1`}
          >
            <i className="bi bi-box-arrow-up-right" />
            <span>{linkLabel}</span>
          </a>
        )}
        {props.github && (
          <a
            href={props.github}
            target="_blank"
            className="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center gap-1"
          >
            <i className="bi bi-github" />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
