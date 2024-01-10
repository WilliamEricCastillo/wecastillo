import "./stylesheets/home.css"
import React from "react";
function Home(){

    return(
        <>
            <div className="grid-home">

                {/*<div className="col" id="job-title">*/}
                {/*    <h1>Software / Web Development</h1>*/}
                {/*</div>*/}

                <div className="col">
                    <h1>Web Developer</h1>
                </div>


                <div className="col">
                    <img id="gradpic" src="https://i.ibb.co/5sJm11H/clearoff.jpg" alt="grad"></img>
                </div>

                <div className="col" id="school-title">
                    <h1>Texas State University '23</h1>
                </div>

                    <div className="col">
                        <p className="introduction">
                            I'm a Computer Science graduate from Texas State University, specializing in front and back-end development.
                            Currently pursuing an M.S. in Information Science at Texas A&M International University.
                            <br></br>
                            <br></br>
                            Alongside my programming expertise, I have practical experience in database design and management. Furthermore, I have additional skills in developing RESTful APIs, expertise in Express, and proficiency in React.
                            <br></br>
                            <br></br>
                            I am proud to have been named to the Dean's List for the Spring 2023 semester, reflecting my commitment to academic excellence. I am passionate about applying my diverse skills and contribute to innovative solutions within a collaborative team environment.
                            <br></br>
                            <br></br>
                            Thank you for visiting, and I look forward to sharing my professional journey and future endeavors with you.
                        </p>
                    </div>

            </div>
        </>
    );
}

export default Home;