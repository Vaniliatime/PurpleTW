'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';




const sections = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "languages", label: "Languages" },
  { id: "certificates", label: "Certificates" },
  { id: "other", label: "Other" },
];

const experiences = [
  {
    title: "IT Application Support Agent",
    company: "Venthone - European Commission Project",
    location: "Hybrid, Brussels",
    date: "07.2024 - Present",
    items: [
      { icon: "bi-people", text: "Provided technical support to 1,000+ internal users and 50,000+ external users across EU-wide systems." },
      { icon: "bi-ticket", text: "Handled incidents and service requests in Jira and ServiceNow while maintaining SLA compliance." },
      { icon: "bi-bug", text: "Reproduced user-reported issues, ran diagnostics, and delivered clear bug reports with logs." },
      { icon: "bi-database", text: "Used Oracle SQL to investigate data-related issues and assist with application troubleshooting." },
      { icon: "bi-chat-dots", text: "Communicated updates and resolutions to users via multilingual support channels." }
    ]
  },
  {
    title: "Co-Author & Content Developer",
    company: "Auditory Training eBook Project",
    location: "Remote",
    date: "03.2024 - 01.2025",
    items: [
      { icon: "bi-book", text: "Co-authored and published a digital eBook combining auditory training with music theory." },
      { icon: "bi-file-earmark-music", text: "Processed and corrected 500+ scanned music sheets and designed the final PDF layout." },
      { icon: "bi-globe", text: "Developed a sales and distribution website using HTML, CSS, JavaScript, and pure Bootstrap." },
      { icon: "bi-cart-check", text: "Implemented a basic checkout system with download access for buyers." },
      { icon: "bi-cloud-upload", text: "Managed digital publishing, content hosting, and regular user-facing updates." }
    ]
  },
  {
    title: "Postproduction Editor",
    company: "DIMK Cultural Project",
    location: "Remote",
    date: "01.2023 - 10.2023",
    items: [
      { icon: "bi-music-note", text: "Edited and assembled audio-visual content for a concert project organized by a cultural association." },
      { icon: "bi-soundwave", text: "Performed audio cleanup and mastering in Audacity, and handled video editing and color correction in DaVinci Resolve." },
      { icon: "bi-folder2-open", text: "Created presentation folders and multimedia showcase materials." },
      { icon: "bi-archive", text: "Organized and archived all assets in structured project libraries for team access." }
    ]
  },
  {
    title: "IT Support Engineer",
    company: "Clickbus LTD",
    location: "Hybrid, Birmingham",
    date: "07.2019 - 06.2024",
    items: [
      { icon: "bi-person-workspace", text: "Started as onsite intern and grew into full-time remote IT Support Engineer role." },
      { icon: "bi-people-fill", text: "Provided technical support to logistics, operations, and back-office teams." },
      { icon: "bi-pc-display-horizontal", text: "Managed Windows Server and user workstations to maintain uptime and data integrity." },
      { icon: "bi-person-plus", text: "Handled onboarding/offboarding, hardware setup, and user provisioning." },
      { icon: "bi-wordpress", text: "Maintained the company website on WordPress with content and plugin updates." },
      { icon: "bi-journal-check", text: "Reduced resolution times by improving internal documentation." },
      { icon: "bi-tools", text: "Improved onboarding process by standardizing IT equipment setup." }
    ]
  }
];


export default function ResumePage() {
  const [activeSection, setActiveSection] = useState('experience');

  useEffect(() => {
    let hasScrolled = false;
  
    const handleScroll = () => {
      if (!hasScrolled) return; // nie aktualizuj na starcie
  
      const sections = document.querySelectorAll("section[id]");
      let closestId = activeSection;
      let closestTop = Infinity;
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = Math.abs(rect.top - 120); // 120 = ~navbar + filtr
        if (offset < closestTop) {
          closestTop = offset;
          closestId = section.id;
        }
      });
  
      if (closestId !== activeSection) {
        setActiveSection(closestId);
      }
    };
  
    const handleFirstScroll = () => {
      hasScrolled = true;
    };
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleFirstScroll, { passive: true });
    window.addEventListener("touchmove", handleFirstScroll, { passive: true });
  
    handleScroll();
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleFirstScroll);
      window.removeEventListener("touchmove", handleFirstScroll);
    };
  }, [activeSection]);
  
  
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const onScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  

  return (
    <main className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-100 px-4 md:px-8 py-4 relative z-0">
      <div className="lg:sticky top-16 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-md shadow-purple-500/5 transition-all duration-300 mb-16 pt-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 px-4 py-3">
          {sections.map((section) => (
            <a
            key={section.id}
            href={`#${section.id}`}
            onClick={() => setActiveSection(section.id)}

            className={`px-4 py-2 text-sm font-semibold tracking-wide uppercase rounded-full transition-all duration-300 active:scale-95 ${
              activeSection === section.id
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/40'
                : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800'
            }`}
            
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-24">
        {/* EXPERIENCE */}
        <section id="experience" className="space-y-8 scroll-mt-32 bg-white dark:bg-neutral-900 shadow-lg rounded-xl p-6 md:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-purple-600"
          >
            💼 Experience
          </motion.h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300">{exp.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company} — {exp.location}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">{exp.date}</p>
                </div>
                <ul className="space-y-2">
              {exp.items.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <i className={`bi ${item.icon} text-purple-500 mt-1`} />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>

                {exp.title === "Co-Author & Content Developer" && (
                  <div className="mt-4">
                    <a
                      href="https://www.ksztalcenie-sluchu.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-full shadow-md hover:bg-purple-700 transition"
                    >
                      Visit Project Website
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="space-y-8 scroll-mt-32 bg-white dark:bg-neutral-900 shadow-lg rounded-xl p-6 md:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-600"
          >
            🎓 Education
          </motion.h2>
          <div className="space-y-6">
  {/* Entry 1 */}
  <div className="space-y-6">
  {/* Entry 1 */}
  <div>
    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
      College of Economics and Computer Science
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
      10.2018 – 10.2022
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-400">Major: Computer Science and Econometrics</p>
    <p className="text-sm text-gray-600 dark:text-gray-400">Specialization: Game Development</p>
    <p className="text-sm text-gray-600 dark:text-gray-400">Degree: Engineer</p>
    <ul className="space-y-2 mt-2">
      <motion.li
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        viewport={{ once: true }}
      >
        <i className="bi bi-mortarboard text-blue-500 mt-1" />
        <span>Earned an engineering degree (Computer Science and Econometrics) with a focus on game development.</span>
      </motion.li>
      <motion.li
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <i className="bi bi-controller text-blue-500 mt-1" />
        <span>Specialized in Unity and C# for interactive applications and gameplay systems.</span>
      </motion.li>
      <motion.li
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <i className="bi bi-cpu text-blue-500 mt-1" />
        <span>Built a 3D Unity-based game as part of my thesis project — includes gameplay mechanics, achievement system, and UI logic.</span>
      </motion.li>
    </ul>
    <div className="mt-4">
      <a
        href="https://github.com/Vaniliatime/Vanilla-Runner"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition"
      >
        <i className="bi bi-github" />
        View GitHub Project: Vanilia Runner
      </a>
    </div>
  </div>

  {/* Entry 2 */}
  <div>
    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
      Gloker Post-Secondary School
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
      09.2017 – 07.2018
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-400">Graphic and Multimedia Design</p>
    <ul className="space-y-2 mt-2">
      <motion.li
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        viewport={{ once: true }}
      >
        <i className="bi bi-brush text-blue-500 mt-1" />
        <span>Completed a post-secondary program in graphic and multimedia design.</span>
      </motion.li>
      <motion.li
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <i className="bi bi-image text-blue-500 mt-1" />
        <span>Gained hands-on experience with Photoshop, Illustrator, and Adobe Creative tools.</span>
      </motion.li>
      <motion.li
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <i className="bi bi-layers text-blue-500 mt-1" />
        <span>Studied visual storytelling, layout, and user-centered digital design.</span>
      </motion.li>
    </ul>
  </div>

  {/* Entry 3 */}
  <div>
    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
      Complex of Printing and Mechanical Schools, Katowice
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
      09.2013 – 06.2017
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-400">Major: IT Specialist</p>
    <ul className="space-y-2 mt-2">
      <motion.li
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        viewport={{ once: true }}
      >
        <i className="bi bi-tools text-blue-500 mt-1" />
        <span>Graduated as an IT Technician with a focus on computer systems and networking.</span>
      </motion.li>
      <motion.li
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <i className="bi bi-hdd-network text-blue-500 mt-1" />
        <span>Built and maintained PC hardware, configured software, and solved technical issues.</span>
      </motion.li>
      <motion.li
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <i className="bi bi-lightning text-blue-500 mt-1" />
        <span>Laid the foundation for future work in IT support and systems administration.</span>
      </motion.li>
    </ul>
  </div>
</div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-8 scroll-mt-32 bg-white dark:bg-neutral-900 shadow-lg rounded-xl p-6 md:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-pink-600"
          >
            🛠 Skills
          </motion.h2>
          <div className="space-y-4">
  {/* Technical Support & Systems */}
  <div>
    <h3 className="text-lg font-semibold text-pink-500">🖥 Technical Support & Systems</h3>
    <div className="space-y-2 mt-2">
      {[
        "Remote IT Support (AnyDesk)",
        "Ticket Management (Jira / ServiceNow)",
        "Incident Analysis & Bug Reporting",
        "Windows Server Administration",
        "Office 365 Support",
        "Hardware Maintenance & Repair",
        "User Onboarding & Technical Setup",
      ].map((text, i) => (
        <motion.div
          key={i}
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          viewport={{ once: true }}
        >
          <i className={`bi ${
            [
              "bi-tools",
              "bi-ticket-perforated",
              "bi-bug-fill",
              "bi-hdd-network",
              "bi-microsoft",
              "bi-cpu-fill",
              "bi-person-plus-fill",
            ][i]
          } text-pink-400 mt-1`} />
          <span>{text}</span>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Software & Tools */}
  <div>
    <h3 className="text-lg font-semibold text-pink-500">🛠 Software & Tools</h3>
    <div className="space-y-2 mt-2">
      {[
        { icon: "bi-code-slash", text: "C# / UnityEngine" },
        { icon: "bi-git", text: "Version Control (Git)" },
        { icon: "bi-brush", text: "Adobe Photoshop / Illustrator" },
        { icon: "bi-soundwave", text: "Audio / Video Editing" },
        { icon: "bi-database-fill", text: "Oracle SQL Troubleshooting & Querying" },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          viewport={{ once: true }}
        >
          <i className={`${item.icon} text-pink-400 mt-1`} />
          <span>{item.text}</span>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Web Development */}
  <div>
    <h3 className="text-lg font-semibold text-pink-500">🌐 Web Development</h3>
    <div className="space-y-2 mt-2">
      {[
        { icon: "bi-filetype-html", text: "HTML5 / CSS3 / JavaScript" },
        { icon: "bi-bootstrap", text: "Bootstrap / Tailwind CSS" },
        { icon: "bi-wordpress", text: "WordPress Management" },
        { icon: "bi-cloud-upload", text: "Digital Publishing & Website Deployment" },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          viewport={{ once: true }}
        >
          <i className={`${item.icon} text-pink-400 mt-1`} />
          <span>{item.text}</span>
        </motion.div>
      ))}
    </div>
  </div>
</div>

</section>

        {/* LANGUAGES */}
        <section id="languages" className="space-y-8 scroll-mt-32 bg-white dark:bg-neutral-900 shadow-lg rounded-xl p-6 md:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-indigo-600"
          >
            🌍 Languages
          </motion.h2>
          <div className="space-y-4">
  <motion.div
    className="flex items-start gap-3"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: 0.05 }}
    viewport={{ once: true }}
  >
    <span className="text-2xl">🇵🇱</span>
    <span>Polish — Native</span>
  </motion.div>

  <motion.div
    className="flex items-start gap-3"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: 0.1 }}
    viewport={{ once: true }}
  >
    <span className="text-2xl">🇬🇧</span>
    <span>English — C1</span>
  </motion.div>
</div>

        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="space-y-8 scroll-mt-32 bg-white dark:bg-neutral-900 shadow-lg rounded-xl p-6 md:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-fuchsia-600"
          >
            📜 Certificates
            </motion.h2>
            <div className="space-y-4">
  {[
    "MTA: Security Fundamentals (98-367)",
    "MTA: Software Development (98-361)",
    "MTA: HTML5 App Development (98-375)",
    "MTA: Database Fundamentals (98-364)",
  ].map((text, i) => (
    <motion.div
      key={i}
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: i * 0.05 }}
      viewport={{ once: true }}
    >
      <i className="bi bi-patch-check-fill text-fuchsia-500 mt-1" />
      <span>{text}</span>
    </motion.div>
  ))}
</div>

        </section>


    {/* OTHER */}
    <section id="other" className="space-y-8 scroll-mt-32 bg-white dark:bg-neutral-900 shadow-lg rounded-xl p-6 md:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-amber-600"
          >
            🚗 Other
          </motion.h2>
          <div className="space-y-4">
  <motion.div
    className="flex items-start gap-3"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: 0.05 }}
    viewport={{ once: true }}
  >
    <i className="bi bi-car-front-fill text-amber-500 mt-1" />
    <span>Driving Licence: Category B</span>
  </motion.div>
</div>

        </section>

      </div>


      {/* Floating scroll-to-top arrow */}

      {isVisible && (
  <a
    href="#"
    className="fixed bottom-10 right-8 z-50 text-purple-600 hover:text-purple-700 transition-all duration-300 animate-pulse hover:scale-110"
    aria-label="Scroll to top"
  >
    <i className="bi bi-arrow-up-square-fill text-4xl" />
  </a>
)}
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
