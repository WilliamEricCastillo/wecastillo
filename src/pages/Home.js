import "./stylesheets/home.css"
import React from "react";
function Home(){

    return(
        <>

            <div className="grid-home">

                <div className="col">

                    <img id="gradpic" src="https://i.ibb.co/yY62RjG/Cropped-Image.png" alt="grad"></img>
                    <h1>Masters of Science in Information Science</h1>
                    <h4>Texas A&M International University '25</h4>
                    <h1>Bachelor's of Arts in Computer Science</h1>
                    <h4>Texas State University '23</h4>

                </div>

                <div className="dashed-line"></div>

                <div className="col">
                    <p className="introduction">
                        <strong>Computer Science</strong> graduate specializing in <strong>front and back-end
                        development</strong>.
                        In addition, I have experience in <strong>database design</strong>, skills in developing <strong>RESTful APIs</strong>,
                        expertise in <strong>Express</strong>, and proficiency in <strong>React</strong>.
                        <br></br>
                        <br></br>
                       Currently pursuing a <strong>M.S. in Information Science</strong>, where I'm learning
                        a wide spectrum of IT and business topics, including <strong>project management</strong>
                        and <strong>business analytics</strong>.
                        Upon the completion of my degree, I will be earning a <strong>certificate</strong> in <strong>data analytics</strong>,
                        enhancing my capabilities to manipulate data and develop
                        data-intensive applications.
                        <br></br>
                        <br></br>
                        Lastly, I am proud to have been named to the <strong>Dean's List</strong> for the Spring 2023 semester, reflecting my
                        commitment to academic excellence.
                        <br></br>
                        <br></br>
                        Thank you for visiting, and I look forward to sharing my professional journey and future
                        endeavors with you.
                    </p>
                </div>

            </div>
        </>
    );
}

export default Home;
