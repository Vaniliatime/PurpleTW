"use client";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  // Sync z klasą <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="bg-white dark:bg-neutral-900 shadow-md dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600 dark:text-purple-400">K.K Portfolio</span>
        
        <div className="flex items-center gap-6 text-sm font-semibold text-gray-700 dark:text-gray-100">
          <a href="/" className="hover:text-blue-500 dark:hover:text-purple-400">Home</a>
          <a href="/projects" className="hover:text-blue-500 dark:hover:text-purple-400">Projects</a>
          <a href="/gallery" className="hover:text-blue-500 dark:hover:text-purple-400">Gallery</a>
          <a href="/contact" className="hover:text-blue-500 dark:hover:text-purple-400">Contact</a>

          {/* Toggle przycisk */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 text-xl transition-colors"
            aria-label="Toggle dark mode"
          >
            <i className={`bi ${isDark ? "bi-sun" : "bi-moon"} transition-all`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
