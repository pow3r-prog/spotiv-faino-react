import React from 'react'
import userImage from '../accets/img/userImage.jpg'

const Header = () => {
    return (
        // <div className="container">
            <div className='header'>
                <form className="search__form">
                    <input type="text" placeholder='Search song...' className='search__input' />
                </form>
                <div className="profile">
                    <img className='profile__avatar' src={userImage} alt="avatar" />
                    <div className='profile__name'>Pow3r</div>
                    <div></div>
                </div>
            </div>
        // </div>
    )
}

export default Header
