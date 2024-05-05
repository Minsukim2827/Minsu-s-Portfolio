import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import person from './../../assets/stack/model5.glb';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes } = useGLTF(person);
  const modelRef = useRef();

  useEffect(() => {
    nodes.mesh_0.material.metalness = -4; // Adjust metalness
    nodes.mesh_0.material.roughness = 0; // Adjust roughness
  }, []);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = -0.05 + 0.05 * Math.sin(state.clock.elapsedTime);
    }
  });

  return (
    <group {...props} dispose={null}
    position={[0.1,0,0]}
    rotation={[0,4.8,0]}
    scale={3}>

      <mesh
        ref={modelRef} 
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload(person);
