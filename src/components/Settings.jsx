import * as React from 'react';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { SliderPicker  } from 'react-color';

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

export default function Settings({isForging, roughness, setRoughness, color, setColor}) {
    if( !isForging){
    return <>
    <SettingsContainer>
        <SettingsItem>
            <h1>Roughness</h1>
            <Slider aria-label="Default" valueLabelDisplay="auto" value={roughness} onChange={e => setRoughness(e.target.value) } step={.1} min={0} max={1}/>  
        </SettingsItem>
        <SettingsItem>
            <h1>{color}</h1>
            <SliderPicker color={color} onChangeComplete={(color,e)=>{setColor(color.hex)}}/>
        </SettingsItem >
    </SettingsContainer>
    </>
    }else{
        return <></>
    }
    

}