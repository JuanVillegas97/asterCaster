import styled from 'styled-components';
import { Suspense, useState } from 'react';
import { CelestialObject } from './components/CelestialObject';
import { Canvas } from '@react-three/fiber';
import data from './database/data';
import { createContext, useContext } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { TopSection } from './components/TopSection';
import { Earth } from './components/Earth';
import Settings from './components/Settings';

const CanvasContainer = styled.div`
height: 100%;
width: 100%;
`

function App(props) {  
  const [celestialProps, setCelestialProps] = useState(data)
  const [roughness, setRoughness] = useState(0)
  const [isForging, setIsForging] = useState(true)
  const [color, setColor] = useState('#fff')

  return (
    <CanvasContainer>
      <TopSection isForging={isForging} setIsForging={setIsForging}/>
      <Canvas camera={{fov: 75, position: [0, 0, 0.8]}}>
        <Suspense fallback={null}>
        <Stars
        radius={300}
        depth={-20}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
        opacity={.5}
        />
        <CelestialObject roughness={roughness} isForging={isForging} color={color}/>
        </Suspense>
      </Canvas>
      <Settings  isForging={isForging} color={color} roughness={roughness} setRoughness={setRoughness} setColor={setColor}/>
    </CanvasContainer>
  )
}


export default App;
