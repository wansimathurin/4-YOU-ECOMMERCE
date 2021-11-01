import React ,{useEffect} from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";
import Game from "./Components/Game";
import {auth} from "./firebase";
import { useStateValue} from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";


function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
       auth.onAuthStateChanged(authUser=>{
         if(authUser){
          
          dispatch({
            type: 'SET_USER',
            user:authUser
          })
         }else{
          //  logedOut
          dispatch({
            type: 'SET_USER',
            user:null
          })
         }
       })
  },[])
  return (
    <Router>
        <div className="app">
        <Header /> 
          <Switch>
             <Route path="/game">
                  <Game />
              </Route>
              <Route path="/checkout">        
                    <Checkout />
              </Route>
              <Route path="/login">
                    <Login />
              </Route>
              <Route path="/">
                
                 <Home />
               
              </Route>
          </Switch>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
