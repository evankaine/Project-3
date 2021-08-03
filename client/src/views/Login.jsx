import React from 'react';
import './login.css'
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";


export default function Login() {
  return (
    
    <div className="wrapper">
      <div className="form">
        <div className="title">
          <h1>imgNation</h1>
        </div>
        <SignIn />
        <br />
        <SignUp />
      </div>
    </div>
      
  )
}
