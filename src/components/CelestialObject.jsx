import React, { useRef, useState, useEffect} from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useSpring, animated, config } from '@react-spring/three'


import RockMap from '../assets/textures/aerial_rocks_02_diff_4k.jpg' //MAIN TEXTURE
import DisplacementRockMap from '../assets/textures/aerial_rocks_02_disp_4k.jpg' //Displacement TEXTURE
import AORockMap from '../assets/textures/aerial_rocks_02_arm_4k.jpg'
import normalRockMap from '../assets/textures/aerial_rocks_02_nor_gl_4k.jpg'

//CHANEG WIDTH AND HEIGHT SEGMENTS

import {  TextureLoader } from "three";

export function CelestialObject({ isForging, color}) {
    const earthRef = useRef();
    useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    });
    
    const [active, setActive] = useState(true);
    const { position, scale } = useSpring({
        position: active ?  [0, 0, -2] : [-2, 0, -2],
        scale: active ? 1 : 1,
        config: config.wobbly,
    });

    const celestialBodyTextures = useTexture({
        map: RockMap,
        displacementMap: DisplacementRockMap,
        aoMap: AORockMap,
        roughnessMap: AORockMap,
        metalnessMap: AORockMap,
        normalMap: normalRockMap,
    })

    return (
    <>
        <ambientLight intensity={1} />
        <pointLight intensity={1} position={[0, 1,-1]}/>
        <animated.mesh scale={scale} onClick={() => setActive(!active)} ref={earthRef} position={position}>
            <sphereGeometry args={[1, 16, 16]} color={color} />
            <meshPhongMaterial opacity={1} />
            <meshStandardMaterial
            {...celestialBodyTextures}
            />
        </animated.mesh>
    </>
    );
}