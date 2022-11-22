import * as React from 'react';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import { Textures } from '../database/textures';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { addDoc, collection,getDocs } from "firebase/firestore"
import { db } from "../database/firebase-config"
import TextField from '@mui/material/TextField';

export const Settings =({localProps, setLocalProps}) =>{
    const {name, txrIdx, displacementScale, aoMapIntensity, roughness, metalness, color, scale, position} = localProps
    
    const createCelestial = async() => {
        await addDoc(collection(db,"Celestial Bodies"),localProps)
    }
    

    const handleChange = e => {
        const {name, value} = e.target
        setLocalProps( { ...localProps, [name]: value} )
    }

    return <>
    <SettingsContainer>
        <SettingsItem>
            <h2>Name of the planet</h2>
            <TextField  name="name" value={name} onChange={handleChange} sx={{ input: { color: 'white' },mb: 1, color:'success'}}   label="" variant="outlined"  />
        </SettingsItem>
        <SettingsItem>
            <h2>Displacement Scale</h2>
            <Slider    name="displacementScale" value={displacementScale} onChange={handleChange} step={.03} min={-1.5} max={1.5}/>  
        </SettingsItem>
        <SettingsItem>
            <h2>Ambient Occlusion</h2>
            <Slider   name="aoMapIntensity" value={aoMapIntensity} onChange={handleChange} step={1} min={0} max={10}/>  
        </SettingsItem>
        <SettingsItem>
            <h2>Roughness</h2>
            <Slider   name="roughness" value={roughness} onChange={handleChange} step={.1} min={0} max={1}/>  
        </SettingsItem>
        <SettingsItem>
            <h2>Metalness</h2>
            <Slider   name="metalness" value={metalness} onChange={handleChange} step={.1} min={0} max={1}/>  
        </SettingsItem>
        <SettingsItem>
            <h2>Texture</h2>
            <Slider   name="txrIdx" value={txrIdx} onChange={handleChange} step={1} min={0} max={Textures.length-1}/>  
        </SettingsItem>
        <SettingsItem>
            <h2>Scale</h2>
            <Slider   name="scale" value={scale} onChange={handleChange} step={.1} min={0} max={2}/>  
        </SettingsItem>
        <SettingsItem>
            <Link to="/AllCelestials"><Button onClick={createCelestial} variant="outlined" sx={{m: 3}}>DONE</Button></Link>
        </SettingsItem>
    </SettingsContainer>
    </>
} 


const SettingsContainer = styled.div`
display: flex;
flex-direction: column;
width: 400px;
height: 700px;
position: fixed;
overflow-x: hidden;
overflow-y: auto;

top: 5%;
right: 10%;

align-items: center;
z-index: 99;
border-radius: 25px;
background-color: rgba(23,36,46,.5);

`;

const SettingsItem = styled.div`
background-color: rgba(23,36,46,.8);
width: 95%;
height: auto;
text-align: center;
color:white;
margin: 5px;
font-size: 15px;

border-radius: 25px;
`;