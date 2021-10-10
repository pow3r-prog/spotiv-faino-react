import React from 'react'
import './Playlist.scss'
import musicIcon from '../accets/img/musicImage.svg'

const SongsList = () => {
    return (
        <ol className='songs__list'>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
                    <li className='songs__list_item'><img src={musicIcon} alt='img' /> Name of song</li>
        </ol>
    )
}

export default SongsList
