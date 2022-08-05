import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
width: 100%;
background-color: white;
padding: 2px 20px;
display: flex;
align-items:center;
justify-content:center;




`;



const SelectCat = styled.select`
width:200px;
height: 30px;
margin-bottom: 10px;
color: #111197;
font-weight: bold;
${mobile({display:"none"})}
`;



const OptionCat = styled.option``;

const Filter = (props) => {

    function onFilterValueChanged(event){
        // console.log(event.target.value);
        props.filterValueSelected(event.target.value)
    }
  return (
    <Container>
        <SelectCat onChange={onFilterValueChanged}>
            <OptionCat> All Movies </OptionCat>
            <OptionCat> Action </OptionCat>
            <OptionCat> Comedy </OptionCat>
            <OptionCat> Drama </OptionCat>
        </SelectCat>
    </Container>
    
  );
};

export default Filter;