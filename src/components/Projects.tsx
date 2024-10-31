/* eslint-disable prefer-const */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";

// Types
interface Project {
  id: number;
  title: string;
  role: string;
  summary: string;
  description: string;
  year: string;
  technologies: string[];
  mainImage: string;
  gallery: string[];
  demoLink?: string;
}

// Project Data
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "APOLO",
    role: "Fullstack",
    year: "2024",
    summary: "Sistema de gestión de horas de bienestar para el SENA",
    description: "Se desarrolló un sistema Fullstack para gestionar y controlar las actividades de bienestar de los aprendices del Centro de Diseño y Metrología, integrando medidas de seguridad de la información y un diseño de interfaz amigable para el usuario.",
    technologies: ["React", "TypeScript", "MongoDB", "Node.js"],
    mainImage: "/imagenes/apolo1.png",
    gallery: ["/imagenes/apolo2.png", "/imagenes/apolo3.png", "/imagenes/apolo4.png", "/imagenes/apolo5.png", "/imagenes/apolo6.png"],
    demoLink: "https://github.com/CarlosAre031/APOLO-SOFTWARE"
  },
  {
    id: 2,
    title: "LAR",
    role: "Front-end",
    year: "2024",
    summary: "Sistema de gestion de la liga antioqueña de rugby(Disruptive)",
    description: "Durante la etapa de pasantías en la empresa Disruptive, se creó un sistema de gestión para la Liga Antioqueña de Rugby, facilitando el control y la organización de torneos, equipos y jugadores.",
    technologies: ["React", "TypeScript", "MySQL", "Node.js"],
    mainImage: "/imagenes/lar1.png",
    gallery: ["/imagenes/lar2.png", "/imagenes/lar3.png", "/imagenes/lar4.png", "/imagenes/lar5.png"],
    demoLink: "https://lar.disruptiveinfotech.com/login/"
  },
  {
    id: 3,
    title: "Coversor de moneda",
    role: "Backend",
    year: "2024",
    summary: "conversor de moneda en backend",
    description: "Se desarrolló un conversor de moneda en backend utilizando Java, permitiendo la conversión precisa entre diferentes divisas.",
    technologies: ["Java", "gson", "json"],
    mainImage: "/imagenes/conversor1.png",
    gallery: ["/imagenes/conversor2.png", "/imagenes/conversor3.png"],
    demoLink: "https://github.com/CarlosAre031/ConversorDeMonedaApp"
  },
  {
    id: 4,
    title: "Scape Room",
    role: "Fullstack",
    year: "2023",
    summary: "Juego Scape Room",
    description: "Se desarrolló un juego de escape room en equipos de dos, con temática RPG. El juego presenta múltiples niveles y habitaciones únicas.",
    technologies: [".net", "c#"],
    mainImage: "/imagenes/room1.png",
    gallery: ["/imagenes/room2.png", "/imagenes/room3.png", "/imagenes/room4.png", "/imagenes/room5.png"],
    demoLink: "https://github.com/CarlosAre031/ScapeRoom"
  },
  {
    id: 5,
    title: "Encriptador",
    role: "Front-end",
    year: "2024",
    summary: "Encriptador y Desencriptador",
    description: "Desarrollé una aplicación de encriptación y desencriptación de texto que permite convertir palabras y frases en códigos seguros.",
    technologies: ["HTML", "CSS", "JavaScript"],
    mainImage: "/imagenes/Encriptador1.png",
    gallery: ["/imagenes/Encriptador2.png", "/imagenes/Encriptador3.png", "/imagenes/Encriptador4.png"],
    demoLink: "https://carlosare031.github.io/Proyecto-Encriptador/"
  },
  {
    id: 6,
    title: "Numero Secreto",
    role: "Front-end",
    year: "2024",
    summary: "Juego del Numero Secreto",
    description: "Creé un juego interactivo llamado 'El Número Secreto', donde los usuarios deben adivinar un número oculto en el menor número de intentos posible.",
    technologies: ["HTML", "CSS", "JavaScript"],
    mainImage: "/imagenes/juegoNumero1.png",
    gallery: ["/imagenes/juegoNumero2.png", "/imagenes/juegoNumero3.png", "/imagenes/juegoNumero4.png"],
    demoLink: "https://carlosare031.github.io/Juego-Secreto/"
  },
  {
    id: 7,
    title: "Barberia",
    role: "Front-end",
    year: "2024",
    summary: "Pagina Web de gestion de una barberia",
    description: "Desarrollé una página web para la gestión de servicios en una barbería, que permite a los usuarios visualizar opciones de cortes, comparar planes y seleccionar el estilo que desean.",
    technologies: ["HTML", "CSS", "JavaScript"],
    mainImage: "/imagenes/barberia1.png",
    gallery: ["/imagenes/barberia2.png", "/imagenes/barberia3.png", "/imagenes/barberia4.png", "/imagenes/barberia5.png"],
    demoLink: "https://carlosare031.github.io/barberia/index.html"
  },
  {
    id: 8,
    title: "Game Ball",
    role: "Fullstack Developer",
    year: "2023",
    summary: "Se desarrollo el juego game ball",
    description: "Se desarrolló un juego interactivo de ¿Dónde está la bolita?, en el cual los jugadores deben adivinar en qué posición se encuentra una bolita oculta después de ser mezclada.",
    technologies: [".net", "c#"],
    mainImage: "/imagenes/GameBall1.png",
    gallery: ["/imagenes/GameBall2.png"],
    demoLink: "https://github.com/CarlosAre031/Juego-de-la-Bolita"
  },
  {
    id: 9,
    title: "Nomina Permacos SAS",
    role: "Fullstack Developer",
    year: "2023",
    summary: "Sistema de gestion de empleado y Nomina",
    description: "Se desarrolló un sistema de gestión de empleados y nómina para la empresa Permacos, facilitando el seguimiento de la información de los empleados.",
    technologies: [".net", "c#", "My SQL"],
    mainImage: "/imagenes/permacos1.png",
    gallery: ["/imagenes/permacos2.png", "/imagenes/permacos3.png", "/imagenes/permacos4.png"],
    demoLink: "https://github.com/CarlosAre031/Juego-de-la-Bolita"
  }
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-background-secondary rounded-lg overflow-hidden shadow-lg cursor-pointer h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col"
    onClick={onClick}
  >
    <div className="relative h-48 sm:h-56 lg:h-64">
      <Image
        src={project.mainImage}
        alt={project.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm sm:text-base lg:text-lg text-primary mb-3">{project.role} • {project.year}</p>
      </div>
      <p className="text-sm sm:text-base lg:text-lg text-foreground/70 mb-4 flex-1 line-clamp-3">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map(tech => (
          <span 
            key={tech} 
            className="text-xs sm:text-sm lg:text-base px-3 py-1 bg-primary/10 text-primary rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [project.mainImage, ...project.gallery];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    let intervalId: number;
    intervalId = window.setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-background rounded-lg w-full max-w-2xl max-h-[75vh] overflow-hidden relative flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Image Gallery Section - Responsive height */}
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px]">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={allImages[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Navigation Controls */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 
              rounded-full hover:bg-black/60 transition-colors z-10"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 
              rounded-full hover:bg-black/60 transition-colors z-10"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          <button
            onClick={onClose}
            className="absolute right-2 top-2 z-10 bg-black/40 p-2 
              rounded-full hover:bg-black/60 transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentImageIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Section - Scrollable */}
        <div className="flex flex-col overflow-y-auto p-4 sm:p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
              <p className="text-sm sm:text-base text-primary mt-1">{project.role} • {project.year}</p>
            </div>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:text-complementary 
                  text-sm sm:text-base"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                Demo
              </a>
            )}
          </div>

          <div className="space-y-4">
            <p className="text-sm sm:text-base text-foreground/70">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="text-xs sm:text-sm px-3 py-1 
                  bg-primary/10 text-primary rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = PROJECTS.length - 3; // Show 3 items at once

  const nextSlide = () => {
    setCurrentIndex(i => (i >= maxIndex ? 0 : i + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(i => (i <= 0 ? maxIndex : i - 1));
  };

  useEffect(() => {
    let intervalId: number;
    
    if (!selectedProject) {
      intervalId = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [selectedProject]);

  return (
    <div className="bg-background pt-[4rem] md:pt-[8rem] pb-[4rem]">
      <h1 className="heading mb-12 text-3xl sm:text-4xl lg:text-5xl">
        MIS<span className="text-primary">PROYECTOS</span>
      </h1>

      <div className="relative w-[95%] lg:w-[90%] mx-auto overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6 lg:gap-8"
          initial={false}
          animate={{ x: `-${currentIndex * (100/3)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {PROJECTS.map(project => (
            <div 
              key={project.id} 
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex-shrink-0"
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </motion.div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
            bg-primary/80 p-2 sm:p-3 rounded-full hover:bg-primary 
            transition-colors z-10 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
            bg-primary/80 p-2 sm:p-3 rounded-full hover:bg-primary 
            transition-colors z-10 ${currentIndex >= maxIndex ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </button>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          {[...Array(PROJECTS.length - 2)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "bg-primary scale-110"
                  : "bg-background-secondary hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;