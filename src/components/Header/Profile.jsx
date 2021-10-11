import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import dropIcon from '../accets/img/dropDownIcon.svg'
import userImage from '../accets/img/userImage.jpg'

const Profile = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='profile'>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
            <img className='profile__avatar' src={userImage} alt="avatar" />
            <div className='profile__name'>Pow3r</div>
            <img style={{width:'15px', height:'15px'}} src={dropIcon} alt="icon" />
            </Button>
            
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
            <div className='profile__links' style={{display:'flex', flexDirection:'column'}}>
                <Link onClick={handleClose} to='/home'>
                    home
                </Link>
                <Link onClick={handleClose} to='/library'>
                    library
                </Link>
                <Link onClick={handleClose} to='/favorite'>
                    favorite
                </Link>
            </div>
            </Menu>
        </div>
    )
}

export default Profile
