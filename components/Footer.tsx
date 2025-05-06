import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-4 bg-white/30 dark:bg-neutral-900 backdrop-blur-xl border-t border-white/20 dark:border-neutral-700 shadow-xl text-gray-800 dark:text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-4">
        {/* Ikony */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Vaniliatime"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            <i className="bi bi-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/krzysztof-kaszuba/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            <i className="bi bi-linkedin" />
          </a>
        </div>

        {/* Tekst */}
        <p className="text-sm text-gray-700 dark:text-gray-400">
          © {currentYear} Krzysztof Kaszuba
        </p>
      </div>
    </footer>
  );
};

export default Footer;
