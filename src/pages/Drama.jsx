import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Social from "../components/Social";
import styled from "styled-components";








const Container = styled.div``;

const Wrapper = styled.div`
padding : 50px;
display: flex;
`;

const ImgContainer = styled.div`
    flex:1;
`;

const Image = styled.img`
    width:100%;
    height:60vh;
    object-fit: contain;

`;


const InfoContainer = styled.div`
    flex: 1;
    padding: 0 40px;

`;

const Title = styled.h1`
    font-weight: 200;
    font-size: 40px;

`;

const Category = styled.p`
    margin: 20px 0%;
    font-weight: 100;
    font-size: 30px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 30px;
`;


const Drama = () => {
  return (
    <Container>
    <Header />

    <Wrapper>
      <ImgContainer>
        <Image src={"/images/drama/drama1.jpg"} />
      </ImgContainer>

      <InfoContainer>
        <Title> Dark Places (Bilingual) </Title>
        <Category> Drama </Category>
        <Price>  $15 </Price>
      </InfoContainer>
    </Wrapper>


    <Wrapper>
      <ImgContainer>
        <Image src={"/images/drama/drama2.jpg"} />
      </ImgContainer>

      <InfoContainer>
        <Title> JOBS (Bilingual) [Blu-ray + DVD]</Title>
        <Category> Drama </Category>
        <Price>  $13 </Price>
      </InfoContainer>
    </Wrapper>



    <Wrapper>
      <ImgContainer>
        <Image src={"/images/drama/drama3.jpg"} />
      </ImgContainer>

      <InfoContainer>
        <Title>  All Creatures Great and Small: The Complete Series Collection</Title>
        <Category> Drama </Category>
        <Price> $70</Price>
      </InfoContainer>
    </Wrapper>



    <Footer />

    <Social />
  </Container>
  )
}

export default Drama
