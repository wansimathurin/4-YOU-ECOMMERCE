import React from 'react';
import "./Login.css";
import logo1  from "./logo1.png";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="Login">
            <Link to="/">
            <img className="header__logo" src={logo1} alt=""></img>
            </Link>
            <div>
                
            </div>
        </div>
    )
}

export default Login
