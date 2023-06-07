import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from '../assets/logo.png'

const Navbar = () => {
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

                <img className='nav_logo' src={logo} alt="Red Color Netflix Logo with  transparent background" />


                <img className='nav_avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKQHtDytGK38T4XbuIBdgwFFrzP051r1rzA&usqp=CAU" alt="Netflix Avatar Logo" />
            </div>
        </div>
    )
}

export default Navbar
