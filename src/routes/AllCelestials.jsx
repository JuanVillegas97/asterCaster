import {  Canvas, useFrame, extend} from "@react-three/fiber";

import {  Stars, useTexture  } from "@react-three/drei";
import { LinearEncoding} from "three";

import { collection,getDocs } from "firebase/firestore"
import { db } from "../database/firebase-config"
import React, {useState, useEffect, useRef} from "react";
import { Textures } from "../database/textures";
import { Text3D } from "@react-three/drei";
import fontUrl from '../assets/fonts/Open Sans_Bold.json'

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
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
      <MyCanvas remoteProps={remoteProps}/>
    </Canvas>
}

const MyCanvas = ({remoteProps}) => {
  
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


  const celestialRefs = useRef([])
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const random = Array.from({length: remoteProps.length*2}, () => Math.floor(Math.floor(Math.random() * 9) + 1));

  useEffect(() => {
    celestialRefs.current = celestialRefs.current.slice(0, remoteProps.length);
  }, [remoteProps]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    for (let index = 0; index < celestialRefs.current.length; index++) {
      const x = random[index] * Math.sin(elapsedTime+random[index]);
      const z = random[index] * Math.cos(elapsedTime+random[index]);
      celestialRefs.current[index].rotation.y = elapsedTime / random[index];
      celestialRefs.current[index].position.x = x;
      celestialRefs.current[index].position.z = z;
      if(id==celestialRefs.current[index].id){
        celestialRefs.current[index].position.x = 0
        celestialRefs.current[index].position.y = 0
        celestialRefs.current[index].position.z = 0

      }
    }
  });
  

  const handleClick = (e, name) => {
    setId(e.object.id)
    setName(name)
  }

  return<>
      <Text3D font={fontUrl} scale={.3} position={[-.8,1.2,0]}  >
        {name}
        <meshNormalMaterial   />
      </Text3D>
  {remoteProps.map((celestial, index)=>{
    const {name, txrIdx, displacementScale, aoMapIntensity, roughness, metalness, color, scale} = celestial
    let y = Math.random() * (5 - -5) + -5;
    let position = [0,y,0]
    return (
    <mesh   onClick={(e) => handleClick(e, name)} key={index} position={position} scale={.5}  ref={el => celestialRefs.current[index] = el }>
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

