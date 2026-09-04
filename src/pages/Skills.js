import "./stylesheets/skills.css"
import { ReactComponent as Cplusplus } from "../icons/cplusplus.svg";
import { ReactComponent as CSS } from "../icons/css.svg";
import { ReactComponent as GIT } from "../icons/git.svg";
import { ReactComponent as GITGIT } from "../icons/github.svg";
import { ReactComponent as HTML5 } from "../icons/html5.svg";
// import { ReactComponent as MYSQL } from "../icons/mysql.svg";
import { ReactComponent as ORACLE } from "../icons/oracle.svg";
import { ReactComponent as PYTHON } from "../icons/python.svg";
import { ReactComponent as REACT } from "../icons/react.svg";
import { ReactComponent as REST } from "../icons/restapi.svg";
import { ReactComponent as SQL } from "../icons/SQL.svg";
import { ReactComponent as JAVASCRIPT } from "../icons/javascript.svg";
import { ReactComponent as ANGULAR } from "../icons/Angular.svg";
import { ReactComponent as MAVEN } from "../icons/maven.svg";
import { ReactComponent as TOMCAT } from "../icons/Tomcat.svg";

import React from "react";


function Skills(){

    return(
        <>
            <div className="section-title-frame">
                <span className="corner-bracket corner-tl"></span>
                <span className="corner-bracket corner-tr"></span>
                <span className="corner-bracket corner-bl"></span>
                <span className="corner-bracket corner-br"></span>
                <h2 className="section-title">Skills</h2>
            </div>
            <div className="section-underline"></div>
            <p className="section-subtitle">Technologies and tools I use to build powerful, scalable, and efficient solutions.</p>

            <div className="skills-card">
                <span className="corner-bracket corner-tl"></span>
                <span className="corner-bracket corner-tr"></span>
                <span className="corner-bracket corner-bl"></span>
                <span className="corner-bracket corner-br"></span>

                <div className="skills-row">
                    {/* Frameworks / Front-end languages */}
                    <div className="skills-category">
                        <h3 className="category-title category-cyan">Frontend</h3>
                        <div className="category-tiles">
                            <div className="skill-tile">
                                <span className="skill-icon"><ANGULAR/></span>
                                <span className="skill-label">Angular</span>
                            </div>
                            <div className="skill-tile">
                                <span className="skill-icon"><REACT/></span>
                                <span className="skill-label">React</span>
                            </div>
                            <div className="skill-tile">
                                <span className="skill-icon"><HTML5/></span>
                                <span className="skill-label">HTML5</span>
                            </div>
                            <div className="skill-tile">
                                <span className="skill-icon"><CSS/></span>
                                <span className="skill-label">CSS</span>
                            </div>
                            <div className="skill-tile">
                                <span className="skill-icon"><JAVASCRIPT/></span>
                                <span className="skill-label">Javascript</span>
                            </div>
                        </div>
                    </div>

                    <div className="row-divider"></div>

                    {/* Backend / Databases / APIs (languages) */}
                    <div className="skills-category">
                        <h3 className="category-title category-pink">Languages</h3>
                        <div className="category-tiles">
                            <div className="skill-tile">
                                <span className="skill-icon"><PYTHON/></span>
                                <span className="skill-label">Python</span>
                            </div>
                            <div className="skill-tile">
                                <span className="skill-icon"><Cplusplus/></span>
                                <span className="skill-label">C++</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills-divider"></div>

                <div className="skills-row">
                    {/* Development / Deployment Tools */}
                    <div className="skills-category">
                        <h3 className="category-title category-cyan">Backend</h3>
                        <div className="category-tiles">
                            <div className="skill-tile">
                                <span className="skill-icon"><REST/></span>
                                <span className="skill-label">REST API</span>
                            </div>
                            <div className="skill-tile">
                                <span className="skill-icon"><MAVEN/></span>
                                <span className="skill-label">Maven</span>
                            </div>
                            <div className="skill-tile">
                                <span className="skill-icon"><TOMCAT/></span>
                                <span className="skill-label">Tomcat</span>
                            </div>
                        </div>
                    </div>

                    <div className="row-divider"></div>

                    <div className="skills-category">
                        <h3 className="category-title category-pink">Databases</h3>
                        <div className="category-tiles">
                            <div className="skill-tile">
                                <span className="skill-icon"><ORACLE/></span>
                                <span className="skill-label">Database</span>
                            </div>
                            <div className="skill-tile">
                                <span className="skill-icon"><SQL/></span>
                                <span className="skill-label">SQL</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills-divider"></div>

                <div className="skills-row">
                    {/* Version Control */}
                    <div className="skills-category skills-category-full">
                        <h3 className="category-title category-cyan">Tools &amp; Version Control</h3>
                        <div className="category-tiles">
                            <div className="skill-tile">
                                <span className="skill-icon"><GIT/></span>
                                <span className="skill-label">Git</span>
                            </div>
                            <div className="skill-tile">
                                <span className="skill-icon"><GITGIT/></span>
                                <span className="skill-label">Github</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Skills;
