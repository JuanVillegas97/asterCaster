import React, {useState, useEffect} from "react"
import { Route, Routes } from "react-router-dom"

import { collection,getDocs,addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore"
import { db } from "./database/firebase-config"

import {AllCelestials} from "./routes/AllCelestials"
import { CelestialForge } from "./routes/CelestialForge"
import { Home } from "./routes/Home"

export const App = () => {
  const [celestialProps, setCelestialProps] = useState([]) //From the data base
  useEffect(() => {
    const getCelestials = async () => {
      const data = await getDocs(collection(db,"Celestial Bodies"))

      setCelestialProps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    getCelestials()
  }, []);
  
  return <>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/CelestialForge" element={<CelestialForge/>}/>
    <Route path="/AllCelestials" element={<AllCelestials celestialProps={celestialProps}/>}/>
  </Routes>
  </>
}