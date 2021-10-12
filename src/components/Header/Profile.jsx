import React, { useState } from 'react'
import userImage from '../accets/img/userImage.jpg'
import ProfileMenu from './ProfileMenu'

const Profile = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='profile' onClick={() => setOpen(!open)}>
            <img className='profile__avatar' src={userImage} alt='avatar' />
            <div className='profile__name'>Pow3r</div>
            {/* {open ? <ProfileMenu /> : false} */}
            {open && <ProfileMenu />}
        </div>
    )
}

export default Profile
