import React from 'react';
import images from "./data";

const TechCircle = () => {
    const angleIncrement = 360 / images.length;

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='relative' style={{ width: '40vw', height: '40vw' }}>
                {images.map((icon, index) => {
                    const angleRad = (index * angleIncrement * Math.PI) / 180;
                    const radius = `calc(20vw - 1rem)`; // This keeps the circle diameter consistent
                    const x = `calc(${radius} * ${Math.cos(angleRad)})`; 
                    const y = `calc(${radius} * ${Math.sin(angleRad)})`;  

                    return (
                        <img key={index} src={icon} alt={`Tech Icon ${index}`}
                            className="absolute w-10 h-10"
                            style={{
                                left: '50%', top: '50%',
                                transform: `translate(${x}, ${y}) translate(-50%, -50%)`, // Correcting each icon's center
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TechCircle;
