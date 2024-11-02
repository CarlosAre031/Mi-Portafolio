/* eslint-disable @typescript-eslint/no-unused-vars */
// Particle.tsx
import { useCallback, useEffect, useState } from "react";
import { type Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particle = () => {
    const [particleColor, setParticleColor] = useState("#825B27");

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateColor = (e: MediaQueryListEvent | MediaQueryList) => {
            setParticleColor(e.matches ? "#737373" : "#825B27");
        };

        updateColor(darkModeMediaQuery);
        darkModeMediaQuery.addEventListener('change', updateColor);
        
        return () => darkModeMediaQuery.removeEventListener('change', updateColor);
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);


    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // Callback vacío para mejor rendimiento
    }, []);

    return (
        <div className="absolute inset-0 z-10">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 30,
                    fullScreen: {
                        enable: false
                    },
                    background: {
                        color: "transparent"
                    },
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
                                    force: 30,
                                    smooth: 10
                                }
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            grab: {
                                distance: 150,
                                links: {
                                    opacity: 0.6
                                }
                            }
                        },
                    },
                    particles: {
                        color: {
                            value: ["#066A39"],
                        },
                        links: {
                            color: particleColor,
                            distance: 120,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                            triangles: {
                                enable: false,
                                opacity: 0.1
                            }
                        },
                        collisions: {
                            enable: false,
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
                                enable: false,
                                rotateX: 400,
                                rotateY: 800
                            }
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 50,
                            max: 100,
                        },
                        opacity: {
                            value: {
                                min: 0.3,
                                max: 0.6
                            },
                            animation: {
                                enable: true,
                                speed: 0.2,
                                minimumValue: 0.1
                            }
                        },
                        shape: {
                            type: ["triangle"],
                        },
                        size: {
                            value: { min: 2, max: 3 },
                            animation: {
                                enable: false,
                                speed: 2,
                                minimumValue: 0.1
                            }
                        },
                        twinkle: {
                            particles: {
                                enable: true,
                                color: particleColor,
                                frequency: 0.02,
                                opacity: 0.8
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