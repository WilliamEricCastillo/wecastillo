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
            <p id="skills-title">Skills</p>

            <div className="grid-skills">
                {/* Frameworks */}
                <div className="col">
                    <div className="icon-container">
                        <ANGULAR/>
                        <span className="label">Angular</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <REACT/>
                        <span className="label">React</span>
                    </div>
                </div>

                <div className="col">
                    <div className="icon-container">
                        <ORACLE/>
                        <span className="label">Database</span>
                    </div>
                </div>

                <div className="col">
                    <div className="icon-container">
                        <SQL/>
                        <span className="label">SQL</span>
                    </div>
                </div>

                {/* Development / Deployment Tools */}
                <div className="col">
                    <div className="icon-container">
                        <MAVEN/>
                        <span className="label">Maven</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <TOMCAT/>
                        <span className="label">Tomcat</span>
                    </div>
                </div>

                {/* Front-end languages */}
                <div className="col">
                    <div className="icon-container">
                        <HTML5/>
                        <span className="label">HTML5</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <CSS/>
                        <span className="label">CSS</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <JAVASCRIPT/>
                        <span className="label">Javascript</span>
                    </div>
                </div>

                {/* Backend / Databases / APIs */}
                <div className="col">
                    <div className="icon-container">
                        <PYTHON/>
                        <span className="label">Python</span>
                    </div>
                </div>

                {/* Optional: C++ */}
                <div className="col">
                    <div className="icon-container">
                        <Cplusplus/>
                        <span className="label">C++</span>
                    </div>
                </div>

                <div className="col">
                    <div className="icon-container">
                        <REST/>
                        <span className="label">REST API</span>
                    </div>
                </div>


                {/* Version Control */}
                <div className="col">
                    <div className="icon-container">
                        <GIT/>
                        <span className="label">Git</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <GITGIT/>
                        <span className="label">Github</span>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Skills;
