import { useRef, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from "@react-three/drei"

import { collection,addDoc} from "firebase/firestore"
import { db } from "../database/firebase-config"


import {CelestialObject}  from '../components/CelestialObject'
import { Settings } from '../components/Settings'

import Button from '@mui/material/Button';

const initState = {
  name: "uwu",
  txrIdx: 0,
  displacementScale: 0,
  aoMapIntensity: 0,
  roughness: 0,
  metalness: 0,
  color: "fff",
  position:  [0, 0, 0],
  scale:1,
  texture: {}
}

export const CelestialForge = () => {  
  const [localProps, setLocalProps] = useState(initState)
  const [celestialBodyTexture, setCelestialBodyTexture] = useState({})
  const celestialBodyTextures = useRef({})

  

  return <>
  <Canvas camera={{fov: 75, position: [0, 0, 0.8]}}>
    <Stars></Stars>
    <CelestialObject celestialBodyTextures={celestialBodyTextures} localProps={localProps} />
  </Canvas>
    <Settings localProps={localProps} setLocalProps={setLocalProps} celestialBodyTextures={celestialBodyTextures}/> 
  </>
}
