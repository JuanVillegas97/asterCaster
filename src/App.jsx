import styled from 'styled-components';
import { Suspense, useState } from 'react';
import { CelestialObject } from './components/CelestialObject';
import { Canvas } from '@react-three/fiber';
import data from './database/data';

const CanvasContainer = styled.div`
height: 100%;
`

function App() {  
  const [celestialProps, setCelestialProps] = useState(data)


  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <CelestialObject celestialProps={celestialProps}/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}


export default App;
