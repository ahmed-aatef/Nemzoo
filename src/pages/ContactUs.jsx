import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Social from '../components/Social';



const Container = styled.div`
display:flex;
flex-direction: column;
padding: 1px;
`;
 
const Desc1 = styled.div`
  font-size: 30px;
  font-weight: 400;
  color: #030358;
  
  height: 20vh;
  background-color: whitesmoke;
  padding: 20px;

`;

const Desc2 = styled.div`
  font-size: 30px;
  font-weight: 400;
  color: #030358;
  
  height: 20vh;
  background-color: whitesmoke;
  padding: 20px;

`;

const Desc3 = styled.div`
  font-size: 30px;
  font-weight: 400;
  color: #030358;
  height: 20vh;
  background-color: whitesmoke;
  padding: 20px;

`;

const ContactUs = () => {
  return (
    <Container>

         
        
    

        <Header/>
        

        <Container> 
          <Desc1>
            Head Office: 1200, boulevard Saint-Laurent, bureau 2.200. Montréal-Québec H2X 0C9, CANADA
          </Desc1>

          <Desc2>  email: info@nemzo.movies.ca 
          </Desc2>



          <Desc3>
          Phone: 418-528-2265
          </Desc3>


        </Container>
        
        <Footer/>
        <Social/>




    </Container>
  )
}

export default ContactUs