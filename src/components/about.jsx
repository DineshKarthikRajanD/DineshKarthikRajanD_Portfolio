import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profileImage.jpg";

function About() {
  return (
    <div className="text-white scroll-smooth" id="about">
      <h1 className="text-center text-2xl md:text-4xl font-mono mt-28">
        About me
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center pb-24">
        <motion.div
          className="w-[90%] md:w-[750px] mt-16"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h1 className="md:text-4xl ml-12 md:mt-12 md:pl-24 md:ml-[70px]">
            LET ME INTRODUCE MYSELF
          </h1>
          <p className="md:text-xl mt-5 md:ml-32 w-[100%] md:w-[90vh] pl-7 md:pl-5">
            Hi Everyone, I am Dinesh Karthik Rajan from Sivakasi, Tamilnadu. I’m
            a BE CSE student with a strong passion for technology and
            problem-solving. I enjoy building web applications using React and
            Tailwind CSS and exploring various aspects of computer science.
          </p>
        </motion.div>

        <img
          src={profileImage}
          alt="Profile image of Dinesh Karthik"
          className="w-[70vh] h-[70vh] rounded-full"
        />
      </div>
    </div>
  );
}

export default About;
