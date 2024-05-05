import React from 'react';
import azure from '@/assets/tech stack/azure.png';
import cSharp from '@/assets/tech stack/c-sharp.png';
import gnuBash from '@/assets/tech stack/gnu-bash.png';
import heroku from '@/assets/tech stack/heroku.png';
import aws from '@/assets/tech stack/icons8-amazon-web-services-240.png';
import flask from '@/assets/tech stack/icons8-flask-256.png';
import linux from '@/assets/tech stack/icons8-linux-96.png';
import tailwindCSS from '@/assets/tech stack/icons8-tailwind-css-240.png';
import java from '@/assets/tech stack/java.png';
import js from '@/assets/tech stack/js.png';
import letterC from '@/assets/tech stack/letter-c.png';
import python from '@/assets/tech stack/python.png';
import r from '@/assets/tech stack/r.png';
import reactLogo from '@/assets/tech stack/react.png';
import social from '@/assets/tech stack/social.png';
import sqlServer from '@/assets/tech stack/sql-server.png';
import { motion } from 'framer-motion';

const imagePaths = [
    azure,
    cSharp,
    gnuBash,
    heroku,
    aws,
    flask,
    linux,
    tailwindCSS,
    java,
    js,
    letterC,
    python,
    r,
    reactLogo,
    social,
    sqlServer
];

const ImageCarousel = () => {
    const radius = 300; 
    const angleIncrement = 360 / imagePaths.length;

    return (
        <div style={{ position: 'relative', width: '600px', height: '600px' }}>
{imagePaths.map((path, index) => {
    const angleRad = (index * angleIncrement * Math.PI) / 180;
    const x = radius * Math.cos(angleRad) + 295; 
    const y = radius * Math.sin(angleRad) + 295; 
    return (
        <motion.div
            key={index}
            style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                translateX: '-50%',
                translateY: '-50%',
            }}
            initial={{ boxShadow: '0 0 10px rgba(0, 191, 255, 0)' }}
            animate={{ boxShadow: '0 0 20px rgba(0, 191, 255, 1)' }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
            <img src={path} alt="Tech Icon" className="w-12 h-12 animate-spin-slow-reverse" />
        </motion.div>
    );
})}

        </div>
    );
};

export default ImageCarousel;

