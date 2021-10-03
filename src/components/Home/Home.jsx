import React from 'react'
import musicIcon from '../accets/img/musicIcon.svg'

const MainPage = () => {
    return (
        <div className='container'>
            <div className='main__playlists'>
                <div className='your__playlists'>
                    <div className="playlists__title">
                        <div className="playlists__title_text">Your playlists</div>
                        <div className="playlists__title_button">More</div>
                    </div>
                    <ul className='playlists__list'>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №1</li>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №2</li>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №3</li>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №4</li>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №5</li>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №6</li>
                    </ul>  
                </div>
            </div>
            <div className='main__playlists'>
                <div className='your__playlists'>
                    <div className="playlists__title">
                        <div className="playlists__title_text">Your playlists</div>
                        <div className="playlists__title_button">More</div>
                    </div>
                    <ul className='playlists__list'>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №1</li>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №2</li>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №3</li>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №4</li>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №5</li>
                        <li className='playlists__list_item'><img src={musicIcon} alt="musicIcon" />Playlist №6</li>
                    </ul>  
                </div>
            </div>
            
        </div>
    )
}

export default MainPage
