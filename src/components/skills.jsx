import React, { useEffect } from "react";
import Image from "../assets/C_Logo.png";
import Image1 from "../assets/express-js.png";
import Image2 from "../assets/node-js-removebg-preview.png";
import Image3 from "../assets/postman.svg";
import Image4 from "../assets/html.png";
import Image5 from "../assets/css.png";
import Image6 from "../assets/bootstrap.png";
import Image7 from "../assets/JavaScript-logo.png";
import Image8 from "../assets/tailwind.png";
import Image9 from "../assets/React.webp";
import Image10 from "../assets/mongodb-icon-1.svg";
import Image11 from "../assets/Git-Icon.png";
import Image12 from "../assets/blender.png";
import Image13 from "../assets/photoshop.png";
import Image14 from "../assets/figma.png";
import Image15 from "../assets/postgresql.png";
import "./Skills.css";

function Skills() {
  const skills = [
    { img: Image, title: "C Language" },
    { img: Image1, title: "Express JS" },
    { img: Image2, title: "Node JS" },
    { img: Image3, title: "Postman" },
    { img: Image4, title: "HTML" },
    { img: Image5, title: "CSS" },
    { img: Image6, title: "Bootstrap" },
    { img: Image7, title: "JavaScript" },
    { img: Image8, title: "Tailwind CSS" },
    { img: Image9, title: "React" },
    { img: Image10, title: "MongoDB" },
    { img: Image11, title: "Git" },
    { img: Image12, title: "Blender" },
    { img: Image13, title: "Photoshop" },
    { img: Image14, title: "Figma" },
    { img: Image15, title: "PostgreSQL" },
  ];

  useEffect(() => {
    const skillItems = document.querySelectorAll(".skill-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
            entry.target.classList.remove("animate-slide-out");
          } else {
            entry.target.classList.add("animate-slide-out");
            entry.target.classList.remove("animate-slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    skillItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      skillItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="text-white min-h-[90vh] scroll-smooth" id="skills">
      <h1 className="text-4xl text-center mt-10 mb-20 font-sans">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
        {skills.map((skill, index) => (
          <div className="hover:scale-110">
            <div
              key={index}
              className="skill-item bg-[#639cd95b] w-full h-16 flex items-center opacity-0 rounded-lg"
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="w-14 h-14 ml-5 rounded-[15px]"
              />
              <h3 className="ml-5 text-2xl font-sans">{skill.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
