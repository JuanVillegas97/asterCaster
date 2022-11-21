import React from "react"
import { Route, Routes } from "react-router-dom"

import {AllCelestials} from "./routes/AllCelestials"
import { CelestialForge } from "./routes/CelestialForge"
import { Home } from "./routes/Home"

import ReactSound from "react-sound"
import audio from './assets/audio/Interstellar_Main_Theme_Extra_Extended_Soundtr.mp3'

export const App = () => {
  return <>
  <ReactSound url={audio} playStatus={ReactSound.status.PLAYING}/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/CelestialForge" element={<CelestialForge/>}/>
    <Route path="/AllCelestials" element={<AllCelestials/>}/>
  </Routes>
  </>
}