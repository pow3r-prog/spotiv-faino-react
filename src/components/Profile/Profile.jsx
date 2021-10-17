import React from 'react'
import profileIcon from '../accets/img/profilePhoto.jpeg'


const Profile = () => {
    return (
        <div className='container'>
            <div className="title">
                <img className='title__photo' src={profileIcon} alt="" />
                <div className='profile__info'> 
                    <h3>Profile</h3>
                    <h1 className='title__name'>Pow3r</h1>
                </div>
            </div>
        </div>
    )
}

export default Profile
