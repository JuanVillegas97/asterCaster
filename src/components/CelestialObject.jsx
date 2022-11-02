import React, { useRef, useState} from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useSpring, animated, config } from '@react-spring/three'
import {LinearEncoding} from "three";
import { Textures } from "../database/textures";

//CHANEG WIDTH AND HEIGHT SEGMENTS

export default function CelestialObject({isForging, texture, setTexture, displacementScale, setDisplacementScale, aoMapIntensity, setAoMapIntensity, roughness, setRoughness, metalness, setMetalness}) {
    const celestialBodyTextures = useTexture({
        map: Textures[texture].map,
        displacementMap: Textures[texture].displacementMap,
        aoMap: Textures[texture].aoMap,
        roughnessMap: Textures[texture].roughnessMap,
        metalnessMap: Textures[texture].metalnessMap,
        normalMap: Textures[texture].normalMap,
    })

    
    const earthRef = useRef();
    const thorusRef = useRef();
    useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    thorusRef.current.rotation.y = elapsedTime / 6;
    thorusRef.current.rotation.x = elapsedTime / 6;


    });
    
    const [active, setActive] = useState(true);
    const { position, scale } = useSpring({
        position: active ?  [0, 0, -2] : [-2, 0, -2],
        scale: active ? 1 : 1,
        config: config.wobbly,
    });

    
    return <>
    <ambientLight intensity={1} />
    <pointLight intensity={1} position={[0, 0,0]}/>
    <animated.mesh ref={thorusRef} position={[0, 0, -2]} scale={1}>
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
    </animated.mesh>
    <animated.mesh  onClick={() => setActive(!active)} ref={earthRef} scale={.5} position={position}>
        <sphereGeometry args={[1, 128, 128]} />
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
    </animated.mesh>
    </>
}