import React from "react";

export default function Navbar() {
    return (
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">K.K Portfolio</span>
          <div className="space-x-6 text-sm font-semibold text-gray-700">
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/projects" className="hover:text-blue-500">Projects</a>
            <a href="/gallery" className="hover:text-blue-500">Gallery</a>
            <a href="/contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  