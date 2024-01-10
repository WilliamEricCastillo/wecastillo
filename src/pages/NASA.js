import React from 'react';
import NASAImageOfTheDay from '../components/NasaIMGofDay';
import "./stylesheets/nasa.css"

const App = () => {
  return (
    <div >
        <p id="nasa-title"> Astronomy Picture of the Day</p>
        <div id="nasa-container">
            <NASAImageOfTheDay/>
            <br></br>
            <p id="api-text">API acquired from <a href="https://api.nasa.gov">NASA API</a></p>
        </div>
    </div>
  );
};

export default App;
