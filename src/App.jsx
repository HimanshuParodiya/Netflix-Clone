import React from 'react'
import "./App.css"
import HomeScreen from './components/HomeScreen'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';


const App = () => {
  const user = null;
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
