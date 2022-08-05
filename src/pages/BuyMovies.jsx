import React from 'react'
import { useState } from 'react';
// import Movies from "./components/Movies";
// import Header from "./components/Header";
// import Cart from "./components/Cart";
import Header from '../components/Header';
import Movies from '../components/Movies';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Social from '../components/Social';



const BuyMovies = () => {
    const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  



  return (
    <React.Fragment>
       
    <Header setShow={setShow} size={cart.length} />
    {show ? (
      <Movies handleClick={handleClick} />
    ) : (
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    )}

   
    <Footer/>
    <Social/>
  </React.Fragment>
    
  );
};

export default BuyMovies;
