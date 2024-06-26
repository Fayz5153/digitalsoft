import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Polygon = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    
  }, []);

  return (
    <Particles
      id="tsparticles_polygon"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fullScreen: {
          enable: false,
          zIndex: 1
        },
        fpsLimit: 60,
        particles: {
          links: {
            enable: true,
            distance: 80
          },
          number:{
            value: 70,
          },
          move: {
            enable: true,
            speed: 0.3,
            outModes: {
              default: "bounce"
            }
          },
          size: {
            value: { min: 1, max: 4 }
          }
        },
        
      }}
    />
  );
};

export default Polygon;