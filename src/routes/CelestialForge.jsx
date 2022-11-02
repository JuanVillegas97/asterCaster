import { useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from "@react-three/drei"

import CelestialObject  from '../components/CelestialObject'
import { Settings } from '../components/Settings'

const initState = {
  name: "No name",
  texture: 0,
  displacementScale: 0,
  aoMapIntensity: 0,
  roughness: 0,
  metalness: 0,
  color: "fff",
}

export const CelestialForge = () => {  
  const [localProps, setLocalProps] = useState(initState)

  return <>
  <Canvas camera={{fov: 75, position: [0, 0, 0.8]}}>
    <Stars radius={300} depth={-20} count={20000} factor={7} saturation={0} fade={true} opacity={.5}/>
    <CelestialObject localProps={localProps}/>
  </Canvas>
    <Settings localProps={localProps} setLocalProps={setLocalProps} /> 
  </>
}
