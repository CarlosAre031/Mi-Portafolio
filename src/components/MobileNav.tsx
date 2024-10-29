import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:Props) => {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div
            className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-background`}
        >
            {/* Container de links */}
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <div className="nav-link-mobile">INICIO</div>
                <div className="nav-link-mobile">SERVICIOS</div>
                <div className="nav-link-mobile">SOBRE MÍ</div>
                <div className="nav-link-mobile">PROYECTOS</div>
                <div className="nav-link-mobile">CONTACTO</div>
            </div>

            {/* Botón cerrar */}
            <div 
                onClick={closeNav}
                className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-primary hover:text-complementary transition-colors duration-300"
            >
                <XMarkIcon/>
            </div>
        </div>
    );
};

export default MobileNav