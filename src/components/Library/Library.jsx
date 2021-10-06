import React from 'react'
import playlistImage from '../accets/img/playlistImage.jpg'

const Library = () => {
    return (
        <div className='container'>
            <ul className='library__list'>
                <li className='library__list_item'>
                    <img src={playlistImage} alt='img'/>
                    <div>Name of playlist</div>
                </li>
                <li className='library__list_item'>
                    <img src={playlistImage} alt='img'/>
                    <div>Name of playlist</div>
                </li>
                <li className='library__list_item'>
                    <img src={playlistImage} alt='img'/>
                    <div>Name of playlist</div>
                </li>
                <li className='library__list_item'>
                    <img src={playlistImage} alt='img'/>
                    <div>Name of playlist</div>
                </li>
                <li className='library__list_item'>
                    <img src={playlistImage} alt='img'/>
                    <div>Name of playlist</div>
                </li>
                <li className='library__list_item'>
                    <img src={playlistImage} alt='img'/>
                    <div>Name of playlist</div>
                </li>
                <li className='library__list_item'>
                    <img src={playlistImage} alt='img'/>
                    <div>Name of playlist</div>
                </li>
                <li className='library__list_item'>
                    <img src={playlistImage} alt='img'/>
                    <div>Name of playlist</div>
                </li>
                <li className='library__list_item'>
                    <img src={playlistImage} alt='img'/>
                    <div>Name of playlist</div>
                </li>
            </ul>
        </div>
    )
}

export default Library
