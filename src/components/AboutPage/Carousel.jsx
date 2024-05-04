import React, { useState, useEffect } from 'react';
import './../../css/carousel.css';
import azure from './../../assets/tech stack/azure.png';
import cSharp from './../../assets/tech stack/c-sharp.png';
import gnuBash from './../../assets/tech stack/gnu-bash.png';
import heroku from './../../assets/tech stack/heroku.png';
import aws from './../../assets/tech stack/icons8-amazon-web-services-240.png';
import flask from './../../assets/tech stack/icons8-flask-256.png';
import linux from './../../assets/tech stack/icons8-linux-96.png';
import tailwindCss from './../../assets/tech stack/icons8-tailwind-css-240.png';
import java from './../../assets/tech stack/java.png';
import js from './../../assets/tech stack/js.png';
import letterC from './../../assets/tech stack/letter-c.png';
import python from './../../assets/tech stack/python.png';
import r from './../../assets/tech stack/r.png';
import reactImg from './../../assets/tech stack/react.png';
import social from './../../assets/tech stack/social.png';
import sqlServer from './../../assets/tech stack/sql-server.png';

const Carousel = () => {
    const images = [azure, cSharp, gnuBash, heroku, aws, flask, linux, tailwindCss];
    const images2 = [java, js, letterC, python, r, reactImg, social, sqlServer];
    const [carouselImages, setCarouselImages] = useState([]);
    const [carouselImages2, setCarouselImages2] = useState([]);

    useEffect(() => {
        // Duplicate the images array for seamless looping
        setCarouselImages([...images, ...images]);
        setCarouselImages2([...images2, ...images2]);
    }, []);

    return (
        <div className="carousels-container">
            {/* Carousel 1 */}
            <div className="carousel">
                <div className="carousel-images">
                    <div className="carousel-images-slide">
                        {carouselImages.map((src, index) => (
                            <img key={index} className="carousel-img" src={src} alt={`Carousel image ${index % images.length}`} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Carousel 2 */}
            <div className="carousel">
                <div className="carousel-images">
                    <div className="carousel-images-slide">
                        {carouselImages2.map((src, index) => (
                            <img key={index} className="carousel-img" src={src} alt={`Carousel image ${index % images2.length}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
