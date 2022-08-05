import React from 'react';


const Movie = ({item,handleClick}) => {
    const {id, title, price,img, category} = item;
  return (


    

    <div className="cards">
      <div className="forimage">
        <img src={img} alt=""/>
      </div>
      <div className="details">

        <p> {id} </p>
        <p> {title}</p>
        <p> {category}</p>
        <p> $ {price} </p>
        
        <button onClick={()=> handleClick(item) }> Add to Cart </button>
      </div>
    </div>
   
  )
}

export default Movie;