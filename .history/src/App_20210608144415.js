import React ,{useEffect} from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";
import {auth} from "./firebase";
import {usestateValue} from "./"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
       auth.onAuthStateChanged(authUser=>{
         if(authUser){
          //  logedin
         }else{
          //  logedOut
         }
       })
  },[])
  return (
    <Router>
        <div className="app">
          <Switch>
              <Route path="/checkout">
                    <Header />              
                    <Checkout />
              </Route>
              <Route path="/login">
                    <Login />``
              </Route>
              <Route path="/">
                 <Header />
                 <Home />
               
              </Route>

              
          </Switch>
        </div>
    </Router>
  );
}

export default App;
