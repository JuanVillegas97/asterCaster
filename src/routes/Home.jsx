import React, { useRef } from "react";
import { useFrame, useLoader, Canvas} from "@react-three/fiber";

import { Stars } from "@react-three/drei";
import { animated } from '@react-spring/three'
import * as THREE from "three";

import EarthDayMap from '../assets/textures/earth/8k_earth_daymap.jpg'
import EarthNormalMap from '../assets/textures/earth/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../assets/textures/earth/8k_earth_specular_map.jpg'
import EarthCloudsMap from '../assets/textures/earth/8k_earth_clouds.jpg'
import { TextureLoader } from "three";

import { TopSection } from '../components/TopSection';


export const Home = () =>{
    return <>
    <TopSection/>
    <Canvas>
        <Earth/>
    </Canvas>
    </>
}

function Earth(){
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])
        
    const earthRef = useRef();
    const cloudsRef = useRef();
    useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    earthRef.current.rotation.y = elapsedTime / 6
    cloudsRef.current.rotation.y = elapsedTime / 6
    })

    return <>
    <Stars radius={300} depth={-20} count={20000} factor={7} saturation={0} fade={true} opacity={.5}/>
    <pointLight color="#f6f3ea" position={[1.5,0,2]} intensity={1.2} />
    <animated.mesh scale={3}  ref={cloudsRef}  position={[0, 0, -2]}>
        <sphereGeometry args={[1.005, 128, 128]} />
        <meshPhongMaterial
        map={cloudsMap}
        opacity={0.4}
        depthWrite={true}
        transparent={true}
        side={THREE.DoubleSide}
        />
    </animated.mesh>
    <animated.mesh scale={3}  ref={earthRef} position={[0, 0, -2]}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        metalness={0.4}
        roughness={0.7}
        />
    </animated.mesh>
    </>
}