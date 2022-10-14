import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useSpring, animated, config } from '@react-spring/three'
import * as THREE from "three";

import EarthDayMap from '../assets/textures/8k_earth_daymap.jpg'
import EarthNormalMap from '../assets/textures/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../assets/textures/8k_earth_specular_map.jpg'
import EarthCloudsMap from '../assets/textures/8k_earth_clouds.jpg'
import { TextureLoader } from "three";

export function Earth({ isForging}) {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
    );
    const [active, setActive] = useState(true);

    const { position, scale } = useSpring({
        position: active ? [0, 0, -2] : [-2, 0, -2],
        scale: active ? 1.5 : 1,
        config: config.wobbly,
    });


    const earthRef = useRef();
    const cloudsRef = useRef();
    useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
    });
    
    return (
    <>
        <ambientLight intensity={1} />
        <pointLight color="#f6f3ea" position={[1.2,0,-.5]} intensity={1.2} />
        <animated.mesh scale={scale} onClick={() => setActive(!active)} ref={cloudsRef}  position={position}>
            <sphereGeometry args={[1.005, 32, 32]} />
            <meshPhongMaterial
            map={cloudsMap}
            opacity={0.4}
            depthWrite={true}
            transparent={true}
            side={THREE.DoubleSide}
        />
        </animated.mesh>
        <animated.mesh scale={scale} onClick={() => setActive(!active)} ref={earthRef} position={position}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial
            map={colorMap}
            normalMap={normalMap}
            metalness={0.4}
            roughness={0.7}
        />
        </animated.mesh>
    </>
    );
}