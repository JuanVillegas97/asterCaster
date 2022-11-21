import {  Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture  } from "@react-three/drei";
import { LinearEncoding} from "three";

import { collection,getDocs } from "firebase/firestore"
import { db } from "../database/firebase-config"
import React, {useState, useEffect, useRef} from "react";
import { Textures } from "../database/textures";



export const AllCelestials = () => {
    const [remoteProps, setremoteProps] = useState([]) //From the data base

    useEffect(() => {
        const getCelestials = async () => {
          const data = await getDocs(collection(db,"Celestial Bodies"))
          setremoteProps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getCelestials()
      }, []);

    return <Canvas>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}/>
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
      <MyCanvas remoteProps={remoteProps}/>
    </Canvas>
}

const MyCanvas = ({remoteProps}) => {
  const myRef = useRef(null)
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const x = 2 * Math.sin(elapsedTime);
    const z = 2 * Math.cos(elapsedTime);
    myRef.current.rotation.y = elapsedTime / 6;
    myRef.current.rotation.x = elapsedTime / 6;
    myRef.current.position.x = x;
    myRef.current.position.z = z;
    });
    
    

  const celestialTextures = []
  celestialTextures.push(useTexture({
    map: Textures[0].map,
    displacementMap: Textures[0].displacementMap,
    aoMap: Textures[0].aoMap,
    roughnessMap: Textures[0].roughnessMap,
    metalnessMap: Textures[0].metalnessMap,
    normalMap: Textures[0].normalMap,
  }))
  celestialTextures.push(useTexture({
    map: Textures[1].map,
    displacementMap: Textures[1].displacementMap,
    aoMap: Textures[1].aoMap,
    roughnessMap: Textures[1].roughnessMap,
    metalnessMap: Textures[1].metalnessMap,
    normalMap: Textures[1].normalMap,
  }))
  celestialTextures.push(useTexture({
    map: Textures[2].map,
    displacementMap: Textures[2].displacementMap,
    aoMap: Textures[2].aoMap,
    roughnessMap: Textures[2].roughnessMap,
    metalnessMap: Textures[2].metalnessMap,
    normalMap: Textures[2].normalMap,
  }))
  celestialTextures.push(useTexture({
    map: Textures[3].map,
    displacementMap: Textures[3].displacementMap,
    aoMap: Textures[3].aoMap,
    roughnessMap: Textures[3].roughnessMap,
    metalnessMap: Textures[3].metalnessMap,
    normalMap: Textures[3].normalMap,
  }))

  return<>

  {/* Change the index for the id */}
  {remoteProps.map((celestial, index)=>{
    const {name, txrIdx, displacementScale, aoMapIntensity, roughness, metalness, color, scale} = celestial
    let z = Math.floor(Math.random() * 5) + 1
    let x = Math.floor(Math.random() * 5) + 1
    let y = Math.floor(Math.random() * 5) + 1
    let position = [x,y,z]

    return (
    <mesh  key={index} position={position} scale={0.3} ref={myRef} >
      <sphereGeometry args={[1, 264, 264]} />
        <meshPhongMaterial opacity={1} />
        <meshStandardMaterial
        {...celestialTextures[txrIdx]}
        normalMap-encoding={LinearEncoding}
        transparent
        displacementScale={displacementScale}
        aoMapIntensity={aoMapIntensity}
        roughness={roughness}
        metalness={metalness}
        metalnessMap={null}
        />
    </mesh>
    )})}
  </>
}

