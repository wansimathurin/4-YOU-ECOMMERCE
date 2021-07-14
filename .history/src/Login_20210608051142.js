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
            <div className="Login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    inp
                </form>
            </div>
        </div>
    )
}

export default Login
