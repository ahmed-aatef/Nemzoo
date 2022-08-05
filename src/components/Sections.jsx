import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {mobile} from "../responsive";

const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  margin: 0.5px;
  max-width:100%;
  overflow:hidden;
  ${mobile({padding:"2px 0px",flexDirection:"column"})}
`;

const Left = styled.div`
  flex: 1;
  margin: 0.5px;
  ${mobile({height:"200px"})}

`;
const InfoLeft = styled.div`
 
  width: 100%;
  height: 20%;
  background-color:  #ffff99;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius:20px 20px 0px 0px;
  ${mobile({height:"50px",flexDirection:"row", justifyContent: "space-around"})}
`;

const TitleLeft = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color:  #00004d;
  ${mobile({fontSize:"15px"})}
`;

const ButtonLeft = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: #14033b;
  cursor: pointer;
  font-weight: 600;
  margin-top: 0.25em;
  margin-bottom: 10px;
  border-radius:5px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  

`;

const SectionLink = styled(Link)`
text-decoration: none;
  
`;

const ImageLeft = styled.img`
   width: 100%;
  height: 80%;
  margin:1px;
  object-fit: cover;
  ${mobile({height:"50%"})}
`;

const Center = styled.div`
  flex: 1;
  margin: 2px;
  ${mobile({height:"200px", flexDirection:"column"})}
`;


const InfoCenter = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ebe4e4;
  border-radius:20px 20px 0px 0px;
  ${mobile({height:"50px",flexDirection:"row", justifyContent: "space-around"})}
`;

const TitleCenter = styled.h1`
   font-size: 2rem;
  font-weight: bold;
  color:  #00004d;
  ${mobile({fontSize:"15px"})}
  
`;

const ButtonCenter = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: #14033b;
  cursor: pointer;
  font-weight: 600;
  margin-top: 0.25em;
  margin-bottom: 10px;
  border-radius:5px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`;

const ImageCenter = styled.img`
  width: 100%;
  height: 80%;
  margin:1px;
  object-fit: cover;
  ${mobile({height:"50%"})}

`;

const Right = styled.div`
  flex: 1;
  margin: 2px;
  ${mobile({height:"250px"})}
`;




const InfoRight = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffe6e6;
  border-radius:20px 20px 0px 0px;
  ${mobile({height:"50px",flexDirection:"row", justifyContent: "space-around"})}
`;

const TitleRight = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color:  #00004d;
  ${mobile({fontSize:"15px"})}
`;

const ButtonRight = styled.button`
   border: none;
  padding: 10px;
  background-color: white;
  color: #14033b;
  cursor: pointer;
  font-weight: 600;
  margin-top: 0.25em;
  margin-bottom: 10px;
  border-radius:5px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

`;
const ImageRight = styled.img`
  width: 100%;
  height: 80%;
  margin:1px;
  object-fit: cover;
  ${mobile({height:"60%"})}
`;






const Sections = () => {
  return (
    <Wrapper>


      <Left>
        <InfoLeft>
          <TitleLeft> ACTION </TitleLeft>
          <ButtonLeft> 
          <SectionLink to={"/Action"}>  DISCOVER MOVIES   </SectionLink>  </ButtonLeft>
        </InfoLeft>
        <ImageLeft src={"/images/foraction2.jpg"} />
      </Left>



      <Center>
        <InfoCenter>
          <TitleCenter> COMEDY </TitleCenter>
          <ButtonCenter>
          <SectionLink to={"/Comedy"}>  DISCOVER MOVIES   </SectionLink> 
          
          </ButtonCenter>
        </InfoCenter>
        <ImageCenter src={"/images/forcomedy.jpg"} />
      </Center>



      <Right>
        
        <InfoRight>
          <TitleRight> DRAMA </TitleRight>
          <ButtonRight>
          <SectionLink to={"/Drama"}>  DISCOVER MOVIES   </SectionLink> 
             </ButtonRight>
        </InfoRight>
        <ImageRight src={"/images/fordrama.jpg"} />
      </Right>



    </Wrapper>
  );
};

export default Sections;
