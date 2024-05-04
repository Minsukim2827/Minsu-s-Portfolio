import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import person from './../../assets/stack/model1.glb';
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes } = useGLTF(person);
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = 0.1 + 0.1 * Math.sin(state.clock.elapsedTime );
    }
  });

  return (
    <group {...props} dispose={null}
    position={[0.2,0,0]}
    rotation={[0,4.8,0]}>
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
