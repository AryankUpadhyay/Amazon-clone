// import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from './Header'
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom"
import { Checkbox } from "@mui/material";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app"> 
      <Switch>
      <Route path="/checkout">
            <Header/>
            <Checkout/>
            {/* <h1>I am following the channel</h1> */}
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
          </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
