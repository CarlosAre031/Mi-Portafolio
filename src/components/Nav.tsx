import { Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react'

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {
    return (
      <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-background shadow-md transition-colors duration-300">
        <div className="flex items-center justify-between w-[90%] mx-auto h-[100%]">
          <h1 className="flex-[0.6] cursor-pointer text-[25px] text-foreground font-bold">
            JHANARE
            <span className="text-primary hover:text-complementary transition-colors duration-300">DEV</span>
          </h1>
          
          {/* Links de navegación */}
          <div className="nav-link">INICIO</div>
          <div className="nav-link">SERVICIOS</div>
          <div className="nav-link">SOBRE MÍ</div>
          <div className="nav-link">PROYECTOS</div>
          <div className="nav-link">CONTACTO</div>
          
          {/* Botón menú móvil */}
          <div onClick={openNav}>
            <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-primary hover:text-complementary transition-colors duration-300" />
          </div>
        </div>
      </div>
    );
};

export default Nav