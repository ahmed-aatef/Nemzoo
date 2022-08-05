import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components'
import Footer from '../components/Footer';
import Social from '../components/Social';







const Container = styled.div``;

const AboutContainer = styled.div`
display:flex;
flex-direction:column;
`;

const Desc = styled.div`
display: flex;
align-items: center;
justify-content:center;
  font-size: 30px;
  font-weight: 400;
  color: #030358;

  height: 40vh;
  background-color: whitesmoke;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 2px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const AboutUs = () => {
    return (
        <Container>

        <Header/>
          
    

    
          <AboutContainer>
            <Desc>
              Nemzoo Movies  was established in Montreal in 2020, Selling its
              products all over the globe, Our products are of premium quality and
              affordable prices with excellent customer service.
            </Desc>
    
            <Right>
              <Image src={"/images/headoffice.webp"} />
            </Right>
          </AboutContainer>
          
    
      
        <Footer/>
        <Social/>
        </Container>
      );
    };
    
    export default AboutUs;