"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

const vertexShader = `
varying vec2 vUv;
uniform float uTime;

void main() {
  vUv = uv;
  vec3 pos = position;
  pos.z += sin(pos.x * 4.0 + uTime) * 0.15;
  pos.z += sin(pos.y * 3.0 + uTime) * 0.15;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform float uTime;

void main() {
  vec3 color1 = vec3(0.64, 0.15, 0.94);
  vec3 color2 = vec3(0.17, 0.0, 0.27);
  float wave = sin(vUv.x * 6.0 + uTime) * 0.5 + 0.5;
  vec3 color = mix(color1, color2, wave);
  gl_FragColor = vec4(color, 1.0);
}
`;

function FluidPlane() {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const { camera } = useThree();

  useFrame(({ clock, mouse }) => {
    if (!material.current || !mesh.current) return;
    material.current.uniforms.uTime.value = clock.elapsedTime;

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.8,
      0.05
    );
    camera.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={mesh} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[6, 6, 256, 256]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
        }}
      />
    </mesh>
  );
}

export default function HeroWebGL() {
  return (
    <Canvas  
     className="absolute inset-0 z-0" 
     camera={{ position: [0, 0, 2.8], fov: 55 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 3, 2]} intensity={1.5} />
      <FluidPlane />
    </Canvas>
  );
}

