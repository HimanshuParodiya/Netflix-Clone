import React, { useState } from 'react'
import "./WelcomePage.css"
import logo from "../assets/logo.png"
import SignIn from './SignIn';
import Login from './Login';


const WelcomePage = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isLogin, setisLogin] = useState(false);


  const handleLogo = () =>{
    setIsSignIn(false)
    setisLogin(false)
  }

  const handlesignup = () =>{
    setisLogin(false)


    setIsSignIn(true)
  }

  const handleLogin = () =>{
    setisLogin(true)
    setIsSignIn(false)
  }


  

  return (
    <div className='WelcomePage'>
      <div className="WelcomePage_background">
        <img className='WelcomePage_logo' src={logo} alt="" onClick={handleLogo} />
        {
          isLogin ?
          <button className='WelcomePage_button' onClick={handlesignup }>Sign In</button>
          :
          <button className='WelcomePage_button' onClick={handleLogin}>Log In</button>
        }
        <div className="WelcomePage_gradient" />
      </div>

      <div className="WelcomePage_body">
        {
          isSignIn ? (
            <SignIn />
          ) :
          (
              isLogin ? (<Login />) :
              <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className="WelcomePage_input">
                  <form >
                    <input type="email" placeholder='Email Address' />
                    <button className='WelcomePage_getStarted' onClick={() => setIsSignIn(true)} >GET STARTED</button>
                  </form>
                </div>
              </>
            )
        }

      </div>
    </div>
  )
}

export default WelcomePage
