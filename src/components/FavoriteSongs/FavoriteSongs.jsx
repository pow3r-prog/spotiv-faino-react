import React from 'react'
import PlaylistSongsList from '../Playlist/PlaylistSongsList'
import PlaylistTitle from '../Playlist/PlaylistTitle'

const FavoriteSongs = () => {

    return (
        <div className='container'>
             <div className='favorite__songs'>
                <PlaylistTitle />
                <PlaylistSongsList />
            </div>
        </div>
        
    )
}

export default FavoriteSongs
