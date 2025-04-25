import React, { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  live?: string;
}

// Atualize as imagens, links de github e live conforme necessário
const projects: Project[] = [
  {
    id: 1,
    title: "Barbearia Inteligente",
    description:
      "Sistema completo para barbearias com foco em automação e gestão.",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Prisma",
      "JWT",
      "CORS",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/mmsxdev/barber-project",
    live: "https://barber-project-nine.vercel.app/",
  },
  {
    id: 2,
    title: "Landing Pages para Seguradora",
    description:
      "Projeto com três landing pages e backend robusto para gerenciadora de seguros.",
    tags: ["Node.js", "Express", "TypeScript", "Prisma", "Google APIs"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Meu Portfólio Web",
    description:
      "Site moderno e futurista criado para refletir minha identidade como desenvolvedor.",
    tags: ["React", "HTML5", "CSS3", "JavaScript", "SEO"],
    github: "https://github.com/mmsxdev/my-porfolio-web",
    live: "msxdev.vercel.app",
  },
  {
    id: 4,
    title: "ToDo List",
    description:
      "Aplicação prática para fixar fundamentos de front-end e lógica.",
    tags: ["React", "JavaScript", "HTML", "Tailwind CSS"],
    github: "https://github.com/mmsxdev/To-do-List-React",
    live: "https://to-do-list-react-weld-xi.vercel.app/",
  },
  {
    id: 5,
    title: "Exercícios de Lógica",
    description:
      "Coleção de exercícios em Portugol e Java para treinar lógica de programação.",
    tags: ["Portugol", "Java", "Algoritmos"],
    github: "https://github.com/mmsxdev/Logica-de-programa-o-com-java",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setRotation({ x: y * 10, y: x * -10 });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="project-card glass rounded-xl overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${
          rotation.y
        }deg) scale(${isHovered ? 1.02 : 1})`,
        transition: isHovered ? "none" : "transform 0.5s ease-out",
      }}
    >
      {project.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-500"
            style={{ transform: `scale(${isHovered ? 1.1 : 1})` }}
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-300 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-800 dark:text-slate-300 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-slate-700 text-purple-300 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center text-slate-800 dark:text-slate-300 hover:text-purple-300 transition-colors"
            >
              <Github size={16} className="mr-1" />
              <span>Código</span>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              className="flex items-center text-slate-800 dark:text-slate-300 hover:text-purple-300 transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-white">Meus </span>
          <span className="text-purple-600">Projetos</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;