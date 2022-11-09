import React, { useRef, useState} from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useSpring, animated, config } from '@react-spring/three'
import {LinearEncoding} from "three";
import { Textures } from "../database/textures";

export const CelestialObject = ({celestialBodyTextures, localProps, setLocalProps}) => {
    const {name, txrIdx, displacementScale, aoMapIntensity, roughness, metalness, color, scale, position} = localProps
    celestialBodyTextures.current= useTexture({
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
    
    // const [active, setActive] = useState(true);
    // const { position, scale } = useSpring({
    //     position: active ?  [-1, 0, -2] : [0, 0, -2],
    //     scale: active ? 1 : 1,
    //     config: config.wobbly,
    // });

    
    return <>
    <ambientLight intensity={1} />
    {/* <Light */}
    <directionalLight/>
    {/* <pointLight intensity={1} position={[.5,.3,-.5]}/> */}
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
    <animated.mesh   ref={earthRef} scale={scale} position={position}>
        <sphereGeometry args={[1, 264, 264]} />
        <meshPhongMaterial opacity={1} />
        <meshStandardMaterial
        {...celestialBodyTextures.current}
        normalMap-encoding={LinearEncoding}
        transparent
        displacementScale={displacementScale}
        aoMapIntensity={aoMapIntensity}
        roughness={roughness}
        metalness={metalness}
        metalnessMap={null}
        />
    </animated.mesh>
    </>
}