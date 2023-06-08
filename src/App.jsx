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


const App = () => {
  const user = null;
  // If we have done sign up and we reload the page so the after the reload i still have logged in data in my app
  useEffect(()=>{
    // onAuthStateChanged is like a memory of our browser who is remenbering out signin data
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // Logged In
        console.log(userAuth);
      } else{
        // Logged Out
      }
    })
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
