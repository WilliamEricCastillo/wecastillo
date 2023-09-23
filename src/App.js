import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "./components/navbar.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
    const home = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementId) => {
        const elementRef = {
            home: home,
            skills: skills,
            projects: projects,
            contact: contact,
        }[elementId];

        if (elementRef) {
            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="App">
            <ScrollToTop/>
            <Navbar scrollToSection={scrollToSection} />

                <div className="grid-app">
                    <div className="app-col">
                        <div className="name-grid">
                            <div className="birth-name"><p>William</p></div>
                            <div className="birth-name"><p>Eric</p></div>
                            <div className="birth-name"><p>Castillo</p></div>
                        </div>
                    </div>

                    <div className="app-col">
                        <div ref={home} className="home">
                            <Home/>
                        </div>
                    </div>

                    <div className="app-col">
                        <div ref={skills} className="skills">
                            <p id="skills-title">Skills</p>
                            <Skills/>
                        </div>
                    </div>

                    <div className="app-col">
                        <div ref={projects} className="projects">
                            <p id="project-title">Projects</p>
                            <Projects/>
                        </div>
                    </div>

                    <div className="app-col">
                        <div ref={contact} className="contact">
                            <p id="contact-title">Contact</p>
                            <Contact/>
                        </div>
                    </div>

                </div>
        </div>

    );
}

export default App;
