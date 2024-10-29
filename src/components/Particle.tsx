import { useCallback, useEffect, useState } from "react";
import { type Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particle = () => {
    const [particleColor, setParticleColor] = useState("#825B27"); // Color claro por defecto

    useEffect(() => {
        // Verificar el modo oscuro inicial
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateColor = (e: MediaQueryListEvent | MediaQueryList) => {
            setParticleColor(e.matches ? "#737373" : "#825B27");
        };

        // Establecer color inicial
        updateColor(darkModeMediaQuery);

        // Agregar listener para cambios
        darkModeMediaQuery.addEventListener('change', updateColor);
        
        // Limpiar
        return () => darkModeMediaQuery.removeEventListener('change', updateColor);
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log("Particles loaded:", container);
    }, []);

    return (
        <div className="absolute inset-0 z-10">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                                parallax: {
                                    enable: true,
                                    force: 50,
                                    smooth: 15
                                }
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 6,
                            },
                            grab: {
                                distance: 200,
                                links: {
                                    opacity: 0.8
                                }
                            }
                        },
                    },
                    particles: {
                        color: {
                            value: [
                                "#066A39"
                            ],
                        },
                        links: {
                            color: particleColor,
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                            triangles: {
                                enable: true,
                                opacity: 0.1
                            }
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.1,
                            straight: false,
                            attract: {
                                enable: true,
                                rotateX: 400,
                                rotateY: 800
                            }
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: {
                                min: 0.3,
                                max: 0.8
                            },
                            animation: {
                                enable: true,
                                speed: 0.3,
                                minimumValue: 0.1
                            }
                        },
                        shape: {
                            type: ["triangle"],
                        },
                        size: {
                            value: { min: 2, max: 4 },
                            animation: {
                                enable: true,
                                speed: 2,
                                minimumValue: 0.1
                            }
                        },
                        twinkle: {
                            particles: {
                                enable: true,
                                color: particleColor,
                                frequency: 0.03,
                                opacity: 1
                            }
                        }
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default Particle;