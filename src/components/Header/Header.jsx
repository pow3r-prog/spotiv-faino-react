import React from 'react'
// import userImage from '../accets/img/userImage.jpg'

const Header = () => {
    return (
        <div className="container">
            <div className='header'>
                <form className="search__form">
                    <input type="text" placeholder='Search song...' className='search__input' />
                </form>
            </div>
        </div>
    )
}

export default Header
