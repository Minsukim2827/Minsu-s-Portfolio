import React from 'react';
import images from "./data";

const TechCircle = () => {
    const angleIncrement = 360 / images.length;

    return (
        <div className='w-full h-full flex items-center justify-center animate-spin-slow'>
            <div className='relative' style={{ width: '40vw', height: '40vw' }}>
                {images.map((icon, index) => {
                    const angleRad = (index * angleIncrement * Math.PI) / 180;
                    const radius = 18; // Using a constant value for radius as example, adjust as needed
                    const x = radius * Math.cos(angleRad); // Calculating x without calc()
                    const y = radius * Math.sin(angleRad); // Calculating y without calc()

                    return (
                        <div key={index} className="absolute" style={{
                            width: '50px', height: '50px', // Set a fixed size for icons
                            left: `50%`, top: `50%`,
                            transform: `translate(${x}vw, ${y}vw) translate(-50%, -50%) rotate(-${index * angleIncrement}deg)`, // Combining positioning and reverse rotation
                            transformOrigin: 'center center' // Ensuring rotation around the center of the icon
                        }}>
                            <img src={icon} alt={`Tech Icon ${index}`} className="w-full h-full" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TechCircle;
