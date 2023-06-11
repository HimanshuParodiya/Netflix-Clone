import React, { useRef } from 'react'
import "./Login.css"
import { auth, signInWithEmailAndPassword } from '../firebase/firebase'

const Login = () => {
    // getting email
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleLoginPage = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, 
            emailRef.current.value,
            passwordRef.current.value
            
         ).then((authUser) =>{
            // console.log(authUser);
        }).catch((error)=>{
            alert(error.message)
            // console.log(error);
        })
        
    }
    return (
        <div className='signInScreen'>
            <form >
                <h1>LogIn To Your Account</h1>
                <input ref={emailRef} type="email" placeholder='Email' />
                <input ref={passwordRef} type="password" placeholder='Password' />
                <button type="submit" onClick={handleLoginPage}>LogIn</button>
                
                <h4>
                    <span className="signInScreen_gray">New to Netflix? </span>
                    <span className="signInScreen_link">Click Sign Up now.</span>
                     
                </h4>
            </form>
        </div>
    )
}

export default Login
