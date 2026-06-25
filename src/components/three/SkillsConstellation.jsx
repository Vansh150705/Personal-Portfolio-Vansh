import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useIsMobile } from '../../hooks/useMediaQuery';

const SIGNAL = new THREE.Color('#FFB000');
const COOL = new THREE.Color('#4b525b');

/** A rotating node-and-edge network — an abstract "capability graph". */
function Network({ nodeCount }) {
  const group = useRef();

  const { nodePositions, nodeColors, linePositions } = useMemo(() => {
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 9,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5,
        ),
      );
    }

    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    nodes.forEach((n, i) => {
      nodePositions[i * 3] = n.x;
      nodePositions[i * 3 + 1] = n.y;
      nodePositions[i * 3 + 2] = n.z;
      const c = Math.random() > 0.8 ? SIGNAL : COOL;
      nodeColors[i * 3] = c.r;
      nodeColors[i * 3 + 1] = c.g;
      nodeColors[i * 3 + 2] = c.b;
    });

    // connect nearby nodes
    const lines = [];
    const threshold = 2.2;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < threshold) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    return {
      nodePositions,
      nodeColors,
      linePositions: new Float32Array(lines),
    };
  }, [nodeCount]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.08;
    const px = state.pointer.x * 0.25;
    const py = state.pointer.y * 0.25;
    group.current.rotation.x += (py - group.current.rotation.x) * 0.03;
    group.current.position.x += (px * 0.5 - group.current.position.x) * 0.03;
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#2a2f36" transparent opacity={0.6} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[nodeColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.95}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

const SkillsConstellation = () => {
  const isMobile = useIsMobile();
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: !isMobile, alpha: true }}
      aria-hidden="true"
    >
      <Network nodeCount={isMobile ? 28 : 54} />
    </Canvas>
  );
};

export default SkillsConstellation;
