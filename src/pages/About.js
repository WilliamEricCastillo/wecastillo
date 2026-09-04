import React from "react";
import "./stylesheets/about.css"

function About(){

    return(
       <>
           <div className="section-title-frame">
               <span className="corner-bracket corner-tl"></span>
               <span className="corner-bracket corner-tr"></span>
               <span className="corner-bracket corner-bl"></span>
               <span className="corner-bracket corner-br"></span>
               <h2 className="section-title">About</h2>
           </div>
           <div className="section-underline"></div>

           <div id="about-section">
               <span className="corner-bracket corner-tl"></span>
               <span className="corner-bracket corner-tr"></span>
               <span className="corner-bracket corner-bl"></span>
               <span className="corner-bracket corner-br"></span>

               <p className="about-text">
                   This website was created by William Castillo using react and is hosted on github pages.
                   <br></br>
                   "Astronomy Picture of the Day" API provided for free by NASA.
               </p>
           </div>
       </>

    );
}

export default About;