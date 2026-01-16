// frontend/src/components/canvas/CyberField.jsx

"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CyberField() {
  const mesh = useRef();
  const particleCount = 2000;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      const t = Math.random() * 100;
      const factor = Math.random() * 10 + 5;
      const speed = 0.01 + Math.random() / 200;
      temp.push({ x, y, z, t, factor, speed, mx: x, my: y, mz: z });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, mx, my, mz } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      particle.mx += (state.mouse.x * 0.5 - particle.mx) * 0.02;
      particle.my += (-state.mouse.y * 0.5 - particle.my) * 0.02;

      dummy.position.set(
        (mx / 10) * a + mx + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (my / 10) * b + my + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (mz / 10) * b + mz + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight distance={100} intensity={4} color="white" />
      <instancedMesh ref={mesh} args={[null, null, particleCount]}>
        <dodecahedronGeometry args={[0.02, 0]} />
        <meshPhongMaterial color="#0ea5e9" />
      </instancedMesh>
    </>
  );
}