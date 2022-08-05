import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined} from "@mui/icons-material";
import {mobile} from "../responsive";


const Container = styled.div`
  background-color: #653ada;
  height: 60px;
  max-width:100%;
  position: sticky;
top:0;
overflow:hidden;
${mobile({height:"50px"})}
    
`;

const Wrapper = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
padding: 10px;
position: sticky;
top:0;

${mobile({padding:"10px 0"})}

`;

const Left = styled.div`
flex:1;
display:flex;
justify-content: space-around;
align-items: center;

${mobile ({display:"none"})}

`;

const  MenuItem = styled.div`
font-size:15px;
font-weight: bold;
color:white;
cursor: pointer;
margin-left:25px;
`;

const Center = styled.div`
flex:1;
text-align:center;

`;

const Logo = styled.h1`
font-weight: 600;
color: White;
cursor:pointer;
${mobile({fontSize:"15px"})}
`;



const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content: flex-end;

`;

const ForCart = styled.div`
cursor:pointer;

margin: 10px 45px;

`;

const Header = ({setShow, size}) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem> REGISTER </MenuItem>
          <MenuItem> SIGN IN  </MenuItem>
        </Left>


        <Center>
            <Logo onClick={()=>setShow(true)}> 
                 NEMZOO MOVIES
            
            </Logo>
        </Center> 
    

        <Right>
          <ForCart onClick={() => setShow(false)}>
            
            <Badge badgeContent={size} color="primary">
              <ShoppingCartOutlined/>
            </Badge>

          </ForCart>

        </Right>


      </Wrapper>
    </Container>
  );
};

export default Header;
