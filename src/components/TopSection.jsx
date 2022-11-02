import React, { useState } from "react";
import { Link } from "react-router-dom"

import styled, {keyframes} from "styled-components";
import Button from '@mui/material/Button';


export const TopSection = () => {
  return <>
  <TopSectionContainer>
    <Logo>Aster Caster</Logo>
    <Slogan>Create you own astonomical objects</Slogan>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In distinctio eos aspernatur eaque veritatis earum eum pariatur debitis neque repellendus provident, cum modi, rem tempora sequi, cupiditate voluptates reiciendis alias.
      </Paragraph>
      <Link to="/CelestialForge"><Button variant="outlined" sx={{mt: 5}}>gO</Button></Link>
      </TopSectionContainer>
    </>
}

const TopSectionContainer = styled.div`
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
  opacity: .8;
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