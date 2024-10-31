import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[98vh]">
      <div className="absolute inset-0 mt-[10vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat block dark:hidden"
          style={{
            backgroundImage: "url('/imagenes/bannerClaro.jpg')",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden dark:block"
          style={{
            backgroundImage: "url('/imagenes/banner.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      </div>

      <Particle />

      <div className="relative z-20 w-[90%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[45px] text-foreground font-bold">
            ¡HOLA, SOY <span className="text-primary hover:text-complementary transition-colors duration-300">JHAN!</span>
          </h1>
          <TextEffect />

          <p className="mt-[1.5rem] text-[17px] [transition:none] text-foreground/70">
          Desarrollador de Software especializado en Ciberseguridad y Auditor ISO 27001. Me dedico a crear soluciones seguras combinando desarrollo y seguridad informática, con un enfoque en la implementación de sistemas robustos y resilientes. Cuento con múltiples certificaciones en ambas áreas, lo que me permite abordar proyectos desde una perspectiva integral de seguridad y eficiencia, garantizando la protección de datos y el cumplimiento de normativas internacionales.
          </p>

          <div className="mt-[2rem] flex flex-col sm:flex-row items-center gap-6">
            {/* Botón de CV */}
            <button className="px-[2rem] hover:bg-complementary transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-primary text-white flex items-center space-x-2 rounded-md hover:scale-105">
              <p>Hoja de Vida</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-white" />
            </button>

            {/* Contenedor de enlaces sociales */}
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <Link 
                href="https://www.linkedin.com/in/jhan-arevalo" 
                target="_blank"
                className="group"
              >
                <Linkedin className="w-[2.5rem] h-[2.5rem] text-[#0A66C2] group-hover:text-complementary transition-all duration-300 hover:scale-110" />
              </Link>

              {/* GitHub */}
              <Link 
                href="https://github.com/CarlosAre031" 
                target="_blank"
                className="group"
              >
                <Github className="w-[2.5rem] h-[2.5rem] text-[#171515] dark:text-white group-hover:text-complementary transition-all duration-300 hover:scale-110" />
              </Link>

              {/* WhatsApp */}
              <Link 
                href="https://wa.me/573176988239" 
                target="_blank"
                className="group bg-[#25D366] hover:bg-complementary rounded-full p-2 transition-all duration-300 hover:scale-110"
              >
                <svg 
                  className="w-[1.5rem] h-[1.5rem] text-white"
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[400px] hidden bg-primary relative lg:flex items-center rounded-full h-[425px] transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
          <Image
            src="/imagenes/foto1.jpg"
            alt="Jhan Arevalo - Desarrollador de Software"
            fill
            className="object-cover rounded-full hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;