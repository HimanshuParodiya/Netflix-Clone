import React from 'react'
import "./UserProfile.css"
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../State/features/userSlice'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import Plan from './Plan'
import logo from '../assets/logo.png'

const UserProfile = () => {
   let navigate = useNavigate()
    const user = useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <Navbar />
            <div className="profileScreen_body">
                <div className="profileScreen_header">
                <h1>Edit Profile</h1>
            <button onClick={() => {navigate("/")}} className="goToAccount">Go to Account</button>

                </div>
                <div className="profileScreen_info">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKQHtDytGK38T4XbuIBdgwFFrzP051r1rzA&usqp=CAU" alt="" />
                    <div className="profileScreen_details">
                        <h2>Hello {user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <div className="profileScreen_plansDetails">
                                <Plan plan="Basic Plan" videoQuality="720" />
                                <Plan plan="Standard Plan" videoQuality="1080" />
                                <Plan plan="Premium Plan" videoQuality="4k + HDR" />

                            </div>
                            <div className="profileScreen_Buttons">
                            <button onClick={() => auth.signOut()} className="profileScreen_signOut">
                                Sign out
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
