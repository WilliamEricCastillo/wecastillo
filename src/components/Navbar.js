// Navbar.js
import React, { useState } from "react";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import { ReactComponent as Github } from "./github-mark.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";
import { ReactComponent as Resume } from "./resume-icon.svg";
import { ReactComponent as Envelope } from "./email.svg";


const Navbar = ({ scrollToSection }) => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="left-side">

                    <div className="socials" id="github">
                        <a href="https://github.com/WilliamEricCastillo?tab=repositories"
                            title="Github"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github/>
                        </a>
                    </div>

                    <div className="socials" id="linkedin">
                        <a href="https://www.linkedin.com/in/williamericcastillo/"
                            title="Linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin/>
                        </a>
                    </div>

                    <div className="socials" id="Resume">
                        <a href="/WilliamEricCastilloResume.pdf"
                            download
                            title="Download Resume"
                        >
                            <Resume />
                        </a>
                    </div>

                    <div className="socials" id="email">
                        <a href="mailto:williamecastillo@gmail.com"
                           title="Email"
                        >
                            <Envelope />
                        </a>
                    </div>


                </div>



                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>

                <div className={`nav-elements ${showNavbar && 'active'}`}>

                    <ul>
                        <li onClick={() => scrollToSection("home")} className="link">
                            Home
                        </li>
                        <li onClick={() => scrollToSection("skills")} className="link">
                            Skills
                        </li>
                        <li onClick={() => scrollToSection("projects")} className="link">
                            Projects
                        </li>
                        <li onClick={() => scrollToSection("contact")} className="link">
                            Contact
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;
