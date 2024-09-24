// src/components/ParticleBackground.jsx
import React from "react";
import Particles from "react-tsparticles"; // Ensure this library is installed
import particlesConfig from "../config/particles-config.js";

const ParticleBackground = () => {
  return (
    <div>
      <Particles params={particlesConfig} />
    </div>
  );
};

export default ParticleBackground;
