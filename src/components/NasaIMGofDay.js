import React, { useState, useEffect } from 'react';
import "./nasaimgofday.css";

const NASAImageOfTheDay = () => {
    const [imageData, setImageData] = useState(null);
    const apiKey = '6zODeHkzUEemSU93QhFKDIPX9WDaWDA51V7pjPwi';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setImageData(data);
            } catch (error) {
                console.error('Error fetching NASA image data:', error);
            }
        };

        fetchImageData();
    }, [apiUrl]); // Include apiUrl in the dependency array

    return (
        <div>
            {imageData && (
                <div>
                    <h1 id="pod-title">{imageData.title}</h1>
                    <img src={imageData.url} alt={imageData.title} style={{ maxWidth: '100%' }} />
                    <p id="discription-pod">{imageData.explanation}</p>
                </div>
            )}
        </div>
    );
};

export default NASAImageOfTheDay;
