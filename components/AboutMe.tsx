"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      id="about-me"
      className="bg-gray-50 dark:bg-neutral-900 pt-5 pb-20 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Sekcja tytułu */}
        <div className="text-center">
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 mb-4 rounded-full animate-gradient-x" />
          <h2 className="text-4xl font-bold text-blue-600 dark:text-purple-400">About Me</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg italic">
            A blend of tech support precision and front-end creativity.
          </p>
        </div>

        {/* Blok z zawartością */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 space-y-5 text-gray-700 dark:text-gray-100 text-base leading-relaxed">
          {/* Intro */}
          <div className="space-y-2">
            <p>
              👋 Hi! I’m <span className="font-semibold text-purple-600 dark:text-purple-400">Krzysztof (Chris)</span> — passionate about both
              problem-solving and crafting digital experiences. I thrive in English-speaking environments, both written and spoken.
            </p>
          </div>

          {/* Doświadczenie */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400 flex items-center gap-2">
              <i className="bi bi-tools" /> Professional Experience
            </h3>
            <p>
              I currently work as an IT Support Specialist for enterprise-level systems at the European Commission. I troubleshoot
              incidents, reproduce bugs, and collaborate closely with developers using tools like Jira, ServiceNow, and Oracle SQL.
            </p>
          </div>

          {/* Front-End / Web */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-purple-500 dark:text-purple-400 flex items-center gap-2">
              <i className="bi bi-code-slash" /> Front-End & Web
            </h3>
            <p>
              I enjoy building responsive UIs with HTML, CSS, Tailwind, and Bootstrap. WordPress is my go-to CMS — I frequently design
              layouts, tweak UX, and apply lightweight customizations.
            </p>
          </div>

          {/* Background / edukacja */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-400 flex items-center gap-2">
              <i className="bi bi-controller" /> Background
            </h3>
            <p>
              I studied Game Development with a focus on C# and Unity. While I’m no longer building games, it taught me structured
              thinking and a love for interactive systems.
            </p>
          </div>

          {/* Zainteresowania */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-indigo-500 dark:text-indigo-400 flex items-center gap-2">
              <i className="bi bi-stars" /> Beyond Work
            </h3>
            <p>
              In my free time, you’ll find me building PCs and mining rigs, playing tennis, or cycling through nature.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
