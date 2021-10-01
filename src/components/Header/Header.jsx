import React from 'react'
import Search from './Search'
import Profile from './Profile'

const Header = () => {
    return (
        <div className='container'>
            <div className="header">
                <Search />
                <Profile />
            </div>
        </div>
    )
}

export default Header
