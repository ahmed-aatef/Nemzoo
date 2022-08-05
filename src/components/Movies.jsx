import React from "react";
//import styled from "styled-components";
import list from "./data";
import Movie from "./Movie";
import "../styles/Movies.css";

import styled from "styled-components";


const Movies = ({handleClick}) => {


  

  const Section = styled.div`

  `;

 

  const MovieContainer = styled.div`
   padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    overflow:hidden;
  
    `;

 

  return (

    <Section>

     

      <MovieContainer>
      {list.map((item) => (
        < Movie Key={item.id} item={item} key={item.id} handleClick={handleClick} />
      ))}

    
    

    


      </MovieContainer>



    </Section>
  )}
    

export default Movies;
