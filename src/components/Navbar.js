import { useState } from 'react'
import { ReactComponent as Hamburger } from "./hamburger.svg";
import { ReactComponent as Github } from "./github-mark.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";
import { ReactComponent as Resume } from "./resume-icon.svg";
import { ReactComponent as Envelope } from "./email.svg";


import './navbar.css'

const Navbar = ({ scrollToSection }) => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">

            <div className="container">

                <div className="logo">

                    <div className="socials" id="github">
                        <a href="https://github.com/WilliamEricCastillo?tab=repositories"
                           title="Github"
                           target="_blank"
                           rel="noopener noreferrer">
                            <Github/>
                        </a>
                    </div>

                    <div className="socials" id="linkedin">
                        <a href="https://www.linkedin.com/in/williamecastillo/"
                           title="Linkedin"
                           target="_blank"
                           rel="noopener noreferrer">
                            <Linkedin/>
                        </a>
                    </div>

                    <div className="socials" id="Resume">
                        <a href="https://docs.google.com/document/d/13-kOm3dyOPNBZ3FI1ioMLuBrUgIsUcJt/edit?usp=sharing&ouid=108401301805898358230&rtpof=true&sd=true"
                           title="View Resume"
                           target="_blank"
                           rel="noopener noreferrer">
                            <Resume />
                        </a>
                    </div>

                    <div className="socials" id="email">
                        <a href="mailto:williamecastillo@gmail.com"
                           title="Email">
                            <Envelope />
                        </a>
                    </div>
                </div>

                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger/>
                </div>

                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <div onClick={() => scrollToSection("home")} className="link">Home</div>
                        </li>
                        <li>
                            <div onClick={() => scrollToSection("skills")} className="link">Skills</div>
                        </li>
                        <li>
                            <div onClick={() => scrollToSection("projects")} className="link">Projects</div>
                        </li>
                        <li>
                            <div onClick={() => scrollToSection("experience")} className="link">Experience</div>
                        </li>
                        <li>
                            <div onClick={() => scrollToSection("nasa")} className="link">Nasa</div>
                        </li>

                        <li>
                            <div onClick={() => scrollToSection("contact")} className="link">Contact</div>
                        </li>
                        <li>
                            <div onClick={() => scrollToSection("about")} className="link">About</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
