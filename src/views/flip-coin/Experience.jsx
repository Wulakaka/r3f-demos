import { Canvas } from "@react-three/fiber";
import { OrbitControls, PivotControls } from "@react-three/drei";
import Coin from "./Coin.jsx";

export default function Experience() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 4], near: 0.001, far: 100 }}>
      <OrbitControls makeDefault />
      <ambientLight intensity={1} color="white" />
      <pointLight
        intensity={100}
        color="white"
        position={[0, 4, 0]}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
      <Coin />
      <PivotControls offset={[2, 0, 0]}>
        <mesh castShadow position-x={2}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
      </PivotControls>

      <mesh receiveShadow rotation-x={-Math.PI / 2} position-y={-1}>
        <planeGeometry args={[2, 2, 1, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </Canvas>
  );
}
