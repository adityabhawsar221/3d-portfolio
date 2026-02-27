import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AbstractShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#535bf2"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Background glowing particles/spheres */}
      {Array.from({ length: 15 }).map((_, i) => (
        <React.Fragment key={i}>
          <Sphere
            args={[0.1, 16, 16]}
            position={[
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 15 - 5
            ]}
          >
            <meshStandardMaterial
              color={i % 2 === 0 ? "#00f3ff" : "#646cff"}
              emissive={i % 2 === 0 ? "#00f3ff" : "#646cff"}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </Sphere>
        </React.Fragment>
      ))}
    </Float>
  );
};

const AbstractScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#00f3ff" />
      <AbstractShape />
      <Environment preset="city" />
    </>
  );
};

export default AbstractScene;
