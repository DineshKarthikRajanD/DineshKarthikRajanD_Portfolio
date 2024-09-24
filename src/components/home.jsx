import React, { useState, useEffect, useRef } from "react";
import Image from "../assets/port.gif";
import Image1 from "../assets/1384063-removebg-preview.png";
import Image2 from "../assets/25231-removebg-preview.png";
import Image3 from "../assets/174857-removebg-preview.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "../main.css";

function Home() {
  const [isInView, setIsInView] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={homeRef}
      className="md:text-white scroll-smooth md:mt-0 mt-24"
      id="home"
    >
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="ml-12 md:ml-28"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-white font-mono text-xl pb-2">
            Hello I'm Dinesh Karthik Rajan 👋
          </h1>
          <span className="text-xl font-bold md:text-4xl mb-1 text-white">
            <Typewriter
              words={["Full Stack Developer </>", "3D Animator 🖥️"]}
              loop={20}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <div className="flex gap-4 ml-3 pt-2">
            <a href="https://www.instagram.com/dinesh_karthik.d/">
              <motion.img
                src={Image1}
                alt="Icon 1"
                className="w-6 h-6 md:w-9 md:h-9 mt-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </a>
            <a href="https://github.com/DineshKarthikRajanD">
              <motion.img
                src={Image2}
                alt="Icon 2"
                className="w-6 h-6 md:w-9 md:h-9 mt-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </a>
            <a href="https://www.linkedin.com/in/dinesh-karthik-rajan-d-a20390259/">
              <motion.img
                src={Image3}
                alt="Icon 3"
                className="w-6 h-6 md:w-9 md:h-9 mt-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
            </a>
          </div>
          <a
            href="../assets/dinesh karthik.pdf"
            download="Dinesh_Karthik_Resume.pdf"
            className="inline-block px-6 py-3 bg-[#639cd95b] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mt-5"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          className="text-white mt-24"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={Image} alt="Portfolio" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
