import "./stylesheets/home.css"
import React from "react";
function Home(){

    return(
        <>
            <div className="grid-home">

                <div className="col" id="job-title">
                    <h1>Software Developer</h1>
                </div>

                <div className="col">
                    <img id="gradpic" src="https://i.postimg.cc/cJcvnhNX/gradpic.jpg" alt="grad"></img>
                </div>

                <div className="col">
                    <h1>Bachelor of Arts in Computer Science</h1>
                </div>

                <div className="col" id="school-title">
                    <h1>Texas State University '23</h1>
                </div>

                    <div className="col">
                        <p className="introduction">
                            I'm a recent Computer Science graduate from Texas State University with a strong foundation in programming languages, including C++ and Python, along with practical experience in MongoDB, MySQL, and Oracle databases.
                            I am passionate about joining a collaborative team to create impactful software solutions.
                            My technical skills encompass languages such as C++, Python, Java, HTML, CSS, and JavaScript, as well as proficiency in Linux, Git, GitHub, and React.
                            I am proud to have been named to the Dean's List for the Spring 2023 semester, reflecting my commitment to academic excellence.
                            Thank you for visiting, and I look forward to sharing my professional journey and future endeavors with you.
                        </p>
                    </div>

            </div>
        </>
    );
}

export default Home;