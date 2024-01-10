import React from "react";
import "./stylesheets/about.css"

function About(){

    return(
       <>
           <p id="about-title">About</p>
           <div id="about-section">
               <p className="about-text">
                   This website was created by William Castillo using react and is hosted on github pages.
                   <br></br>
                   Technologies used are Material UI, Email.js and google analytics.
                   <br></br>
                   Front-end languages used are HTML, CSS, and Javascript.
                   <br></br>
                   "Astronomy Picture of the Day" API provided for free by NASA.
               </p>
           </div>
       </>

    );
}

export default About;