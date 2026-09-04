import React from 'react';
import NASAImageOfTheDay from '../components/NasaIMGofDay';
import "./stylesheets/nasa.css"

const App = () => {
  return (
    <div>
        <div className="section-title-frame">
            <span className="corner-bracket corner-tl"></span>
            <span className="corner-bracket corner-tr"></span>
            <span className="corner-bracket corner-bl"></span>
            <span className="corner-bracket corner-br"></span>
            <h2 className="section-title">Astronomy Picture of the Day</h2>
        </div>
        <div className="section-underline"></div>

        <div id="nasa-container">
            <span className="corner-bracket corner-tl"></span>
            <span className="corner-bracket corner-tr"></span>
            <span className="corner-bracket corner-bl"></span>
            <span className="corner-bracket corner-br"></span>

            <NASAImageOfTheDay/>
            <p id="api-text">API acquired from <a href="https://api.nasa.gov">NASA API</a></p>
        </div>
    </div>
  );
};

export default App;
