import React, { useState } from "react";
import { Link } from "react-router-dom"

import styled, {css, keyframes} from "styled-components";
import Button from '@mui/material/Button';


export const TopSection = () => {
  const [doAnimate, setDoAnimate] = useState(false);
  return <>
  <TopSectionContainer animate={doAnimate}>
    <Logo>Aster Caster</Logo>
    <Slogan>Create you own astonomical objects</Slogan>
    <Paragraph>
    Aster Caster is a web page developed under the React and Three.js libraries.
    Here any fan of astronomy will feel amazed because they will be able to create their own completely personalized celestial body!
    </Paragraph>
    <Button onClick={() => setDoAnimate(true)} variant="outlined" sx={{mt: 5}}>gO</Button>
  </TopSectionContainer>
  </>
}

const flash = keyframes`
  from {
      opacity: 1;
      z-index: 99;
      }
      to {
      opacity: 0;
      z-index: -15;
      }
`;


const TopSectionContainer = styled.div`

  animation: ${props =>
  props.animate &&
  css`
    ${flash} 5s forwards 1
  `};

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(23,36,46,0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
`;



const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
`;