import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.scss'
import logoIcon from '../accents/img/logo.svg'
import homeIcon from '../accents/img/homeIcon.svg'
import libraryIcon from '../accents/img/libraryIcon.svg'
import favoriteIcon from '../accents/img/favoriteIcon.svg'

const Navigation = () => {
    return ( 
        <div className='container'>
            <div className='logo'>
                <Link style={{ textDecoration: 'none' }} to='/'>
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
                    <Link to='/'>
                        <img src={libraryIcon} alt='library'></img>
                    </Link>
                </li>
                <li className="navigation__list_item">
                    <Link to='/'>
                            <img src={favoriteIcon} alt='favorite'></img>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
