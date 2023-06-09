import React, { useEffect } from 'react'
import "./App.css"
import HomeScreen from './components/HomeScreen'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import { auth } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './State/features/userSlice';


const App = () => {
  // get the user form the store
  const user = useSelector(selectUser);
  console.log(user);

  //use to give data form component to store
  const dispatch = useDispatch();
  // If we have done sign up and we reload the page so the after the reload i still have logged in data in my app
  useEffect(()=>{
    // onAuthStateChanged is like a memory of our browser who is remenbering out signin data
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // Logged In
        // now we have the obejct of user Logged in given by onAuthStateChange
        // now we will give object of user info to userState
        // then i can access that user anywhere inside my app 
        // passing payload to login 
        // passing an object to login state
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))

      } else{
        // Logged Out

        // restateing the user state to null
        dispatch(logout)
      }
    })

    // The return statement in the useEffect callback function is used for cleanup. In this case, it returns a function that calls unsubscribe when the component unmounts. This ensures that the authentication state listener is removed to prevent memory leaks or unnecessary updates. chatGPT
    return  unsubscribe()
    
  },[])
  return (
    <div className='app'>
      <Router>
        {
          !user ? (
            <Login />
          ):(
              <Routes>
                <Route exact path="/" element={<HomeScreen />} />
              </Routes>
            )
        }
      </Router>
    </div>
  )
}

export default App


// now we are able to login with account now i am sleepy 239