import { collection,getDocs,addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore";
import { db } from './database/firebase-config'

import { Suspense, useState, useEffect, useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from "@react-three/drei";
import styled from 'styled-components';

import TopSection from './components/TopSection';
import Earth  from './components/Earth';
import Settings from './components/Settings';
import CelestialObject  from './components/CelestialObject';
import AllCelestials  from './components/AllCelestials';
import Button from '@mui/material/Button';



export default function App() {  
  const [celestialProps, setCelestialProps] = useState([]) //From the data base

  const [isForging, setIsForging] = useState(true) //Start forging!

  const [texture, setTexture] = useState(0)
  
  const [displacementScale, setDisplacementScale] = useState(0)
  const [aoMapIntensity, setAoMapIntensity] = useState(0)
  const [roughness, setRoughness] = useState(0)
  const [metalness, setMetalness] = useState(0)
  const [color, setColor] = useState('#fff')


  useEffect(() => {
    const getCelestials = async () => {
      const data = await getDocs(collection(db,"Celestial Bodies"))

      setCelestialProps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    getCelestials()
  }, []);

  return (
    <CanvasContainer>
      <TopSection isForging={isForging} setIsForging={setIsForging}/>
      <Canvas camera={{fov: 75, position: [0, 0, 0.8]}}>
        <Suspense fallback={null}>
        <Stars radius={300} depth={-20} count={20000} factor={7} saturation={0} fade={true} opacity={.5}/>
        <CelestialObject 
        isForging={isForging} 
        texture={texture}
        displacementScale={displacementScale}
        aoMapIntensity={aoMapIntensity}
        roughness={roughness} 
        metalness={metalness}
        />
        {/* <AllCelestials celestialProps={celestialProps}/> */}
        </Suspense>
      </Canvas>
      {/* <UWU><Button  variant="outlined" sx={{mt: 5}}>gO</Button></UWU> */}

      <Settings  
      isForging={isForging} 
      texture={texture}
      setTexture={setTexture}
      displacementScale={displacementScale}
      setDisplacementScale={setDisplacementScale}
      aoMapIntensity={aoMapIntensity}
      setAoMapIntensity={setAoMapIntensity}
      roughness={roughness} 
      setRoughness={setRoughness} 
      metalness={metalness}
      setMetalness={setMetalness}
      color={color} 
      setColor={setColor}
      />
    </CanvasContainer>
  )
}

const CanvasContainer = styled.div`
height: 100%;
width: 100%;
`
const UWU = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  

`;
