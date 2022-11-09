import React from "react"
import { Route, Routes } from "react-router-dom"

import {AllCelestials} from "./routes/AllCelestials"
import { CelestialForge } from "./routes/CelestialForge"
import { Home } from "./routes/Home"

export const App = () => {
  return <>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/CelestialForge" element={<CelestialForge/>}/>
    <Route path="/AllCelestials" element={<AllCelestials/>}/>
  </Routes>
  </>
}