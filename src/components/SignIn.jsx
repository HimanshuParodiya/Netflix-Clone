import React, { useRef } from 'react'
import "./SignIn.css"
import { auth, createUserWithEmailAndPassword } from '../firebase/firebase'

const SignIn = () => {
    // getting email
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,
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
                <h1>Sign In To Create Your Account</h1>
                <input ref={emailRef} type="email" placeholder='Email' />
                <input ref={passwordRef} type="password" placeholder='Password' />
                <button type="submit" onClick={register}>Sign In</button>
                
                <h4>
                    <span className="signInScreen_gray">Already Using Netflix? </span>
                    <span className="signInScreen_link" >Click the Login now.</span>
                     
                </h4>
            </form>
        </div>
    )
}

export default SignIn
