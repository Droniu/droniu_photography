import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { OrbitControls, Stars } from "@react-three/drei";
import logo from "./logo.svg";
import "./App.css";
import { GLTFLoader, MTLLoader, OBJLoader } from "three-stdlib";
import ModelDraco from "./ModelDraco";

function Box(props: any) {
  const [ref, api] = useBox(() => ({ mass: 0, position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => api.velocity.set(0, 4, 0)}
      ref={ref as any}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

const Camera = () => {
  const res = useLoader(GLTFLoader, "camera.glb");
  console.log(res)
  return <primitive object={res} />
}

function Plane(props: any) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref as any} rotation={[-Math.PI / 2, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[20, 20, 10]} angle={0.3} />
      <pointLight position={[-10, -10, -10]} />
      <ModelDraco />
    </Canvas>
    </div>
  );
}

export default App;
