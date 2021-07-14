import React from 'react';
import "./Login.css";
import logo1  from "./logo1.png";
import {Link} from "react-router-dom";
import {useState} from "react";
import {auth} from "./firebase"

function Login() {
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn =e =>{
        e.preventDefault();
        //some firebase login
    }
    const register=e=>{
        e.preventDefault();
        // fireBase register
       auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
           if (auth)
       }).catch(error=>alert(error.message))
    }
    return (
        <div className="Login">
            <Link to="/">
            <img className="header__logo" src={logo1} alt=""></img>
            </Link>
            <div className="Login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <button className="Login__signInBtn" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>By signing in Your Agree to our Puppy conditions of Use.Please see our privacy Notice,Our Cookies Notice
                    and Our interest-Based Ads
                </p>
                <button onClick={register} className="Login__RegisterBtn">Create a Puppy World Account</button>
            </div>
        </div>
    )
}

export default Login
