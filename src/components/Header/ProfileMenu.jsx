import React from 'react'
import { Link } from 'react-router-dom'

const ProfileMenu = () => {
    return (
         <div className='profile__menu'>
             <div className='menu__list'>
                    <Link className="menu__list_item" to='/profile' style={{color:'#fff'}}>
                        Profile
                    </Link>
                    <Link className="menu__list_item" to='/settings' style={{color:'#fff'}}>
                        Settings
                    </Link>
                    <Link className="menu__list_item" to='/favorite' style={{color:'#fff'}}>
                        Log out
                    </Link>
             </div>
        </div>
    )
}

export default ProfileMenu
