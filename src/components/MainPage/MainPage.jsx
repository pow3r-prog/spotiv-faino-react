import React from 'react'

const MainPage = () => {
    return (
        // <div className='container'>
            <div className='main__playlists'>
                <div className='your__playlists'>
                    <div className="playlists__title">
                        <div className="playlists__title_text">Your playlists</div>
                        <div className="playlists__title_button">More</div>
                    </div>
                    <ul className='playlists_list'>
                        <li className="playlists_item">Playlist №1</li>
                        <li className="playlists_item">Playlist №2</li>
                        <li className="playlists_item">Playlist №3</li>
                        <li className="playlists_item">Playlist №4</li>
                        <li className="playlists_item">Playlist №5</li>
                        <li className="playlists_item">Playlist №6</li>
                    </ul>  
                </div>
            </div>
        // </div>
    )
}

export default MainPage
