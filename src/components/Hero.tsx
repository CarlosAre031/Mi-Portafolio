import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="relative h-[98vh]">
      <div
        className="absolute inset-0 mt-[10vh]"
      >

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
      <div className="relative z-20 w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[45px] text-foreground font-bold">
            HOLAS, SOY <span className="text-primary hover:text-complementary transition-colors duration-300">JHAN!</span>
          </h1>
          <TextEffect />

          <p className="mt-[1.5rem] text-[17px] [transition:none] text-foreground/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            molestias! Sed iste enim accusamus veritatis vitae, doloribus
            aliquam et totam cumque, neque, quos in aut.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-complementary transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-primary text-background flex items-center space-x-2 rounded-md hover:scale-105">
              <p>Download Cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-background" />
            </button>
            <button className="flex items-center space-x-2 group">
              <PlayCircleIcon className="w-[4rem] h-[4rem] text-primary group-hover:text-complementary transition-all duration-300" />
              <p className="text-[20px] font-semibold [transition:none] text-foreground">
                Watch The Video
              </p>
            </button>
          </div>
        </div>
        <div className="w-[425px] hidden bg-primary relative lg:flex items-center rounded-full h-[425px] transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
          <Image
            src="/imagenes/foto1.jpg"
            alt="user"
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