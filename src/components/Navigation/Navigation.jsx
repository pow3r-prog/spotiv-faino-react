import React from 'react'
import { NavLink } from 'react-router-dom'
import logoIcon from '../accets/img/logo.svg'
import homeIcon from '../accets/img/homeIcon.svg'
import libraryIcon from '../accets/img/libraryIcon.svg'
import favoriteIcon from '../accets/img/favoriteIcon.svg'



const Navigation = () => {
    return ( 
        <div className='navigation'>
            <div className='logo'>
                <NavLink to='/'>
                    <img src={logoIcon} alt='logo'></img>
                </NavLink>
            </div>
            <div className='navigation__list'>
                <NavLink className='home__page' activeClassName='home__page active' to='/home'>
                    <img src={homeIcon} alt='home'></img>
                </NavLink>
                <NavLink className='library__page' activeClassName='library__page active' to='/library'>
                    <img src={libraryIcon} alt='library'></img>
                </NavLink>
                <NavLink  className='favorite__page' activeClassName='favorite__page active'  to='/favorite'>
                    <img src={favoriteIcon} alt='favorite'></img>
                </NavLink>
            </div>  
        </div>
    )
}

export default Navigation
