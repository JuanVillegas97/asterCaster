import {  Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { Textures } from "../database/textures";
import {LinearEncoding} from "three";
import { collection,getDocs,addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore"
import { db } from "../database/firebase-config"
import React, {useState, useEffect} from "react";
export const AllCelestials = () => {
    const [remoteProps, setremoteProps] = useState([]) //From the data base

    useEffect(() => {
        const getCelestials = async () => {
          const data = await getDocs(collection(db,"Celestial Bodies"))
          setremoteProps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getCelestials()
      }, []);

    return <>
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
        {remoteProps.map((celestial, index)=>{

        return (
            <mesh  key={index} position={[0,0,0]} scale={0.3} >
                <sphereGeometry args={[1, 264, 264]} />
                <meshPhongMaterial opacity={1} />
                <meshStandardMaterial
                />
            </mesh>
            )
        })}
        </Canvas>
        </>
}


{/* <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} /> */}
