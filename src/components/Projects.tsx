import React, { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import ProjectCard from "./ProjectCard"; // Se estiver separado

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

const GITHUB_USERNAME = "seu-usuario"; // <- coloque seu username aqui

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        const data = await res.json();

        const filtered = data
          .filter((repo: any) => !repo.fork) // Ignora forks
          .slice(0, 8); // Pega só os 8 primeiros, por exemplo

        const mapped: Project[] = filtered.map((repo: any) => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || "Sem descrição.",
          image: "https://source.unsplash.com/random/400x300?" + repo.name, // ou uma imagem fixa se quiser
          tags: [repo.language || "JavaScript"],
          github: repo.html_url,
          live: repo.homepage || undefined, // se você tiver demos hospedadas
        }));

        setProjects(mapped);
      } catch (error) {
        console.error("Erro ao buscar projetos do GitHub:", error);
      }
    };

    fetchRepos();
  }, []);

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


// import React, { useRef, useState } from "react";
// import { ExternalLink, Github } from "lucide-react";

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   github?: string;
//   live?: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "E-commerce Platform",
//     description:
//       "Uma plataforma completa de e-commerce com sistema de pagamento, gestão de produtos e área do cliente.",
//     image:
//       "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
//     tags: ["React", "Node.js", "MongoDB", "Stripe"],
//     github: "#",
//     live: "#",
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     description:
//       "Aplicativo de gerenciamento de tarefas com recursos de colaboração, notificações e integrações.",
//     image:
//       "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2032&q=80",
//     tags: ["React Native", "Firebase", "Redux"],
//     github: "#",
//     live: "#",
//   },
//   {
//     id: 3,
//     title: "Real Estate Platform",
//     description:
//       "Plataforma imobiliária com busca avançada, mapa interativo e sistema de agendamento de visitas.",
//     image:
//       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
//     tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "MapBox"],
//     github: "#",
//     live: "#",
//   },
//   {
//     id: 4,
//     title: "Financial Dashboard",
//     description:
//       "Dashboard financeiro com visualizações de dados, relatórios e previsões baseadas em IA.",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     tags: ["React", "D3.js", "Node.js", "TensorFlow"],
//     github: "#",
//     live: "#",
//   },
// ];

// const ProjectCard = ({ project }: { project: Project }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;

//     const { left, top, width, height } =
//       cardRef.current.getBoundingClientRect();
//     const x = (e.clientX - left) / width - 0.5;
//     const y = (e.clientY - top) / height - 0.5;

//     setRotation({ x: y * 10, y: x * -10 });
//   };

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setRotation({ x: 0, y: 0 });
//   };

//   return (
//     <div
//       ref={cardRef}
//       className="project-card glass rounded-xl overflow-hidden"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${
//           rotation.y
//         }deg) scale(${isHovered ? 1.02 : 1})`,
//         transition: isHovered ? "none" : "transform 0.5s ease-out",
//       }}
//     >
//       <div className="h-48 overflow-hidden">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover transform transition-transform duration-500"
//           style={{ transform: `scale(${isHovered ? 1.1 : 1})` }}
//         />
//       </div>

//       <div className="p-6">
//         <h3 className="text-xl font-bold  text-slate-800 dark:text-slate-300 mb-2">
//           {project.title}
//         </h3>
//         <p className=" text-slate-800 dark:text-slate-300 text-sm mb-4">
//           {project.description}
//         </p>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="bg-slate-700 text-purple-300 text-xs px-2 py-1 rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <div className="flex justify-between">
//           {project.github && (
//             <a
//               href={project.github}
//               className="flex items-center text-slate-800 dark:text-slate-300 hover:text-purple-300 transition-colors"
//             >
//               <Github size={16} className="mr-1" />
//               <span>Código</span>
//             </a>
//           )}

//           {project.live && (
//             <a
//               href={project.live}
//               className="flex items-center  text-slate-800 dark:text-slate-300 hover:text-purple-300 transition-colors"
//             >
//               <ExternalLink size={16} className="mr-1" />
//               <span>Demo</span>
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24 bg-slate-900/80">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           <span className="text-white">Meus </span>
//           <span className="text-purple-600">Projetos</span>
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
