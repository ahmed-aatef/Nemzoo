import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {mobile} from "../responsive"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  max-width: 100%;
  padding: 0.25px;
  font-family: cursive;
  display: flex;
  background-color: #f1cae0;
  overflow:hidden;
  /* ${mobile({flexDirection:"column"})} */
`;

const Info = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 
  
`;

const List = styled.ul`
  font-weight: 600;
  font-size: 1.2rem;
  list-style: none;
  ${mobile({fontSize:"20px",width:"50%"})}
`;
const ListItem = styled.li`
  cursor: pointer;
  padding-bottom: 10px;
  
`;

const FooterLink = styled(Link)`
  text-decoration:none;
`

const Action = styled.div`
 flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({display:"none"})}


`;

const ListAction = styled.ul`
 font-weight: 600;
  font-size: 1.2rem;
  list-style: none;
 
`;

const ListItemAction = styled.li`
  cursor: pointer;
  padding-bottom: 10px;
`;

const Newsletter = styled.div`
  flex: 1;
  
`;
const NewsletterTitle = styled.h2`
font-size: 20px;
font-weight: 600;
padding: 5px;
`;
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-top: 10px;
${mobile({fontSize:"20px"})}
`;

const InputContainer = styled.div`
width: 80%;
height: 40px;
display: flex;
justify-content: space-between;
margin: 10px;

border: 1px solid gray;

`;

const Input = styled.input`
border: none;
flex: 3;
text-align: center;
`;

const Button = styled.div`
border:none;
background-color: teal;
color: white;
flex:1;
padding: 10px;
text-align: center;
cursor: pointer;
${mobile({fontSize:"10px"})}
`;

const Footer = () => {
  return (
    <Container>
      <Info>
        
        <List>
          <ListItem>
            <FooterLink to={"/"}> Home  </FooterLink> </ListItem>
          <ListItem> Team </ListItem>
          <ListItem> Careers </ListItem>
          <ListItem> Press </ListItem>
          <ListItem> Photos </ListItem>
          <ListItem> Archive</ListItem>
        </List>
      </Info>

      <Action>
       
        <ListAction>
          <ListItemAction> Donate </ListItemAction>
          <ListItemAction> Volunteer </ListItemAction>
          <ListItemAction> Become Memeber</ListItemAction>
          <ListItemAction> Get Involved </ListItemAction>
          <ListItemAction> Sell With US </ListItemAction>
        </ListAction>
      </Action>

      <Newsletter>
        <NewsletterTitle> Sign up for NEMZOO Newsletter </NewsletterTitle>
        <Desc>
          Stay connected about NEMZOO events, get exclusive news straight from
          us.
        </Desc>
        
        <InputContainer>

        <Input placeholder = "Your email"/>
        <Button> SIGN UP </Button>
        
        </InputContainer>
       
      </Newsletter>
    </Container>
  );
};

export default Footer;
