import React from "react";

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-4 fixed bottom-0 left-0 w-full">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
    {/* Tekst po lewej stronie */}
    <div className="text-left text-sm">
      <p>© 2025 Krzysztof Kaszuba. All rights reserved.</p>
    </div>

    {/* Ikony po prawej stronie */}
    <div className="flex gap-6 items-center">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-github text-2xl" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-linkedin text-2xl" />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-twitter text-2xl" />
      </a>
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-instagram text-2xl" />
      </a>
    </div>
  </div>
</footer>



  );
};

export default Footer;
