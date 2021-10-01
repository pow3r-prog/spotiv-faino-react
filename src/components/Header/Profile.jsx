import React from 'react'
import userImage from '../accets/img/userImage.jpg'

const Profile = () => {
    return (
        <div className='profile'>
            <img className='profile__avatar' src={userImage} alt="avatar" />
            <div className='profile__name'>Pow3r</div>
        </div>
    )
}

export default Profile
