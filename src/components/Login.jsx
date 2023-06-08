import React, { useState } from 'react'
import "./Login.css"
import logo from "../assets/logo.png"
import SignIn from './SignIn';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <div className='loginScreen'>
      <div className="loginScreen_background">
        <img className='loginScreen_logo' src={logo} alt="" onClick={() => setIsSignIn(false)} />
        <button className='loginScreen_button' onClick={() => setIsSignIn(true)}>Sign In</button>
        <div className="loginScreen_gradient" />
      </div>

      <div className="loginScreen_body">
        {
          isSignIn ? (
            <SignIn />
          ) :
            (
              <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className="loginScreen_input">
                  <form >
                    <input type="email" placeholder='Email Address' />
                    <button className='loginScreen_getStarted' onClick={() => setIsSignIn(true)} >GET STARTED</button>
                  </form>
                </div>
              </>
            )
        }

      </div>
    </div>
  )
}

export default Login
