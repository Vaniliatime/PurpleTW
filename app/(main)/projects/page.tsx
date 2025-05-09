"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "web", label: "Websites" },
  { id: "games", label: "Games / Level Design" },
  { id: "graphics", label: "Graphics" },
  { id: "rigs", label: "PC Builds / Mining" },
];

const projects = [
    {
        id: 1,
        title: "eBook – Kształcenie Słuchu",
        image: "/images/ksztalcenie-sluchu.png",
        github: "https://github.com/Vaniliatime/ksztalcenie-sluchu",
        link: "https://www.ksztalcenie-sluchu.pl",
        category: "web",
        keywords: [
          {
            icon: "bi-bootstrap",
            label: "Designed and developed the website using Bootstrap."
          },
          {
            icon: "bi-cart",
            label: "Integrated WooCommerce for online sales and distribution."
          },
          {
            icon: "bi-hdd-network",
            label: "Managed hosting and optimized website performance."
          },
          {
            icon: "bi-shield-lock",
            label: "Ensured secure payment processing and user data protection."
          }
        ]
      }
      ];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("web");
  const filtered = projects.filter((p) => p.category === activeCategory);

  return (
<main className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-100 px-6 md:px-12 py-10">
<div className="flex gap-12 max-w-7xl ml-[15%] mr-auto w-full justify-between px-4 lg:px-6">





        {/* Sidebar */}
        <aside className="w-60 shrink-0 sticky top-20 self-start ml-2">

          <div className="space-y-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition font-medium text-sm active:scale-95 ${
                  activeCategory === cat.id
                    ? "bg-purple-600 text-white shadow-md shadow-purple-500/40"
                    : "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Project cards */}
        <section className="flex flex-wrap  gap-10 w-full">




          {filtered.length === 0 && (
            <p className="text-sm text-gray-500 col-span-full">No projects found in this category.</p>
          )}

          {filtered.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 overflow-hidden border border-neutral-200 dark:border-neutral-800"

            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full aspect-video object-cover border-b border-neutral-200 dark:border-neutral-800"
              />
              <div className="p-10  space-y-3">
                <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                  {proj.title}
                </h3>
                <ul className="space-y-2 text-sm pt-1">
                {proj.keywords?.map((kw, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <i className={`bi ${kw.icon} text-purple-500 mt-0.5`} />
                    <span>{kw.label}</span>
                    </li>
                ))}
                </ul>

                <div className="flex gap-3 pt-4">
                  <a
                    href={proj.link}
                    target="_blank"
                    className="px-4 py-1.5 text-sm bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                  >
                    Visit Website
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    className="px-4 py-1.5 text-sm bg-neutral-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-neutral-300 dark:hover:bg-neutral-700 transition"
                  >
                    Project on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
