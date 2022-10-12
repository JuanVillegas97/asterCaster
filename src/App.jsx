import styled from 'styled-components';
import { Suspense, useState } from 'react';
import { CelestialObject } from './components/CelestialObject';
import { Canvas } from '@react-three/fiber';
import data from './database/data';

import { OrbitControls, Stars } from "@react-three/drei";
import { TopSection } from './components/TopSection';
import { Earth } from './components/Earth';
const CanvasContainer = styled.div`
height: 100%;
width: 100%;
`
function App() {  
  const [celestialProps, setCelestialProps] = useState(data)

  return (
    <CanvasContainer>
      {/* <TopSection/> */}
      <Canvas camera={{fov: 75, position: [0, 0, 0.8]}}>
        <Suspense fallback={null}>
          {/* <Earth/> */}
          <CelestialObject celestialProps={celestialProps}/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}


export default App;
