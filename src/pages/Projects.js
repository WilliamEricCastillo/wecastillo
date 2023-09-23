import "./stylesheets/projects.css"
import CardTemplate from "../components/CardTemplate";
import CardTemplate02 from "../components/CardTemplate02";
import CardTemplate03 from "../components/CardTemplate03";
import CardTemplate04 from "../components/CardTemplate04";
import CardTemplate05 from "../components/CardTemplate05";
import CardTemplate06 from "../components/CardTemplate06";

function Projects(){

    return(
        <>
            <div className="grid-projects" >
                <div className="projects-col"><CardTemplate/></div>
                <div className="projects-col"><CardTemplate02/></div>
                <div className="projects-col"><CardTemplate06/></div>
                <div className="projects-col"><CardTemplate03/></div>
                <div className="projects-col"><CardTemplate04/></div>
                <div className="projects-col"><CardTemplate05/></div>
            </div>
        </>
    );
}

export default Projects;