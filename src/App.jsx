import React, { useState } from "react";

import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BuyMovies from "./pages/BuyMovies";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Action from "./pages/Action";
import Comedy from "./pages/Comedy";
import Drama from "./pages/Drama";


const App = () => {
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
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>


        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>


        <Route exact path="/ContactUs">
          <ContactUs />
        </Route>


        <Route exact path="/BuyMovies">
          <BuyMovies />
        </Route> 

        <Route exact path="/Action">
          <Action />
        </Route>

        <Route exact path="/Comedy">
          <Comedy />
        </Route>

        <Route exact path="/Drama">
          <Drama />
        </Route> 

        
        
          
    


        
      </Switch>
    </Router>

   
  );
};

export default App;
