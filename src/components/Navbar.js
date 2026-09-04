import { useState } from 'react'
import { ReactComponent as Hamburger } from "./hamburger.svg";
import { ReactComponent as Github } from "./github-mark.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";
import { ReactComponent as Resume } from "./resume-icon.svg";
import { ReactComponent as Envelope } from "./email.svg";
import { FaHome, FaCode, FaBriefcase, FaRocket, FaEnvelope, FaUser, FaChevronRight } from "react-icons/fa";


import './navbar.css'

const Navbar = ({ scrollToSection }) => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const onKeyActivate = (callback) => (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            callback();
        }
    }

    return (
        <nav className="navbar">
            <span className="navbar-bracket navbar-bracket-tl"></span>
            <span className="navbar-bracket navbar-bracket-tr"></span>

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
                    <span className="nav-corner nav-corner-tl"></span>
                    <span className="nav-corner nav-corner-tr"></span>
                    <span className="nav-corner nav-corner-bl"></span>
                    <span className="nav-corner nav-corner-br"></span>

                    <ul>
                        <li>
                            <div onClick={() => scrollToSection("home")} onKeyDown={onKeyActivate(() => scrollToSection("home"))} tabIndex={0} role="button" className="link">
                                <span className="nav-icon i-cyan"><FaHome/></span>
                                <span className="nav-label">Home</span>
                                <span className="nav-chevron"><FaChevronRight/></span>
                            </div>
                        </li>
                        <li className="nav-item-skills">
                            <div onClick={() => scrollToSection("skills")} onKeyDown={onKeyActivate(() => scrollToSection("skills"))} tabIndex={0} role="button" className="link">
                                <span className="nav-icon i-cyan"><FaCode/></span>
                                <span className="nav-label">Skills</span>
                                <span className="nav-chevron"><FaChevronRight/></span>
                            </div>
                        </li>
                        {/* Projects link temporarily hidden
                        <li>
                            <div onClick={() => scrollToSection("projects")} className="link">Projects</div>
                        </li>
                        */}
                        <li>
                            <div onClick={() => scrollToSection("experience")} onKeyDown={onKeyActivate(() => scrollToSection("experience"))} tabIndex={0} role="button" className="link">
                                <span className="nav-icon i-cyan"><FaBriefcase/></span>
                                <span className="nav-label">Experience</span>
                                <span className="nav-chevron"><FaChevronRight/></span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => scrollToSection("nasa")} onKeyDown={onKeyActivate(() => scrollToSection("nasa"))} tabIndex={0} role="button" className="link">
                                <span className="nav-icon i-purple"><FaRocket/></span>
                                <span className="nav-label">Nasa</span>
                                <span className="nav-chevron"><FaChevronRight/></span>
                            </div>
                        </li>

                        <li>
                            <div onClick={() => scrollToSection("contact")} onKeyDown={onKeyActivate(() => scrollToSection("contact"))} tabIndex={0} role="button" className="link">
                                <span className="nav-icon i-pink"><FaEnvelope/></span>
                                <span className="nav-label">Contact</span>
                                <span className="nav-chevron"><FaChevronRight/></span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => scrollToSection("about")} onKeyDown={onKeyActivate(() => scrollToSection("about"))} tabIndex={0} role="button" className="link">
                                <span className="nav-icon i-pink"><FaUser/></span>
                                <span className="nav-label">About</span>
                                <span className="nav-chevron"><FaChevronRight/></span>
                            </div>
                        </li>
                    </ul>

                    <div className="nav-footer">
                        <span className="dot"></span>
                        <span>System Navigation</span>
                        <span className="dot pink"></span>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
