import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verificar el tema inicial
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
        // Mostrar el botón con animación después de un pequeño delay
        setTimeout(() => setIsVisible(true), 500);
    }, []);

    const toggleTheme = () => {
        const newTheme = !darkMode;
        setDarkMode(newTheme);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div 
            className={`fixed top-24 z-[10001] transition-transform duration-700 ease-in-out ${
                isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ right: '0' }}
        >
            <button
                onClick={toggleTheme}
                className="bg-background-secondary rounded-l-full p-2 shadow-lg hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Cambiar tema"
            >
                <div className="relative md:w-14 md:h-7 w-12 h-6 rounded-full bg-primary">
                    <div
                        className={`absolute md:top-1 md:w-5 md:h-5 top-0.5 w-5 h-5 rounded-full bg-background transform transition-transform duration-300 ${
                            darkMode ? 'md:translate-x-7 translate-x-6' : 'translate-x-0.5'
                        }`}
                    />
                    <SunIcon 
                        className={`absolute md:w-4 md:h-4 w-3.5 h-3.5 text-yellow-400 md:top-1.5 md:left-1.0 top-1 left-1 transition-opacity duration-300 ${
                            darkMode ? 'opacity-0' : 'opacity-100'
                        }`} 
                    />
                    <MoonIcon 
                        className={`absolute md:w-4 md:h-4 w-3.5 h-3.5 text-yellow-400 md:top-1.5 md:right-2.5 top-1 right-1 transition-opacity duration-300 ${
                            darkMode ? 'opacity-100' : 'opacity-0'
                        }`} 
                    />
                </div>
            </button>
        </div>
    );
};

export default ThemeToggle;