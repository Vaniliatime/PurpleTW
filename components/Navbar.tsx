"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-neutral-900 shadow-md dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo z efektem glow */}
        <a href="/" className="transition-transform hover:scale-105">
          <Image
            src={isDark ? "/Logo_KK.png" : "/Logo_KK_light.png"}
            alt="K.K Logo"
            width={40}
            height={40}
            priority
            className={`transition-all duration-300 ${
              isDark
                ? "hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]"
                : "hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]"
            }`}
          />
        </a>




        {/* Linki */}
        <div className="flex items-center gap-6 text-base font-medium text-gray-700 dark:text-gray-100">
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

          {/* Toggle przycisk */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 text-xl text-purple-600 dark:text-purple-400 hover:scale-110 transition-all"
            aria-label="Toggle dark mode"
          >
            <i className={`bi ${isDark ? "bi-sun-fill" : "bi-moon-fill"}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
