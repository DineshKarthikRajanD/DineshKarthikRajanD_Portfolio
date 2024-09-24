import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./main.css";

export default function App() {
  return (
    <div>
      <div className="relative" id="app-conatainer">
        <Nav />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
