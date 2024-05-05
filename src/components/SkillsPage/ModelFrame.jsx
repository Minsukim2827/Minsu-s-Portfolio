import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { OrbitControls } from '@react-three/drei';


const ModelFrame = () => {
    return (
<Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }}>            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <OrbitControls enableZoom={false} enablePan={false}/>
            <Model />
        </Canvas>
    );
};

export default ModelFrame;
