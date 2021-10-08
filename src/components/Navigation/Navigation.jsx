import React from 'react'
import { Link } from 'react-router-dom';
import logoIcon from '../accets/img/logo.svg'
import homeIcon from '../accets/img/homeIcon.svg'
import libraryIcon from '../accets/img/libraryIcon.svg'
import favoriteIcon from '../accets/img/favoriteIcon.svg'



const Navigation = () => {
    return ( 
        <div className='navigation'>
            <div className='logo'>
                <Link to='/'>
                    <img src={logoIcon} alt='logo'></img>
                </Link>
            </div>
            <div className="navigation__list">
                <Link className='home__page' to='/'>
                    <img src={homeIcon} alt='home'></img>
                </Link>
                <Link className='library__page' to='/library'>
                    <img src={libraryIcon} alt='library'></img>
                </Link>
                <Link className='favorite__page' to='/favorite'>
                        <img src={favoriteIcon} alt='favorite'></img>
                </Link>
            </div>  
        </div>
    )
}

export default Navigation
