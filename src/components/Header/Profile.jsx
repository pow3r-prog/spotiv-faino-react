import React, { useState, useEffect, useRef } from 'react'
import userImage from '../accets/img/userImage.jpg'
import ProfileMenu from './ProfileMenu'

const Profile = () => {
    const ref = useRef()
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (open && ref.current && !ref.current.contains(e.target)) {
            setOpen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [open])
    return (
        <div className='profile' onClick={() => setOpen(!open)} ref={ref}>
            <img className='profile__avatar' src={userImage} alt='avatar' />
            <div className='profile__name'>Pow3r</div>
            {open && <ProfileMenu />}
        </div>
    )
}

export default Profile
