import {
  FacebookTwoTone,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18vh;
  max-width: 100%;
  padding: 2px;
  margin: 0.5px;
  font-family: cursive;
  background-color:  rgb(190, 142, 245);
  overflow:hidden;
  ${mobile({flexDirection:"column"})}
  
`;



const Left = styled.div`
  flex: 1;
  padding: 1px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({display:"none"})}
`;

const Title = styled.h2`
  padding: 5px;
  margin: 5px;
 
`;

const Desc = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  ${mobile({fontSize:"15px"})}
`;

const Center = styled.div`
  flex: 2;
  padding: 1px;
  height: 100%;
  width: 100%;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
  margin: 40px;
  height: 40px;
  width: 40px;
  background-color: #${(props) => props.color};
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  height: 100%;
  width: 100%;
  ${mobile({display:"none"})}
`;

const CopyDesc = styled.p`
font-family: sans-serif;
font-weight: bold;
padding-top: 20px
`;

const Social = () => {
  return (
    <Container>
      <Left>
        <Title> WE ARE SOCIAL </Title>
        <Desc> FOLLOW US </Desc>
      </Left>

      <Center>
        <SocialContainer>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>

          <SocialIcon color="3B5999">
            <FacebookTwoTone />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="1A1A1A">
            <LinkedIn />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Center>

      <Right>
        <CopyDesc>  © Copyright 2022 |  All Rights Reserved  Team NEMZOO </CopyDesc>
      </Right>
    </Container>
  );
};

export default Social;
