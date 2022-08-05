import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {mobile} from "../responsive";

const Container = styled.div`
  display: flex;
  height: 50vh;
  padding: 0.25px;
  max-width:100%;
  overflow:hidden;
  ${mobile({height:"40vh"})}
`;

const Aside = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-top: 20px;
  background-color:  rgb(206, 173, 245);
  ${mobile({width:"25%"})}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-decoration: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #0c0229;
  text-decoration: none;
  ${mobile({fontSize:"15px"})}
`;

const MainLink = styled(Link)`
text-decoration: none;
color: black;
  
`;



const Center = styled.div`
  flex: 2;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: #2b00aa;
  line-height: 1.3;
  ${mobile({fontSize:"1.2rem", paddingLeft:"5px"})}
`;

const Right = styled.div`
  flex: 1;
  ${mobile({display:"none"})}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Main = () => {
  return (
    <Container>
      <Aside>
        <List>
          <ListItem>
            <MainLink to={"/AboutUs"}> About Us </MainLink>
          </ListItem>

          <ListItem>
            <MainLink to={"/ContactUs"} >
               Contact Us </MainLink>{" "}
          </ListItem>

          <ListItem> New Arrivals </ListItem>

          <ListItem>
            <MainLink to={"/Action"}> Action     </MainLink>  </ListItem>

          <ListItem>
            <MainLink to={"/Comedy"}> Comedy </MainLink>  </ListItem>

          <ListItem>
            <MainLink to={"/Drama"}> Drama   </MainLink> </ListItem>

          <ListItem>
            <MainLink to={"/BuyMovies"}> Buy Movies </MainLink>{" "}
          </ListItem>

          <ListItem> Payment  </ListItem>
        </List>
      </Aside>

      <Center>
        Nemzoo Movies is the online store for movie collectors looking for hard
        to find videos, both new and classic, on DVD, HD-DVD, and Blu-ray. Buy
        from the world's largest selection of CD's, Vinyl, Blu-ray Disc & DVDs
        at ImportCds.com. We sell quality products at cheap, discount prices.
      </Center>

      <Right>
        <Image src={"/images/nemzoo.svg"} />
      </Right>
    </Container>
  );
};

export default Main;
