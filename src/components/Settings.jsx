import * as React from 'react';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import { SliderPicker  } from 'react-color';
import { Textures } from '../database/textures';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

export const Settings =({localProps, setLocalProps}) =>{
    const {name, texture, displacementScale, aoMapIntensity, roughness, metalness, color} = localProps
    const handleChange = e => {
        const {name, value} = e.target
        setLocalProps( { ...localProps, [name]: value} )
    }

    return <>
    <SettingsContainer>
        <SettingsItem>
            <SettingsTitle>Displacement Scale</SettingsTitle>
            <Slider   color="warning" name="displacementScale" value={displacementScale} onChange={handleChange} step={.03} min={-1.5} max={1.5}/>  
        </SettingsItem>
        <SettingsItem>
            <SettingsTitle>Ambient Occlusion</SettingsTitle>
            <Slider   name="aoMapIntensity" value={aoMapIntensity} onChange={handleChange} step={1} min={0} max={10}/>  
        </SettingsItem>
        <SettingsItem>
            <SettingsTitle>Roughness</SettingsTitle>
            <Slider   name="roughness" value={roughness} onChange={handleChange} step={.1} min={0} max={1}/>  
        </SettingsItem>
        <SettingsItem>
            <SettingsTitle>Metalness</SettingsTitle>
            <Slider   name="metalness" value={metalness} onChange={handleChange} step={.1} min={0} max={1}/>  
        </SettingsItem>
        <SettingsItem>
            <SettingsTitle>Texture</SettingsTitle>
            <Slider   name="texture" value={texture} onChange={handleChange} step={1} min={0} max={Textures.length-1}/>  
        </SettingsItem>
        <SettingsItem>
        <Link to="/AllCelestials"><Button variant="outlined" sx={{m: 2}}>DONE</Button></Link>
        </SettingsItem>

        {/* <SettingsItem>
            <SettingsTitle>{color}</SettingsTitle>
            <SliderPicker color={color} onChangeComplete={(color,e)=>{setColor(color.hex)}}/>
        </SettingsItem > */}
    </SettingsContainer>
    </>
} 

const SettingsTitle = styled.h2`

`;

const SettingsContainer = styled.div`
display: flex-wrapped;
flex-wrap: wrap;
flex-flow: column wrap;
flex-direction: column;
position: absolute;
width: 400px;
height: 700px;
top: 80px;
left: 600px;
background-color: rgba(23,36,46,0.4);
align-items: center;
z-index: 99;
border-radius: 25px;
`;

const SettingsItem = styled.div`
background-color: rgba(23,36,46,0.4);
text-align: center;
color:white;
flex: 1 1 80px;
margin: 5px;
padding: 15x;
font-size: 20px;
border-radius: 25px;
`;