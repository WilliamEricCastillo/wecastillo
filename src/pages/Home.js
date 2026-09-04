import "./stylesheets/home.css"
import React from "react";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";
function Home(){

    return(
        <>

            <div className="home-card">
                <span className="corner-bracket corner-tl"></span>
                <span className="corner-bracket corner-tr"></span>
                <span className="corner-bracket corner-bl"></span>
                <span className="corner-bracket corner-br"></span>

                <div className="home-top">
                    <div className="photo-frame">
                        <img id="gradpic" src="https://i.ibb.co/VpkhhpGg/photo-output-2.jpg" alt="grad"></img>
                    </div>

                    <div className="education">
                        <div className="education-item">
                            <span className="edu-icon edu-icon-cyan"><FaGraduationCap/></span>
                            <div>
                                <h3 className="edu-title">Bachelor of Computer Science</h3>
                                <h4 className="edu-subtitle edu-cyan">Texas State University '23</h4>
                            </div>
                        </div>

                        <div className="edu-divider"></div>

                        <div className="education-item">
                            <span className="edu-icon edu-icon-pink"><FaBookOpen/></span>
                            <div>
                                <h3 className="edu-title">Master of Information Science</h3>
                                <h4 className="edu-subtitle edu-pink">Texas A&M International University '25</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-divider"></div>

                <div className="home-bio">
                    <p className="introduction">
                        I have a Bachelor’s degree in Computer Science and a Master’s degree in Information Science,
                        with a strong foundation in front-end and back-end development and experience in the electric
                        power industry. I have completed two internships at ERCOT, and I'm currently a GDP Analyst in the
                        Grid and Market Solutions Development Program, where I am gaining hands-on exposure to ERCOT’s
                        grid operations, market systems, and supporting technologies.
                    </p>

                    <p className="introduction">
                        My technical background includes Angular and React for web development, along with Java, SQL,
                        Oracle DB, and Power BI, with experience building data-driven applications and interactive dashboards.
                    </p>
                </div>
            </div>

        </>
    )
        ;
}

export default Home;
