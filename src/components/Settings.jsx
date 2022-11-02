import * as React from 'react';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import { SliderPicker  } from 'react-color';
import { Textures } from '../database/textures';

export default function Settings({isForging, texture, setTexture, displacementScale, setDisplacementScale, aoMapIntensity, setAoMapIntensity, roughness, setRoughness, metalness, setMetalness, color, setColor}){
    if(!isForging){
    return <>
    <SettingsContainer>
        <SettingsItem>
            <SettingsTitle>Displacement Scale</SettingsTitle>
            <Slider  value={displacementScale} onChange={e => setDisplacementScale(e.target.value) } step={.03} min={-1.5} max={1.5}/>  
        </SettingsItem>
        <SettingsItem>
            <SettingsTitle>aoMapIntensity</SettingsTitle>
            <Slider   value={aoMapIntensity} onChange={e => setAoMapIntensity(e.target.value) } step={1} min={0} max={10}/>  
        </SettingsItem>
        <SettingsItem>
            <SettingsTitle>Roughness</SettingsTitle>
            <Slider   value={roughness} onChange={e => setRoughness(e.target.value) } step={.1} min={0} max={1}/>  
        </SettingsItem>
        <SettingsItem>
            <SettingsTitle>Metalness</SettingsTitle>
            <Slider   value={metalness} onChange={e => setMetalness(e.target.value) } step={.1} min={0} max={1}/>  
        </SettingsItem>
        <SettingsItem>
            <SettingsTitle>Texture</SettingsTitle>
            <Slider   value={texture} onChange={e => setTexture(e.target.value) } step={1} min={0} max={Textures.length-1}/>  
        </SettingsItem>
        <SettingsItem>
            <SettingsTitle>{color}</SettingsTitle>
            <SliderPicker color={color} onChangeComplete={(color,e)=>{setColor(color.hex)}}/>
        </SettingsItem >
    </SettingsContainer>
    </>
    }else{
        return <></>
    }
} 

const SettingsTitle = styled.h2`

`;

const SettingsContainer = styled.div`
display: flex;
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
margin: 10px;
padding: 10px;
font-size: 20px;
border-radius: 25px;
`;