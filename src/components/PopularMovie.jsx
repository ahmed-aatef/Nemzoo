import React from 'react'
import styled from 'styled-components';
import {mobile} from "../responsive"


const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:400px;
    flex-direction : column;
    height: 70vh;
    max-width:100%;
    display:flex;
    align-items: center;
    justify-content:center;
    overflow:hidden;
    ${mobile({height:"75vh", width:"100%", flexDirection:"column"})}
    
`;


const Image = styled.img`
    height: 75%;
    max-width: 80%;
    ${mobile({height:"20vh"})}

`

const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Title = styled.h3`
color: #210750;
`;

const Category = styled.p`
font-weight: 400;
font-size: 1.2rem;
color: #42020d;
overflow:hidden;
`;

const PopularMovie = ({item}) => {
    
  return (


    
        
        
   
    <Container>

        

        <Image src={item.img}/>

        <Info>
            <Title> {item.title} </Title>
            <Category> {item.category} </Category>
        

        </Info>

        
    </Container>
    
  );
};

export default PopularMovie