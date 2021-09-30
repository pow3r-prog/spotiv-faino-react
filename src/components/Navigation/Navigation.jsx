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
            <ul className='navigation__list'>
                <li className="navigation__list_item">
                    <Link to='/'>
                        <img src={homeIcon} alt='home'></img>
                    </Link>
                </li>
                <li className="navigation__list_item">
                    <Link to='/library'>
                        <img src={libraryIcon} alt='library'></img>
                    </Link>
                </li>
                <li className="navigation__list_item">
                    <Link to='/favorite'>
                            <img src={favoriteIcon} alt='favorite'></img>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
