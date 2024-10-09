import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Coin from "./Coin.jsx";

export default function Experience() {
  return (
    <Canvas camera={{ position: [0, 0.1, 0.1], near: 0.001, far: 100 }}>
      <OrbitControls />
      <ambientLight intensity={1} color="white" />
      <pointLight intensity={10} color="white" position={[0, 0.4, 1]} />
      <Coin />
      <mesh position-x={0.2}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}
