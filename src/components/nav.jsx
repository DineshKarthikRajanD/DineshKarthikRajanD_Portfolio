import { useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 2.5,
      scrollTo: { y: id, offsetY: 70 },
      ease: "power3.inOut",
    });
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fdfcff23] z-50">
      <div className="flex justify-between p-5 text-white font-mono">
        <h1 className="ml-32 hover:text-violet-400 cursor-pointer text-2xl hover:text-4xl transition-all duration-300">
          .DK
        </h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        <ul
          className={`md:flex md:gap-10 mr-12 flex-col md:flex-row transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "absolute top-0 left-0 w-full h-screen bg-[#12121f] text-white flex flex-col items-center justify-center z-10"
              : "hidden md:flex"
          }`}
        >
          <button
            className="text-2xl -mt-60"
            onClick={() => setIsMenuOpen(false)}
          >
            ✖
          </button>
          <li className="py-2">
            <a
              href="#home"
              onClick={() => scrollToSection("#home")}
              className="hover:text-violet-400 cursor-pointer hover:text-2xl transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li className="py-2">
            <a
              href="#about"
              onClick={() => scrollToSection("#about")}
              className="hover:text-violet-400 cursor-pointer hover:text-2xl transition-all duration-300"
            >
              About
            </a>
          </li>
          <li className="py-2">
            <a
              href="#skills"
              onClick={() => scrollToSection("#skills")}
              className="hover:text-violet-400 cursor-pointer hover:text-2xl transition-all duration-300"
            >
              Skills
            </a>
          </li>
          <li className="py-2">
            <a
              href="#project"
              onClick={() => scrollToSection("#project")}
              className="hover:text-violet-400 cursor-pointer hover:text-2xl transition-all duration-300"
            >
              Project
            </a>
          </li>
          <li className="py-2">
            <a
              href="#contact"
              onClick={() => scrollToSection("#contact")}
              className="hover:text-violet-400 cursor-pointer hover:text-2xl transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
