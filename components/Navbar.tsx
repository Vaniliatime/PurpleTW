"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-neutral-900 shadow-md dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="transition-transform hover:scale-105 w-auto h-auto">
          <div className="relative">
            <Image src="/Logo_KK.png" alt="Dark Logo" width={40} height={40} className="hidden dark:block" />
            <Image src="/Logo_KK_light.png" alt="Light Logo" width={40} height={40} className="block dark:hidden" />
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium text-gray-700 dark:text-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative group transition-colors ${
                pathname === link.href
                  ? "text-purple-600 dark:text-purple-400 font-semibold"
                  : "hover:text-purple-600 dark:hover:text-purple-400"
              }`}
            >
              <span>{link.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
          ))}

        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="ml-2 text-xl text-purple-600 dark:text-purple-400 hover:scale-110 transition-all"
          aria-label="Toggle dark mode"
        >
          <i className={`bi ${isDark ? "bi-sun-fill" : "bi-moon-fill"}`} />
        </button>

        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-4 ">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="text-xl text-purple-600 dark:text-purple-400 hover:scale-110 transition-all"
            aria-label="Toggle dark mode"
          >
            <i className={`bi ${isDark ? "bi-sun-fill" : "bi-moon-fill"}`} />
          </button>
          
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-purple-600 dark:text-purple-400 relative w-6 h-9"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.i
                key="x"
                className="bi bi-x-lg absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <motion.i
                key="list"
                className="bi bi-list absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </button>

          
        </div>
      </div>

      {/* Mobile dropdown */}
  
<AnimatePresence>
  {isOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="md:hidden px-4 pb-4 space-y-3 text-base font-medium text-gray-700 dark:text-gray-100"
    >
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className={`block transition-colors ${
            pathname === link.href
              ? "text-purple-600 dark:text-purple-400 font-semibold"
              : "hover:text-purple-600 dark:hover:text-purple-400"
          }`}
        >
          {link.name}
        </a>
      ))}
    </motion.div>
  )}
</AnimatePresence>
     
    </nav>
  );
}
