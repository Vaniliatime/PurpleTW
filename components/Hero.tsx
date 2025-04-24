"use client";
import Image from "next/image";
import React from "react";
import AnimatedTagline from "./AnimatedTagline"; 
import Badge from "./Badge";
import DotsColumn from "./DotsColumn";




export default function HeroSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-24">
          {/* LEWA STRONA */}
          <div className="w-full xl:w-5/12 text-center xl:text-left pt-6 pb-6">
            {/* Badge */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto xl:mx-0 mb-8">
            <Badge icon="controller" text="Game Dev" iconColor="text-blue-600" />
            <Badge icon="globe" text="Web Dev" iconColor="text-purple-500" />
            <Badge icon="cpu" text="Tech Support" iconColor="text-pink-500" />
            <Badge icon="tools" text="Problem Solver" iconColor="text-indigo-500" />
            <Badge icon="layout-text-window" text="UI Focused" iconColor="text-violet-600" />
            <Badge icon="people" text="Team Player" iconColor="text-fuchsia-500" />
            </div>



            {/* Tagline */}
            <p className="text-gray-500 text-sm md:text-base font-light italic mb-6">
                Crafting digital experiences — playable or clickable.
            </p>


            {/* Nagłówek */}
            <div className="min-h-[5.5rem] mb-8">
            <AnimatedTagline />
            </div>




            {/* Przyciski */}
            <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-4 mt-8">
                <a
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-black text-black rounded-lg hover:bg-black hover:text-white transition"
                >
                <i className="bi bi-code-slash me-2" /> Explore Projects
                </a>
                <a
                href="/resume"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                <i className="bi bi-file-earmark-person-fill me-2" /> View Resume
                </a>
            </div>
            </div>

          {/* PRAWA STRONA */}
          <div className="w-full xl:w-7/12 flex justify-center relative xl:ml-24">

  <div className="relative bg-gradient-to-r from-blue-600 to-pink-500 p-4 rounded-[2rem]">

    <Image
      src="/images/avatar-3.png"
      alt="Krzysztof Kaszuba avatar"
      width={400}
      height={400}
      className="rounded-lg z-10 relative"
    />

    {/* LEFT SIDE */}



{/* LEFT SIDE – białe wyżej, fioletowe niżej */}
{/* LEFT SIDE – całość przesunięta w dół */}
<div className="absolute left-[0.75rem] top-[10rem] hidden sm:block z-0 opacity-80 animate-fade-in-up delay-200">
  <DotsColumn color="#FFFFFF" />
</div>
<div className="absolute left-[2rem] top-[10rem] hidden sm:block z-0 opacity-80 animate-fade-in-up delay-300">
  <DotsColumn color="#FFFFFF" />
</div>
<div className="absolute left-[-3.5rem] top-[14rem] hidden sm:block z-0 opacity-40 animate-pulse-slow translate-y-[50%]">
  <DotsColumn color="#A855F7" />
</div>
<div className="absolute left-[-2rem] top-[14rem] hidden sm:block z-0 opacity-40 animate-pulse-slow translate-y-[50%] delay-100">
  <DotsColumn color="#A855F7" />
</div>

{/* RIGHT SIDE – białe jeszcze dalej od avatara */}
{/* RIGHT SIDE – białe kropki dalej od avatara (bliżej krawędzi) */}
{/* RIGHT SIDE – białe kropki lekko na zewnątrz, ale wciąż widoczne */}
<div className="absolute right-[1.5rem] top-[2rem] hidden sm:block z-0 opacity-80 animate-fade-in-up delay-300">
  <DotsColumn color="#FFFFFF" />
</div>
<div className="absolute right-[0.5rem] top-[2rem] hidden sm:block z-0 opacity-80 animate-fade-in-up delay-200">
  <DotsColumn color="#FFFFFF" />
</div>

{/* Fioletowe zostają jak były */}
<div className="absolute right-[-2rem] top-[6rem] hidden sm:block z-0 opacity-40 animate-pulse-slow delay-100">
  <DotsColumn color="#A855F7" />
</div>
<div className="absolute right-[-3.5rem] top-[6rem] hidden sm:block z-0 opacity-40 animate-pulse-slow">
  <DotsColumn color="#A855F7" />
</div>







  </div>
</div>



        </div>
      </div>
    </section>
  );
}


