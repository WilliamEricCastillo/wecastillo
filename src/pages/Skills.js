import "./stylesheets/skills.css"
import { ReactComponent as Cplusplus } from "../icons/cplusplus.svg";
import { ReactComponent as CSS } from "../icons/css.svg";
import { ReactComponent as GIT } from "../icons/git.svg";
import { ReactComponent as GITGIT } from "../icons/github.svg";
import { ReactComponent as HTML5 } from "../icons/html5.svg";
import { ReactComponent as MYSQL } from "../icons/mysql.svg";
import { ReactComponent as NODEJS } from "../icons/nodejs.svg";
import { ReactComponent as ORACLE } from "../icons/oracle.svg";
import { ReactComponent as PYTHON } from "../icons/python.svg";
import { ReactComponent as REACT } from "../icons/react.svg";


function Skills(){

    return(
        <>
            <div className="grid-skills">
                <div className="col">
                    <div className="icon-container">
                        <Cplusplus />
                        <span className="label">C++</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <CSS />
                        <span className="label">CSS</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <GIT />
                        <span className="label">Git</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <GITGIT />
                        <span className="label">Github</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <HTML5 />
                        <span className="label">HTML5</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <MYSQL />
                        <span className="label">MySQL</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <NODEJS />
                        <span className="label">Node.js</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <ORACLE />
                        <span className="label">Database</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <PYTHON />
                        <span className="label">Python</span>
                    </div>
                </div>
                <div className="col">
                    <div className="icon-container">
                        <REACT />
                        <span className="label">React</span>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Skills;