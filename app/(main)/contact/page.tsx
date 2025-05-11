"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ✅ Hook do animowanego wpisywania placeholderów
function useTypingAnimation(
  phrases: string[],
  speed = 60,
  pause = 1200
): string {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex <= currentPhrase.length) {
        setDisplay(currentPhrase.substring(0, charIndex));
        timeout = setTimeout(() => setCharIndex(charIndex + 1), speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (charIndex >= 0) {
        setDisplay(currentPhrase.substring(0, charIndex));
        timeout = setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, phrases, speed, pause]);

  return display;
}

export default function ContactPage() {
  const namePlaceholder = useTypingAnimation(["Your name..."]);
  const emailPlaceholder = useTypingAnimation(["Your email..."]);
  const messagePlaceholder = useTypingAnimation([
    "Working on something exciting?",
    "Need a dev for your next project?",
    "Let’s make something great together.",
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailto = `mailto:kaszubakrzysiek@gmail.com?subject=Contact from ${name}&body=Email: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailto;
  };

  return (
    <main className="py-20 px-6 bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-10 relative">
       <div className="max-w-4xl w-full space-y-10">

        <motion.h1
        className="text-4xl font-bold text-center flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        <i className="bi bi-envelope-fill text-purple-600 text-4xl" />
        Contact Me
        </motion.h1>

        <motion.p
        className="text-center text-lg text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        >
        Wanna build something awesome together?
        </motion.p>

  {/* 🌟 KARTA Z FORMULARZEM */}
  <motion.div
    className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-xl rounded-2xl p-8 max-w-xl mx-auto space-y-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
   <form
  action="https://formsubmit.co/el/zemaca"
  method="POST"
  className="space-y-6"
>
-
<input type="hidden" name="_captcha" value="false" />

    <input
    type="hidden"
    name="_next"
    value="https://kkaszuba.eu/contact/sent"
    />

  <input
    type="text"
    name="name"
    placeholder={namePlaceholder}
    required
    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
  />
  <input
    type="email"
    name="email"
    placeholder={emailPlaceholder}
    required
    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
  />
  <textarea
    name="message"
    rows={5}
    placeholder={messagePlaceholder}
    required
    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md"
  >
    Send Message
  </button>
</form>

  </motion.div>

    {/* 🎯 Ikony z opisem */}
    <div className="flex justify-center gap-10 pt-8 text-center">
    <a
        href="https://github.com/Vaniliatime"
        target="_blank"
        className="flex flex-col items-center text-purple-700 dark:text-purple-400 hover:text-purple-500 transition"
    >
        <i className="bi bi-github text-3xl mb-1" />
        <span className="text-sm font-medium">My GitHub</span>
    </a>
    <a
        href="https://www.linkedin.com/in/krzysztof-kaszuba/"
        target="_blank"
        className="flex flex-col items-center text-sky-700 dark:text-sky-400 hover:text-sky-500 transition"
    >
        <i className="bi bi-linkedin text-3xl mb-1" />
        <span className="text-sm font-medium">Connect on LinkedIn</span>
    </a>
    </div>
</div>
</div>
    </main>
  );
}
