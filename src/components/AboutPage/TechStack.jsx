import React from 'react';
import bg from './../../assets/stack/bg.png';
import { Canvas } from '@react-three/fiber';
 import Model from './Model';
import {OrbitControls} from '@react-three/drei';

const TechStack = () => {
    return (
        <div className="w-screen h-screen bg-cover bg-center pt-16 flex items-center justify-center" style={{ backgroundImage: `url(${bg})` }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <OrbitControls enableZoom={false}/>
                <Model />
            </Canvas>
        </div>
    );
};

export default TechStack;
