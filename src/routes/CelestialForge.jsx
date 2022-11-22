import { Settings } from '../components/Settings'

import React, { useRef, useState } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { useTexture, Stars } from "@react-three/drei";
import {LinearEncoding} from "three";
import { Textures } from "../database/textures";
import { useSpring, animated, config } from "@react-spring/three";

const initState = {
  name: "",
  txrIdx: 0,
  displacementScale: 0,
  aoMapIntensity: 0,
  roughness: 0,
  metalness: 0,
  color: "fff",
  scale:1,
}

export const CelestialForge = () => {  
  const [localProps, setLocalProps] = useState(initState)
  
  return <>
  <Canvas camera={{fov: 75, position: [0, 0, 0.8]}}>
    <Stars radius={300} depth={-20} count={20000} factor={7} saturation={0} fade={true} opacity={.5}/>
    <ambientLight intensity={1} />
    <directionalLight/>
    <CelestialObject localProps={localProps} />
  </Canvas>
    <Settings localProps={localProps} setLocalProps={setLocalProps} /> 
  </>
}

function CelestialObject({localProps, setLocalProps}){
  const {txrIdx, displacementScale, aoMapIntensity, roughness, metalness, color, scale} = localProps
  const [active, setActive] = useState(false);

  const { position } = useSpring({
      position: active ? [-2, 0, -2] : [-1, 0, -1.5],
      config: config.wobbly
    });
  const celestialBodyTextures= useTexture({
      map: Textures[txrIdx].map,
      displacementMap: Textures[txrIdx].displacementMap,
      aoMap: Textures[txrIdx].aoMap,
      roughnessMap: Textures[txrIdx].roughnessMap,
      metalnessMap: Textures[txrIdx].metalnessMap,
      normalMap: Textures[txrIdx].normalMap,
  })

  const earthRef = useRef();
  // const thorusRef = useRef();
  useFrame(({ clock }) => {
  const elapsedTime = clock.getElapsedTime();
  earthRef.current.rotation.y = elapsedTime / 6;
  // thorusRef.current.rotation.y = elapsedTime / 6;
  // thorusRef.current.rotation.x = elapsedTime / 6;
  });
  

  return <>
  {/* <animated.mesh ref={thorusRef} position={[0, 0, -2]} scale={1}>
      <torusGeometry args={[1.2,.01,50,200]}  />
      <meshPhongMaterial opacity={1} />
      <meshStandardMaterial
      {...celestialBodyTextures}
      normalMap-encoding={LinearEncoding}
      transparent
      displacementScale={displacementScale}
      aoMapIntensity={aoMapIntensity}
      roughness={roughness}
      metalness={metalness}
      metalnessMap={null}
      />
  </animated.mesh> */}
  {/* onClick={() => setActive(!active)}HERE */}
  <animated.mesh   ref={earthRef} scale={scale} position={position} onClick={()=>{setActive(!active)}}>
      <sphereGeometry args={[1, 128, 128]} />
      <meshPhongMaterial opacity={1} />
      <meshStandardMaterial
      {...celestialBodyTextures}
      normalMap-encoding={LinearEncoding}
      displacementScale={displacementScale}
      aoMapIntensity={aoMapIntensity}
      roughness={roughness}
      metalness={metalness}
      metalnessMap={null}
      />
  </animated.mesh>
  </>
}