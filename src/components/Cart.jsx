
import React, { useState, useEffect } from "react";
import "../styles/Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let price = 0;
    cart.map((item) => (price += item.amount * item.price));
    setPrice(price);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p> 
            <p className="category">{item.category} 
            
            <span> ${item.price}</span>
             </p> 
            
          </div>

          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            {/* <span> ${item.price}</span> */}
            <button onClick={() => handleRemove(item.id)}>Remove Movie</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total of your Cart</span>
        <span> $ {price}</span>
      </div>
    </article>
    

    
  );
};

export default Cart;