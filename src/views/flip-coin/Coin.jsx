import faceVertexShader from "@/shaders/face/vertex.glsl";
import faceFragmentShader from "@/shaders/face/fragment.glsl";
import * as THREE from "three";
import img from "@/assets/img.jpg";
import { useTexture } from "@react-three/drei";
import CustomShaderMaterial from "three-custom-shader-material";

export default function Coin() {
  const texture = useTexture(img);
  return (
    <mesh rotation-x={-Math.PI / 2}>
      {/*<cylinderGeometry args={[0.1, 0.1, 0.02, 32]} />*/}
      {/*<circleGeometry args={[0.1, 32]} />*/}
      <planeGeometry args={[0.1, 0.1, 100, 100]} />
      <CustomShaderMaterial
        baseMaterial={THREE.MeshStandardMaterial}
        vertexShader={faceVertexShader}
        fragmentShader={faceFragmentShader}
        uniforms={{
          uTexture: { value: texture },
          uColor: { value: new THREE.Color("red") },
        }}
      />
    </mesh>
  );
}
