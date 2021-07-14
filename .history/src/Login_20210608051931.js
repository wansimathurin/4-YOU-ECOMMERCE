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
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button className="Login" type="">Sign In</button>
                </form>
                <p>By signing in Your Agree to our Puppy conditions of Use.Please see our privacy Notice,Our Cookies Notice
                    and Our interest-Based Ads
                </p>
                <button>Create a Puppy World Account</button>
            </div>
        </div>
    )
}

export default Login
