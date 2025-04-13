import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, Calendar, Activity } from "lucide-react";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Express", level: 88 },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-slate-900/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-white">Sobre </span>
          <span className="text-purple-600">Mim</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Profile Image (1/5 of the width) */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-600/30 shadow-xl shadow-purple-600/20 animate-float">
                <img
                  src="https://avatars.githubusercontent.com/u/199931723?v=4"
                  alt="Developer profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-slate-800 text-purple-600 font-bold px-4 py-2 rounded-full border border-purple-600/30 shadow-lg">
                +1 Ano
              </div>
            </div>
          </div>

          {/* About Text (3/5 of the width) */}
          <div className="md:col-span-3">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Desenvolvedor Full Stack
            </h3>

            <p className="text-slate-300 mb-6">
              Sou um desenvolvedor full stack apaixonado por criar aplicações
              web de alta qualidade. Com mais de 1 ano de experiência e cursando
              engenharia de software atualmente na FATESG 1º Período, combino
              habilidades técnicas sólidas com uma forte compreensão de design
              de interface e experiência do usuário.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-purple-600" size={20} />
                <span className="text-white">Interfaces responsivas</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-purple-600" size={20} />
                <span className="text-white">Experiências interativas</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-purple-600" size={20} />
                <span className="text-white">APIs de alto desempenho</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-purple-600" size={20} />
                <span className="text-white">Soluções escaláveis</span>
              </div>
            </div>

            {/* Experience Cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="glass rounded-lg p-5 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-600/20">
                <div className="flex items-center mb-3">
                  <Calendar className="text-purple-600 mr-2" size={20} />
                  <h4 className="font-semibold text-black dark:text-white">
                    Experiência
                  </h4>
                </div>
                <p className="text-black dark:text-white">
                  +1 ano desenvolvendo aplicações web e mobile de alta
                  qualidade.
                </p>
              </div>

              <div className="glass rounded-lg p-5 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-600/20">
                <div className="flex items-center mb-3">
                  <Activity className="text-purple-600 mr-2" size={20} />
                  <h4 className="font-semibold  text-black dark:text-white">
                    Projetos
                  </h4>
                </div>
                <p className=" text-black dark:text-white">
                  Projetos entregues para clientes em diversos setores.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills with animated bars */}
        <div className={`mt-20 ${isVisible ? "skill-visible" : ""}`}>
          <h3 className="text-2xl font-bold  text-white text-center mb-10">
            Principais Habilidades
          </h3>

          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className=" text-white font-medium">{skill.name}</span>
                  <span className="text-purple-600">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
