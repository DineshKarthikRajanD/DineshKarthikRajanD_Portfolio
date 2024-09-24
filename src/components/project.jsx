import Image from "../assets/Screenshot (204).png";
import Image1 from "../assets/github.svg";
import Image2 from "../assets/Screenshot (205).png";
import Image3 from "../assets/Screenshot (207).png";
import Image4 from "../assets/Dinesh karthik.png";

function Project() {
  const projects = [
    {
      img: Image,
      title: "Throwback to My First Food Ordering Website: Food Delight! 🍽️",
      description:
        "At the early stages of my web development journey, I took on the challenge of building a fully functional food ordering website using HTML, CSS, and JavaScript. This project allowed me to dive deeper into front-end technologies, focusing on creating an intuitive, user-friendly platform for seamless food ordering. It represents a significant step in my development path, refining my skills in design, interactivity, and functionality.",
      githubLink:
        "https://github.com/DineshKarthikRajanD/Landing_page_for_Ordering_food",
    },
    {
      img: Image2,
      title: "Welcome to TeachHub: Empowering Education from Home! 🎓",
      description:
        "At LearnSphere, we aim to revolutionize online education by offering a seamless, interactive learning experience for students of all ages. Built using React and CSS, our platform is designed to deliver a smooth, responsive, and engaging environment for virtual learning. With a focus on accessibility, we provide the tools and resources needed to succeed from the comfort of your own home, making quality education available to everyone, anywhere.",
      githubLink:
        "https://github.com/DineshKarthikRajanD/Landing_page_for_Education_From_Home",
    },
    {
      img: Image3,
      title: "Welcome to Travigo: Your Ultimate Travel Companion! 🌍",
      description:
        "At Travigo, we're transforming the way you explore and book your travel adventures. Leveraging the power of React, Tailwind CSS, Express.js, and MongoDB, our platform offers a modern and intuitive experience for planning your next journey. From browsing travel packages to securing flights and accommodations, Travigo provides a seamless and responsive interface, ensuring an engaging and hassle-free booking process. Designed with both functionality and aesthetics in mind, we make it easy to plan your trips with confidence and ease, right from the comfort of your home. With Travigo, quality travel planning is just a click away, wherever you are.",
      githubLink: "https://github.com/DineshKarthikRajanD/TripPlanner",
    },
    {
      img: Image4,
      title: "Introducing My 3D Tea Shop Model: A Cozy Haven for Tea Lovers 🍵",
      description:
        "I’ve crafted a detailed 3D model of a charming tea shop using Blender, designed to capture the essence of a cozy and inviting space. This model features a warm, rustic ambiance with meticulously designed elements including a quaint counter, comfortable seating areas, and decorative accents that enhance the tea shop’s atmosphere. Whether you're envisioning a serene spot for tea enthusiasts or a vibrant space for social gatherings, this model brings a touch of realism and comfort to any virtual environment.",
      githubLink: "https://github.com/youreducationprojectrepo",
    },
  ];

  return (
    <div className="text-white scroll-smooth" id="project">
      <h1 className="text-2xl mt-10 md:text-4xl text-center mb-5 md:mb-20">
        Project
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#639cd95b] w-[300px] md:w-[550px] p-4 md:p-8 mt-10 ml-8 md:mx-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 md:hover:scale-110"
          >
            <img
              src={project.img}
              alt="Project screenshot"
              className="md:w-[500px] w-[300px]"
            />
            <h1 className="text-lg md:text-3xl mt-3 font-serif text-[#f0ff22]">
              {project.title}
            </h1>
            <p className="mt-2 font-sans text-xs md:text-base">
              {project.description}
            </p>
            <div className="bg-[#e27ae691] w-10 h-5 md:h-10 md:w-20 justify-center mt-4 rounded-lg hover:bg-[#e27ae634] transition duration-300 ease-in-out">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Image1}
                  alt="GitHub Logo"
                  className="w-5 h-5 md:w-10 md:h-10 md:ml-5 ml-2"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
