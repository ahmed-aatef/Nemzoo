
import React  from 'react';
import styled from 'styled-components';
import list from './data';
import PopularMovie from './PopularMovie';
import Filter from './Filter';
import {mobile} from "../responsive"



const Container = styled.div``;



const FilterContainer = styled.div``;


const MovieContainer = styled.div` 
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    max-width:100%;
    overflow:hidden;

    ${mobile({flexDirection:"column", padding:"15px 0px"})}


`;


const PopularMovies = () => {

    

  return (



    <Container> 

        <FilterContainer>

            <Filter/>
        </FilterContainer>

        

        





    <MovieContainer>
    
        {list.map((item)=> (
            <PopularMovie item={item} key={item.id}/>
        

        ))}
    </MovieContainer>

    </Container>
  );
};

export default PopularMovies;