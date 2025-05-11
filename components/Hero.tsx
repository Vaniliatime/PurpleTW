"use client";
import Image from "next/image";
import React from "react";
import AnimatedTagline from "./AnimatedTagline";
import Badge from "./Badge";
import DotsColumn from "./DotsColumn";

export const metadata = {
  title: "Home | Krzysztof Kaszuba",
  description: "Explore the portfolio of Krzysztof Kaszuba — a Full-Stack Web Developer, Game Designer, and IT Support Specialist.",
};


export default function HeroSection() {
  const scrollToAbout = () => {
    const section = document.getElementById("about-me");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  
  return (
    <section className="w-full min-h-screen flex items-center relative bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:bg-neutral-800 dark:bg-none text-gray-800 dark:text-gray-100">

  <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:-mt-12 2xl:-mt-60">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-20 xl:gap-32">
          {/* LEWA STRONA */}
          <div className="w-full xl:w-6/12 text-center xl:text-left fade-in-left scale-[1.05] space-y-10">
            {/* Badge */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto xl:mx-0">
              <Badge icon="globe" text="Full-Stack Web" iconColor="text-purple-500 dark:text-purple-400" />
              <Badge icon="controller" text="Game Dev & Design" iconColor="text-blue-600 dark:text-blue-400" />
              <Badge icon="cpu" text="Tech Support" iconColor="text-pink-500 dark:text-pink-400" />
              <Badge icon="tools" text="Problem Solver" iconColor="text-indigo-500 dark:text-indigo-400" />
              <Badge icon="layout-text-window" text="UI Focused" iconColor="text-violet-600 dark:text-violet-400" />
              <Badge icon="people" text="Team Player" iconColor="text-fuchsia-500 dark:text-fuchsia-400" />
            </div>

            {/* Tagline */}
            <p className="text-gray-500 dark:text-gray-300 text-lg md:text-xl font-light italic text-balance leading-tight">
              Crafting digital experiences — playable or clickable.
            </p>

            {/* Animated headline */}
            <div className="min-h-[6rem] text-balance leading-tight text-4xl md:text-5xl font-semibold">
              <AnimatedTagline />
            </div>

            {/* Przyciski */}
            <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-6">
              
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-black dark:text-black rounded-lg overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: "white",
                  border: "2px solid transparent",
                  borderRadius: "10px",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  backgroundSize: "300% 300%",
                  animation: "rainbow-border 6s linear infinite",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <i className="bi bi-code-slash me-2" /> Explore Projects
                </span>
              </a>

              <a
                href="/resume"
                className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-black dark:text-black rounded-lg overflow-hidden transition-transform duration-500 transform hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: "white",
                  border: "2px solid transparent",
                  borderRadius: "10px",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  backgroundSize: "300% 300%",
                  animation: "rainbow-border 6s linear infinite",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <i className="bi bi-file-earmark-person-fill me-2" /> View Resume
                </span>
              </a>
              
            </div>
            {/* Scroll hint na mobile */}
<div className="block xl:hidden pt-6 text-center">
  <button
    onClick={scrollToAbout}
    className="text-purple-600 dark:text-purple-400 text-2xl animate-bounce"
    aria-label="Scroll to About"
  >
    <i className="bi bi-chevron-double-down" />
  </button>
</div>

          </div>

          {/* PRAWA STRONA */}
          <div className="w-full xl:w-6/12 flex justify-center relative xl:ml-12 fade-in-right ">

            <div className="relative p-4 rounded-[2rem] bg-[linear-gradient(270deg,#3b82f6,#8b5cf6,#ec4899)] dark:bg-[linear-gradient(270deg,#4c1d95,#6b21a8,#9333ea)] bg-[length:300%_300%] animate-rainbow-border scale-[1.1] max-w-xs sm:max-w-md mx-auto">
              <Image
                src="/images/avatar-3.png"
                alt="Krzysztof Kaszuba avatar"
                width={540}
                height={540}
                className="rounded-lg z-10 relative"
                unoptimized
              />

              {/* Dots – bez zmian */}
              <div className="absolute left-[0.75rem] top-[10rem] hidden sm:block z-0 opacity-80">
                <DotsColumn color="#FFFFFF" />
              </div>
              <div className="absolute left-[2rem] top-[10rem] hidden sm:block z-0 opacity-80">
                <DotsColumn color="#FFFFFF" />
              </div>
              <div className="absolute left-[-3.5rem] top-[14rem] hidden sm:block z-0 opacity-40">
                <DotsColumn color="#A855F7" />
              </div>
              <div className="absolute left-[-2rem] top-[14rem] hidden sm:block z-0 opacity-40">
                <DotsColumn color="#A855F7" />
              </div>

              <div className="absolute right-[1.5rem] top-[2rem] hidden sm:block z-0 opacity-80">
                <DotsColumn color="#FFFFFF" />
              </div>
              <div className="absolute right-[0.5rem] top-[2rem] hidden sm:block z-0 opacity-80">
                <DotsColumn color="#FFFFFF" />
              </div>
              <div className="absolute right-[-2rem] top-[6rem] hidden sm:block z-0 opacity-40">
                <DotsColumn color="#A855F7" />
              </div>
              <div className="absolute right-[-3.5rem] top-[6rem] hidden sm:block z-0 opacity-40">
                <DotsColumn color="#A855F7" />
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Scroll hint */}
      <div
 className="absolute bottom-60 left-1/2 -translate-x-1/2 text-purple-600 dark:text-purple-400 text-2xl cursor-pointer animate-bounce z-20 hidden xl:block"
  onClick={scrollToAbout}
>
  <i className="bi bi-chevron-double-down" />
</div>

    </section>
  );
}
