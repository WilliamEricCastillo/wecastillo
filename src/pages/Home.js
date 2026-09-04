import "./stylesheets/home.css"
import React from "react";
function Home(){

    return(
        <>

            <div className="grid-home">

                <div className="col">

                    <img id="gradpic" src="https://i.ibb.co/VpkhhpGg/photo-output-2.jpg" alt="grad"></img>
                    <h1>Bachelor of Computer Science</h1>
                    <h4>Texas State University '23</h4>
                    <h1>Master of Information Science</h1>
                    <h4>Texas A&M International University '25</h4>


                </div>

                <div className="dashed-line"></div>

                <div className="col">
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
