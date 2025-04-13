import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "./Particles";

const Hero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);

        // Blink cursor after typing is complete
        const cursorInterval = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center pt-16 pb-12 px-4 overflow-hidden"
    >
      <Particles />

      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
        <h1 className="text-slate-900 dark:text-slate-50 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Hello, I'm <span className="text-purple-500">Miguel Melo</span>
        </h1>

        <div className="h-8 md:h-12 mb-6 flex items-center">
          <h2 className="text-slate-900 dark:text-slate-50 text-2xl md:text-3xl lg:text-4xl font-medium">
            {text}
            {showCursor && (
              <span className="border-r-4 border-purple-bg-purple-500 ml-1">
                &nbsp;
              </span>
            )}
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 max-w-2xl text-lg md:text-xl mb-8 animate-fade-in opacity-90">
          Criando experiências web e mobile impactantes, combinando design
          atraente com código limpo e eficiente.
        </p>

        <Button
          onClick={scrollToProjects}
          className="bg-purple-500 hover:bg-purple-500/80 text-white px-8 py-6 rounded-lg text-lg animate-float shadow-lg shadow-purple-bg-purple-500/20"
        >
          Ver Meus Projetos
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown size={36} className="text-purple-bg-purple-500" />
      </div>
    </div>
  );
};

export default Hero;
