import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBg = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: "#1e1842", // Set background color
        image: "", // Set background image if needed
        position: "50% 50%", // Set background position
        repeat: "no-repeat", // Set background repeat
        size: "cover", // Set background size
      },
      fpsLimit: 120,
      interactivity: {
        detect_on: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            links: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            quantity: 4, // Adjusted to fit React options structure
          },
          remove: {
            quantity: 2, // Adjusted to fit React options structure
          },
        },
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800, // Adjusted from value_area
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          animation: {
            enable: false,
            speed: 1,
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          animation: {
            enable: false,
            speed: 40,
            minimumValue: 0.1,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? (
    <Particles id={props.id} init={particlesLoaded} options={options} />
  ) : null;
};

export default ParticlesBg;
