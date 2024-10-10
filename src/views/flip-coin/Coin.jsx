import faceVertexShader from "@/shaders/face/vertex.glsl";
import faceFragmentShader from "@/shaders/face/fragment.glsl";
import * as THREE from "three";
import img from "@/assets/img.jpg";
import { useTexture } from "@react-three/drei";
import CustomShaderMaterial from "three-custom-shader-material";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Coin() {
  const texture = useTexture(img);
  const [rotationX, setRotationX] = useState(0);
  useFrame(({ clock }) => {
    const time = -clock.getElapsedTime() * 0.5;
    setRotationX(time);
  });

  const geometry = useRef();

  return (
    <group rotation-x={rotationX}>
      <mesh rotation-x={-Math.PI / 2}>
        {/*<cylinderGeometry args={[0.1, 0.1, 0.02, 32]} />*/}
        {/*<circleGeometry args={[0.1, 32]} />*/}
        <planeGeometry ref={geometry} args={[1, 1, 500, 500]} />
        <CustomShaderMaterial
          baseMaterial={THREE.MeshStandardMaterial}
          vertexShader={faceVertexShader}
          fragmentShader={faceFragmentShader}
          side={THREE.DoubleSide}
          uniforms={{
            uTexture: { value: texture },
            uColor: { value: new THREE.Color("red") },
          }}
        />
      </mesh>
    </group>
  );
}
