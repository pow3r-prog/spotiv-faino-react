import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.scss'
import logoSvg from '../accents/img/logo.svg'

const Navigation = () => {
    return ( 
        <div className='container'>
            <Link style={{ textDecoration: 'none' }} to='/'>
            <img width='68' src={logoSvg} alt='logo'></img>
            </Link>
        </div>
    )
}

export default Navigation
