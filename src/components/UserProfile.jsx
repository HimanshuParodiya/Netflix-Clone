import React from 'react'
import "./UserProfile.css"
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../State/features/userSlice'
import { auth } from '../firebase/firebase'

const UserProfile = () => {
    const user = useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <Navbar />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKQHtDytGK38T4XbuIBdgwFFrzP051r1rzA&usqp=CAU" alt="" />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <button onClick={() => auth.signOut()} className="profileScreen_signOut">
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
