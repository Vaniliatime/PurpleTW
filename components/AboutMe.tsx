import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-white pt-0 pb-20" id="about-me">
    {/* Animowana linia oddzielająca sekcje u góry */}
    <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-500 mb-8"></div>
  
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
      {/* Nagłówek */}
      <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">
        About Me
      </h2>
  
      {/* Opis */}
      <div className="text-lg text-gray-700 mb-8 text-center space-y-6">
        <p className="mb-4">
          Hey there, I'm <span className="font-semibold text-purple-600">Krzysztof</span> – but most people call me{" "}
          <span className="font-semibold text-purple-600">Chris</span>.
        </p>
        <p className="mb-4">
          I'm an IT Support Specialist currently working on enterprise-level systems for the European Commission. I troubleshoot incidents, reproduce bugs, and collaborate with developers using tools like Jira, ServiceNow, and Oracle SQL — all in a remote, international environment.
        </p>
        <p className="mb-4">
          I also enjoy front-end development and building responsive websites using HTML, CSS, Bootstrap, and Tailwind. WordPress is my go-to for content management, and I regularly work on layout, UX, and small customizations.
        </p>
        <p className="mb-4">
          I studied Game Development during my engineering degree, focusing on C# and Unity. While I’m no longer actively developing games, this background taught me structured thinking and a love for building interactive systems.
        </p>
        <p className="mb-4">
          I work comfortably in English-speaking environments — both written and spoken. Outside of work, I enjoy PC and mining rig building, playing tennis, and cycling.
        </p>
      </div>
    </div>
  </section>
  
  
  
  );
};

export default AboutMe;
