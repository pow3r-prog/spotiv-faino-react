import React from 'react'
import { Link } from 'react-router-dom'

const ProfileMenu = () => {
    const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=b1e1cf3fcef74728b255418cf22ce2b1&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

    return (
         <div className='profile__menu'>
             <div className='menu__list'>
                    <Link className="menu__list_item" to='/profile' style={{color:'#fff'}}>
                        Profile
                    </Link>
                    <Link className="menu__list_item" to='/settings' style={{color:'#fff'}}>
                        Settings
                    </Link>
                    <Link className="menu__list_item" to={AUTH_URL} style={{color:'#fff'}}>
                        Log out
                    </Link>
             </div>
        </div>
    )
}

export default ProfileMenu
