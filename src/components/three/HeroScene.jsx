import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useIsMobile, usePrefersReducedMotion } from '../../hooks/useMediaQuery';

const SIGNAL = '#FFB000';

/** A spherical shell of drifting points — the "data field". */
function ParticleField({ count }) {
  const ref = useRef();

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const cool = new THREE.Color('#5b6470');
    const amber = new THREE.Color(SIGNAL);
    for (let i = 0; i < count; i++) {
      // random point in a spherical shell
      const r = 2.6 + Math.random() * 1.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = Math.random() > 0.86 ? amber : cool;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/** Wireframe core: a faceted icosahedron + a slow instrument ring. */
function Core() {
  const group = useRef();
  const ring = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.z += delta * 0.03;
      // ease toward pointer for a parallax tilt
      const px = state.pointer.x * 0.4;
      const py = state.pointer.y * 0.4;
      group.current.rotation.x += (py - group.current.rotation.x) * 0.04;
      group.current.position.x += (px - group.current.position.x) * 0.04;
    }
    if (ring.current) ring.current.rotation.x += delta * 0.5;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color={SIGNAL} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh scale={0.62}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#E6E8EA" wireframe transparent opacity={0.12} />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.15, 0.004, 8, 120]} />
        <meshBasicMaterial color={SIGNAL} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

const HeroScene = () => {
  const isMobile = useIsMobile();
  const reduce = usePrefersReducedMotion();

  // Static fallback for reduced-motion users.
  if (reduce) {
    return (
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="h-64 w-64 rounded-full border border-signal/40" />
        <div className="absolute h-40 w-40 rounded-full border border-hairline" />
      </div>
    );
  }

  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: !isMobile, alpha: true }}
      aria-hidden="true"
    >
      <Core />
      <ParticleField count={isMobile ? 900 : 2600} />
    </Canvas>
  );
};

export default HeroScene;
