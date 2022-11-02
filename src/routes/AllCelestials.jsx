import {  useLoader,Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from "three";


import EarthDayMap from '../assets/textures/earth/8k_earth_daymap.jpg'
import EarthNormalMap from '../assets/textures/earth/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../assets/textures/earth/8k_earth_specular_map.jpg'
import EarthCloudsMap from '../assets/textures/earth/8k_earth_clouds.jpg'


export const AllCelestials = ({celestialProps}) => {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])

    return (
        <>
        <Canvas>
        <ambientLight intensity={1} />
        <Stars
        radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true}
        />
        <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
        />
        {/* Change the index for the id */}
        {celestialProps.map((celestial, index)=>{
        const {position, scale} = celestial
        return (
            <group key={index}>
            <mesh  position={position} scale={0.3} >
                <sphereGeometry args={[1.005, 32, 32]}/>
                <meshPhongMaterial 
                    map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide}
                />
            </mesh>
            <mesh  position={position} scale={0.3}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial
                    map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7}
                />
            </mesh>
            </group>
            )
        })}
        </Canvas>
        </>
    );
}


{/* <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} /> */}
