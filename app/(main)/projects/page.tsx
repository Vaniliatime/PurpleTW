// app/projects/page.tsx
"use client";

import React, { useState } from "react";
import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectCard from "@/components/projects/ProjectCard";
import { useEffect, } from "react";
import { motion } from "framer-motion";


const projects = [

{
  id: 11,
  title: "LineUp EV",
  subtitle: "Concept web app improving etiquette and transparency at EV charging stations.",
  image: "/images/lineup-ev.png",
  tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  bullets: [
    { icon: "bi-lightbulb", text: "Track charger availability, status and estimated wait times." },
    { icon: "bi-phone", text: "Animated phone mockups with interactive status and map preview." },
    { icon: "bi-stars", text: "Built with modular components and smooth scroll-triggered animations." },
    { icon: "bi-layout-wtf", text: "Includes roadmap, FAQ, and animated battery-fill footer." }
  ],
  link: "https://vaniliatime.eu/", 
  github: "", 
  category: "web"
},



  {// Web Ebook
    id: 1,
    title: "Kształcenie Słuchu - eBook",
    subtitle: "Developed an eCommerce website for selling and distributing an educational eBook. Built using Bootstrap, PHP, and WooCommerce to create a seamless online store experience",
    image: "/images/ksztalcenie-sluchu.png",
    tech: ["Bootstrap", "PHP", "WooCommerce"],
    bullets: [
      { icon: "bi-bootstrap", text: "Designed and developed using Bootstrap." },
      { icon: "bi-cart", text: "Integrated WooCommerce for sales & distribution." },
      { icon: "bi-hdd-network", text: "Managed hosting & performance." },
      { icon: "bi-shield-lock", text: "Ensured secure payment processing." }
    ],
    link: "https://www.ksztalcenie-sluchu.pl",
    github: "",
    category: "web"
  },

   { // Web old portfolio
  id: 9,
  title: "Old Portfolio (Bootstrap Edition)",
  subtitle: "My first developer portfolio built with Bootstrap, PHP and custom animations.",
  image: "/images/old_portfolio.png",
  tech: ["Bootstrap", "PHP", "JavaScript"],
  bullets: [
    { icon: "bi-person-circle", text: "Presented core skills and sample projects in a clean layout." },
    { icon: "bi-lightning", text: "Fully responsive, mobile-first design using Bootstrap 5." },
    { icon: "bi-arrow-right", text: "Planned as a stepping stone to this current portfolio." }
  ],
  link: "https://kkaszuba.eu/old_portfolio",
  github: "",
  category: "web"
},

  { // Game Vanilia Runner
    id: 2,
    title: "Vanilia Runner",
    subtitle: "Endless 3D Runner Game (Unity & C#)",
    image: "/images/runner1.png",
    tech: ["Unity", "C#"],
    bullets: [
      { icon: "bi-joystick", text: "Built in Unity using C# with endless runner mechanics." },
      { icon: "bi-arrow-left-right", text: "Player controls horizontal movement while character runs automatically." },
      { icon: "bi-gem", text: "Crystal-based point system with score tracking." },
      { icon: "bi-award", text: "Achievement system with 3 unlockable tiers." },
      { icon: "bi-cloud-fog", text: "Fog of war and increasing difficulty through randomization and speed scaling." }
    ],
    link: "https://vaniliatime.itch.io/vanilliarunner",
    github: "https://github.com/Vaniliatime/Vanilla-Runner",
    category: "games",
  },

  { // Game Jumping Jesues
    id: 3,
    title: "Jumping Jesus",
    subtitle: "Arcade Platformer Game (Unity & C#)",
    image: "/images/jesus1.png",
    tech: ["Unity", "C#"],
    bullets: [
      { icon: "bi-joystick", text: "Arcade-style platformer developed in Unity using C#." },
      { icon: "bi-arrow-bar-up", text: "Automatic jumping combined with player-controlled movement." },
      { icon: "bi-graph-up", text: "Distance-based scoring and collectible items." },
      { icon: "bi-lightning-charge", text: "Jump pads and power-ups that boost gameplay dynamics." }
    ],
    link: "",
    github: "https://github.com/Vaniliatime/Jumping-Jesus",
    category: "games",
  },

  { // Level Design Surf
    id: 4,
    title: "Surf Level",
    subtitle: "Custom Parkour Level Design (Unity & C#)",
    image: "/images/surf1.png",
    tech: ["Unity", "C#"],
    bullets: [
      { icon: "bi-lightning", text: "Wall attachment, double jump and boost platform mechanics." },
      { icon: "bi-signpost-2", text: "Multiple shortcuts designed for advanced movement routes." },
      { icon: "bi-grid-1x2", text: "Variety of surfaces: ladders, pads, and dynamic ground." },
      { icon: "bi-palette", text: "Color-coded platform indicators for intuitive gameplay:" },
      { icon: "bi-dot", text: "🟧 Orange – wall run" },
      { icon: "bi-dot", text: "🟩 Green – climb" },
      { icon: "bi-dot", text: "🟦 Blue – ground" },
      { icon: "bi-dot", text: "🟥 Red – launch upward" },
      { icon: "bi-dot", text: "🟨 Yellow – launch forward" }
    ]    ,
    link: "",
    github: "https://github.com/Vaniliatime/Jumping-Jesus",
    category: "games",
  },

  { // Web Landing
    id: 5,
    title: "Landing Page: 3 PC Builds",
    subtitle: "Early Static Website Project (HTML, CSS, Bootstrap)",
    image: "/images/bootstrap1.png",
    tech: ["HTML", "CSS", "Bootstrap"],
    bullets: [
      { icon: "bi-layout-text-window", text: "Responsive single-page layout showcasing 3 PC builds." },
      { icon: "bi-lightbulb", text: "Highlighted product specs with simple call-to-action design." },
      { icon: "bi-clock-history", text: "One of my earliest layout projects — serves as a foundation." }
    ],
    link: "https://vaniliatime.github.io/",
    github: "https://github.com/Vaniliatime/Jumping-Jesus",
    category: "web",
  },

  { // Web Anime
    id: 6,
    title: "Anime Heaven",
    subtitle: "Fan Website Prototype (HTML, CSS, Bootstrap)",
    image: "/images/anime1.png",
    tech: ["HTML", "CSS", "Bootstrap"],
    bullets: [
      { icon: "bi-layout-wtf", text: "Anime-themed layout with fully responsive design." },
      { icon: "bi-collection", text: "Categorized content for manga, anime news and highlights." },
      { icon: "bi-phone", text: "Optimized navigation for desktop and mobile users." },
      { icon: "bi-clock-history", text: "Early student project showcasing themed UI structuring." }
    ],
    link: "https://vaniliatime.github.io/",
    github: "https://github.com/Vaniliatime/Jumping-Jesus",
    category: "web",
  },

  {// Graphics 
    id: 7,
    title: "2D Arts",
    subtitle: "Vector Illustration Showcase (Photoshop & Illustrator)",
    gallery: [
      "/images/2d-art/02.jpg",
      "/images/2d-art/01.jpg",
      "/images/2d-art/03.png",
      "/images/2d-art/04.jpg",
    ],
    
    tech: ["Illustrator", "Photoshop"],
    bullets: [
      { icon: "bi-vector-pen", text: "Collection of digital vector artworks created from scratch." },
      { icon: "bi-brush", text: "Styled using custom brushes, gradients, and color palettes." },
      { icon: "bi-columns-gap", text: "Responsive image grid with zoom-in lightbox support." }
    ],
    link: "/projects/2d-arts",
    github: "", // zostaw pusty, jeśli nie ma repo
    category: "graphics"
    
  },

  {// PC RIGS 
    id: 8,
    title: "2D Arts",
    subtitle: "Vector Illustration Showcase (Photoshop & Illustrator)",
    gallery: [
      "/images/rigs/pc01.jpg",
      "/images/rigs/pc02.png",
      "/images/rigs/pc03.jpg",
      "/images/rigs/pc04.png",
    ],
    
    tech: ["Illustrator", "Photoshop"],
    bullets: [
      { icon: "bi-vector-pen", text: "Collection of digital vector artworks created from scratch." },
      { icon: "bi-brush", text: "Styled using custom brushes, gradients, and color palettes." },
      { icon: "bi-columns-gap", text: "Responsive image grid with zoom-in lightbox support." }
    ],
    link: "/projects/rigs",
    github: "", // zostaw pusty, jeśli nie ma repo
    category: "rigs"
    
  },



  
];

const categories = [
  { id: "web", label: "Websites" },
  { id: "games", label: "Games / Level Design" },
  { id: "graphics", label: "Graphics" },
  { id: "rigs", label: "PC Builds / Mining" },
];

  export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("web");
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const filtered = projects.filter(p => p.category === activeCategory);
  

  return (
    <main className="placeholder:bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-100 px-6 py-16">
    <div className="flex flex-col lg:grid lg:grid-cols-[240px_1fr] max-w-7xl mx-auto gap-8">
      <div className="lg:sticky top-16 z-30 bg-white/90 dark:bg-neutral-950/90 backdrop-blur  border-neutral-200 dark:border-neutral-800 mb-8 py-4">
 
 <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
  className="lg:sticky lg:top-16 z-30 bg-white/90 dark:bg-neutral-950/90 backdrop-blur border-neutral-200 dark:border-neutral-800  py-4 px-2 rounded-xl"
>
  <ProjectFilters
    categories={categories}
    active={activeCategory}
    onSelect={setActiveCategory}
  />
</motion.div>



  </div>

    <div className="space-y-12">
    {filtered.map((project, i) => (
  <ProjectCard key={project.id} {...project} index={i} />
))}
    </div>
  </div>

  <a
  href="#"
  className={`fixed bottom-10 right-8 z-50 text-purple-600 hover:text-purple-700 transition-all duration-500 ease-out
    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"} pointer-events-auto hover:scale-110`}
  aria-label="Scroll to top"
>
  <i className="bi bi-arrow-up-square-fill text-4xl" />
</a>




</main>
  );
}
