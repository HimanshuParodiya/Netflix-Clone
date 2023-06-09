import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'



const Navbar = () => {
    let navigateTo   = useNavigate()
    const [show, setShow] = useState(false)
    const transitionNav = () =>{
        if (window.scrollY > 100) {
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNav)
        return ()=>{
            window.removeEventListener("scroll", transitionNav)
        }
    },[])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">

                <img onClick={() => {navigateTo("/")}} className='nav_logo' src={logo} alt="Red Color Netflix Logo with  transparent background" />

                {/* <Link to={"/profile"}> we will use useNavigation here for more go to the bottom of this component
                    <img className='nav_avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKQHtDytGK38T4XbuIBdgwFFrzP051r1rzA&usqp=CAU" alt="Netflix Avatar Logo" />
                </Link> */}
                    <img onClick={() => {navigateTo("/profile")}}  className='nav_avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKQHtDytGK38T4XbuIBdgwFFrzP051r1rzA&usqp=CAU" alt="Netflix Avatar Logo" />
            </div>
        </div>
    )
}

export default Navbar



// by chatGPT
// useNavigate 
//You need to navigate programmatically based on certain events or conditions. For example, navigating after a button click, form submission, or a callback function.

// You want more control over the navigation process, such as conditional navigation or performing additional actions before or after navigation.

// You need to navigate dynamically based on runtime data or calculations.

// Link 
// You want to create links or navigation elements within your components.

// You prefer a declarative approach to define the navigation target directly in the component's render structure.

// You want to leverage the built-in click handling and routing capabilities provided by Link.

// You have static or known navigation targets that don't require runtime calculations or dynamic decision-making.