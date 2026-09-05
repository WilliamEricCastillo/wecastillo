import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
// import Projects from "./pages/Projects"; // Projects section temporarily hidden
import Contact from "./pages/Contact";
import NASA from "./pages/NASA";
import About from "./pages/About";
import Experience from "./pages/Experience";



function App() {
    const home = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const experience = useRef(null);
    const nasa = useRef(null);
    const contact = useRef(null);
    const about = useRef(null);

    const scrollToSection = (elementId) => {
        const elementRef = {
            home: home,
            skills: skills,
            projects: projects,
            experience: experience,
            nasa: nasa,
            contact: contact,
            about: about,
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
            <ScrollToTop />
            <Navbar scrollToSection={scrollToSection} />

            <div className="grid-app">

                <div className="app-col">
                    <div className="intro-name-frame">
                        <span className="corner-bracket corner-tl"></span>
                        <span className="corner-bracket corner-tr"></span>
                        <span className="corner-bracket corner-bl"></span>
                        <span className="corner-bracket corner-br"></span>
                        <div className="name-grid">
                            <div className="birth-name"><p>William</p></div>
                            <div className="birth-name"><p>Eric</p></div>
                            <div className="birth-name"><p>Castillo</p></div>
                        </div>
                    </div>
                </div>


                <div className="app-col">
                    <div ref={home} className="home">
                        <Home/>
                    </div>
                </div>

                <div className="app-col">
                    <div ref={skills} className="skills">
                        <Skills/>
                    </div>
                </div>

                <div className="app-col">
                    <div ref={experience} className="experience">
                        <Experience/>
                    </div>
                </div>

                {/* Projects section temporarily hidden
                <div className="app-col">
                    <div ref={projects} className="projects">
                        <Projects/>
                    </div>
                </div>
                */}

                <div className="app-col">
                    <div ref={nasa} className="nasa">
                        <NASA/>
                    </div>
                </div>

                <div className="app-col">
                    <div ref={contact} className="contact">
                        <Contact/>
                    </div>
                </div>

                <div className="app-col">
                    <div ref={about} className="about">
                        <About/>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default App;
