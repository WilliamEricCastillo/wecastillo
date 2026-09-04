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
        <div className="apod-card">
            {imageData && (
                <>
                    <h1 className="apod-title">{imageData.title}</h1>
                    <p className="apod-date">{imageData.date}</p>
                    <div className="apod-media">
                        <img src={imageData.url} alt={imageData.title} className="apod-image" />
                    </div>
                    <p className="apod-description">{imageData.explanation}</p>
                </>
            )}
        </div>
    );
};

export default NASAImageOfTheDay;
