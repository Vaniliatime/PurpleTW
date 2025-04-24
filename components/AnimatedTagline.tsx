"use client";
import { useEffect, useState } from "react";

const phrases = [
    "Design it. Code it. Make it real.",
    "Interactive by nature.\nDigital by design.",
    "From game worlds\nto web apps.",
    "Build it. Play it. Ship it.",
    "Pixels, performance,\nand purpose.",
  ];
  

export default function AnimatedTagline() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let typingSpeed = isDeleting ? 35 : 50;

    const type = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(current.substring(0, displayText.length - 1));
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(type);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <div className="relative h-[4.5rem] mb-8 flex items-center">
    <h1 className="h-[5.5rem] text-left text-3xl md:text-4xl font-medium leading-snug text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500 overflow-hidden break-words">
    {displayText.split("\n").map((line, idx, arr) => (
  <span key={idx} className="block">
    {line}
    {idx === arr.length - 1 && (
      <span className="ml-1 text-purple-700 blink-caret">|</span>
    )}
  </span>
))}
    </h1>
    </div>
  );
}
